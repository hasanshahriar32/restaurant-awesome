"use client"
import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./account-form";
import { Button } from "@/components/ui/button";
export default function SettingsAccountPage() {
  async function fetchData() {
    const res = await fetch("/api/auth/user");
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
      <Button onClick={fetchData}>Fetch data to console</Button>
    </div>
  );
}
