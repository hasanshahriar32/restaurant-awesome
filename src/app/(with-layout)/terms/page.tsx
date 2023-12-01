import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
const TermsPage = async () => {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    redirect("/register");
  }
  return <div>This is term page</div>;
};

export default TermsPage;
