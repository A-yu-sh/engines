"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import GoogleButton from "react-google-button";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    return router.push("/user");
  }
  return <button onClick={() => signIn("google")}>Sign In</button>;
};

export default SignIn;
