// pages/api/personal_information
import fb from "../../services/firebase";
import { skill } from "@/types/main";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<skill[] | { error: string }>
) {
  if (req.method === "GET") {
    const id: string | undefined =
      process.env.NEXT_PUBLIC_FIREBASE_TECH_STACK_INFORMATION;
    try {
      if (!id) {
        throw new Error("No document ID provided");
      }
      const docRef = fb.db.collection("tech-stack-information").doc(id);
      const docSnap = await docRef.get();
      if (docSnap.exists) {
        const main = docSnap.data()?.tech_stack as skill[];
        res.status(200).json(main);
      } else {
        res.status(404).json({ error: "No documents found" });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      res.status(500).json({ error: errorMessage });
    }
  }
}
