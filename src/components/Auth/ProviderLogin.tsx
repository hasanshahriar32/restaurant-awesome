"use client";
import * as React from "react";
import { Icons } from "@/components/ui/icons";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
export default function ProviderLogin({ searchParams }: any) {
  console.log(searchParams?.callbackUrl);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  return (
    <div className="uppercase">
      <div className="relative ">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex mb-3 justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="w-full flex-col  justify-between items-center">
        <Button
          onClick={() => {
            signIn("github", { callbackUrl: searchParams?.callbackUrl || "/" });
          }}
          variant="outline"
          type="button"
          className="w-full mb-1"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Github
        </Button>
        <Button
          onClick={() => {
            signIn("google", { callbackUrl: searchParams?.callbackUrl || "/" });
          }}
          variant="outline"
          className="w-full "
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <span></span>
          )}{" "}
          Google
        </Button>
      </div>
    </div>
  );
}
