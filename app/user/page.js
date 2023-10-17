"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(status);

  return (
    <div>
      User page
      <button>Sign Out</button>
    </div>
  );
};

export default page;
