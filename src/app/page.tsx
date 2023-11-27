"use client"
import Hero from "@/components/Homepage/Hero";
// import Categories from "@/components/Homepage/Categories";
import Perks from "@/components/Homepage/Perks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <Hero />
      </MaxWidthWrapper>
      <section className="border-t py-4 sm:py-6 lg:py-8  border-gray-200 dark:border-gray-700 bg-secondary">
        <MaxWidthWrapper className="">
          {/* <Categories /> */}
          <Perks />
        </MaxWidthWrapper>
      </section>
      {/* TODO: List products  */}
    </>
  );
}
