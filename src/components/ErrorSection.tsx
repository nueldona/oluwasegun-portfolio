"use client";
import React from "react";
import Image from "next/image";
import ErrorImage from "@/public/icons8-error.gif";
import BigErrorImage from "@/public/11235921_11104-removebg-preview.png";
// import { useRouter } from 'next/router';

// const refreshPage = () => {
//   const router = useRouter();
//   router.reload();
// };

const ErrorSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex items-center gap-x-2">
        <Image
          unoptimized={true}
          alt="Error icon gif"
          width={25}
          height={25}
          src={ErrorImage}
          className="mb-3"
        />
        <h1 className="text-2xl font-bold mb-4 text-red-600">
          Oops! Something went wrong.
        </h1>
      </div>
      <Image
        unoptimized={true}
        alt="Error image"
        width={500}
        height={500}
        src={BigErrorImage}
      />
      <p className="text-gray-500">
        Please try refreshing the page or come back later.
      </p>
    </div>
  );
};

export default ErrorSection;
