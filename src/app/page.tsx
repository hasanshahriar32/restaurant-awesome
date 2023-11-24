import Hero from "@/components/Homepage/Hero";
// import Categories from "@/components/Homepage/Categories";
import Perks from "@/components/Homepage/Perks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
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
