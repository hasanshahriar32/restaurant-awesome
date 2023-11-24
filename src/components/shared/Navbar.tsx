"use client";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ModeToggle from "@/components/ModeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-secondary sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-secondary border-b border-gray-200 dark:border-gray-700 ">
        <MaxWidthWrapper>
          <div className="">
            <div className="flex h-16 items-center">
              {/* TODO: mobile menu  */}

              <div className="ml-4 mr-5 p-2 rounded-sm flex lg:ml-0 shadow-md dark:backdrop-brightness-200">
                <Link
                  className="text-lg font-bold tracking-tight flex gap-2 items-center flex-row"
                  href="/"
                >
                  <Image
                    className="rounded-full"
                    src="/icons/monkey-logo.webp"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="logo"
                  />
                  <h2 className="text-primary">
                    Food
                    <span className="text-destructive font-extrabold">
                      Monkey
                    </span>
                  </h2>
                </Link>
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
