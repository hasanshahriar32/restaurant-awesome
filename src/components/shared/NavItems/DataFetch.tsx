import DesktopNav from "./NavItems.desktop";
const dotenv = require("dotenv");
const path = require("path");

//location
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

export const TrendyMenu = async () => {
  const menuUrl = `${process.env.BACKEND_URL || "http://localhost:5000"}/navMenu`;
  const res = await fetch(menuUrl, {
    next: {
      revalidate: 3600,
    },
  });

  const data = await res.json().catch((err) => {
    console.log(err);
  });
  return <DesktopNav data={data} />;
};
