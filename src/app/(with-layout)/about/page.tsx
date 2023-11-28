import { useSession } from "next-auth/react";
import React from "react";

const AboutPage = () => {
  const { data: session} = useSession();
  console.log(session);
  console.log()
  return <div>This is about page</div>;
};

export default AboutPage;
