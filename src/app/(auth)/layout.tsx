import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import ProviderLogin from "@/components/Auth/ProviderLogin";
import { WEBSITE_CONFIG } from "@/config";
export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage({
  children
}: {
  children: React.ReactNode | any
}) {
  const CurrentPath: any = children?.props?.childPropSegment;
  const RedirectPath = CurrentPath === "login" ? "register" : "login";
  return (
    <>
      <Link
        className="text-lg ml-2 md:ml-4 mr-5 p-2 w-48 z-20 absolute  top-5 left-5 rounded-sm  lg:ml-0 shadow-md backdrop-brightness-200 font-bold tracking-tight flex gap-2 items-center flex-row"
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
      <div className="container uppercase relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href={`/${RedirectPath}`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          {RedirectPath}
        </Link>

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Welcome where passion meets the plate. Our culinary
                journey is fueled by an unwavering commitment to crafting
                exceptional dining experiences. Motivated by a love for food
                that transcends the ordinary, we embark on a gastronomic
                adventure that celebrates flavor, innovation, and authenticity.
                Every dish is a labor of love, meticulously prepared to
                tantalize your taste buds and elevate your dining moments. From
                farm-fresh ingredients to culinary artistry, our motivation lies
                in creating a symphony of tastes that resonate with your senses.
                Join us on this flavorful odyssey, where each bite tells a story
                of dedication, passion, and the joy of good food.&rdquo;
              </p>
              <footer className="text-sm">
                <Link href="https://shahriarhasan.vercel.app">Mr. Hasan</Link>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            {children}
            <ProviderLogin />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
