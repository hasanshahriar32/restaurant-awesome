"use client";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ModeToggle from "@/components/ModeToggle";
import Image from "next/image";
import { WEBSITE_CONFIG } from "@/config";
import { TrendyMenu } from "./NavItems/DataFetch";

const Navbar = () => {
  return (
    <div className=" sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative ">
        <MaxWidthWrapper>
          <div className="backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 ">
            <div className="flex h-16 items-center">
              {/* TODO: mobile menu  */}

              <div className="ml-4 mr-5 px-2 py-1 rounded-sm flex lg:ml-0 shadow-md dark:backdrop-brightness-200">
                <Link
                  className="text-lg font-bold tracking-tight flex gap-2 items-center flex-row"
                  href="/"
                >
                  <Image
                    className="rounded-full"
                    src={WEBSITE_CONFIG[0]?.logo}
                    width={40}
                    height={40}
                    style={{
                      objectFit: "contain", // cover, contain, none
                    }}
                    alt="logo"
                  />
                  <h2 className="text-primary">
                    {WEBSITE_CONFIG[0]?.firstName}
                    <span className="text-destructive font-extrabold">
                      {WEBSITE_CONFIG[0]?.lastName}
                    </span>
                  </h2>
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <TrendyMenu />
              </div>
              <ModeToggle />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
