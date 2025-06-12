 "use client"

import CrakBtn from "@/components/miniComp/button/CrakBtn";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="px-2 py-2 lg:flex lg:items-center lg:justify-center" >
      <img src="/not-found.gif" alt="not found" className="lg:w-1/2" />

      <div className="text-center lg:w-1/2" >
        <h1 className="text-2xl font-medium mb-5 bg-gradient-to-r from-red-500 to-rose-500 text-transparent bg-clip-text md:text-4xl md:pb-4">
          Sorry, there's Nothing Here...
        </h1>
        <p className="text-sm px-4 text-gray-500">
          Uh no, we cant seem to find the page you're looking for.
        </p>
        <Link href="/" className="flex items-center justify-center mt-5">
          <CrakBtn />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
