"use client";

import * as React from "react";
import { useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Login({ className, ...props }: any) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { data: session } = useSession();
  useLayoutEffect(() => {
    if (session) {
      redirect("/");
    }
  }, [session]);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // get form data
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // sign in
    try {
      const data = await signIn("credentials", {
        redirect: true,
        email,
        password,
      });
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="Your Email Address"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Your Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
    </div>
  );
}
