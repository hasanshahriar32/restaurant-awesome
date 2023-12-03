"use client";
import React, { useLayoutEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const AboutPage = () => {
  const { data: session } = useSession();
  useLayoutEffect(() => {
    if (!session) {
      redirect("/register?callbackUrl=http://localhost:3000");
    }
  }, [session]);
  return (
    <div>
      <Navbar />
      <MaxWidthWrapper>
        <h1 className="text-3xl md:text-5xl text-center my-5">
          Hi, this is {session?.user?.name}
        </h1>
        <Button
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </Button>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
