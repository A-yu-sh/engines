"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <button className="mt-20" onClick={signOut}>
        signOut
      </button>
    );
  }
  return (
    <GoogleButton
      className="relative top-64"
      onClick={() => signIn("google")}
    />
  );
};

export default SignIn;
