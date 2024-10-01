// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// // Define interface for the Firebase configuration
// interface Base {
//   apiKey: string | undefined;
//   authDomain: string | undefined;
//   projectId: string | undefined;
//   storageBucket: string | undefined;
//   messagingSenderId: string | undefined;
//   appId: string | undefined;
//   measurementId: string | undefined;
// }

// export default function Firebase() {
//   const firebaseConfig: Base = {
//     apiKey: process.env.NEXT_PUBLIC_TESTAPIKEY,
//     authDomain: process.env.NEXT_PUBLIC_TESTAUTHDOMAIN,
//     projectId: process.env.NEXT_PUBLIC_TESTPROJECTID,
//     storageBucket: process.env.NEXT_PUBLIC_TESTSTORAGEBUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_TESTMESSAGINGSENDERID,
//     appId: process.env.NEXT_PUBLIC_TESTAPPID,
//     measurementId: process.env.NEXT_PUBLIC_TESTMEASUREMENTID,
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   // Initialize Analytics
//   if (typeof window !== "undefined") {
//     // Only initialize analytics in the browser
//     // getAnalytics(app);
//   }

//   // Firebase utilities
//   const db = getFirestore(app);

//   return {
//     db
//   };
// }

// using admin sdk without using env
// import admin from "firebase-admin";
// const serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// using admin sdk
// setup configuration
import admin from "firebase-admin";
import { getFirestore, Firestore } from "firebase-admin/firestore";
interface FirebaseAdminAppParams {
  projectId: string;
  clientEmail: string;
  storageBucket: string;
  privateKey: string;
}
function formatPrivateKey(key: string) {
  return key.replace(/\\n/g, "\n");
}
export function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
  const privateKey = formatPrivateKey(params.privateKey);

  if (admin.apps.length > 0) {
    return admin.app();
  }
  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey,
  });
  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    storageBucket: params.storageBucket,
  });
}
async function initAdmin() {
  try {
    const params = {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
      privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
    };
    return createFirebaseAdminApp(params);
  } catch (error) {
    console.error("Error initializing Firebase Admin:", error);
  }
}
initAdmin();
const db: Firestore = getFirestore();

export default {
  db,
};
