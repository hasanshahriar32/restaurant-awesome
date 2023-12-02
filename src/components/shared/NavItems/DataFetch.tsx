import DesktopNav from "./NavItems.desktop";
const dotenv = require("dotenv");
const path = require("path");

//location
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

export const TrendyMenu = async () => {
  const menuUrl = `https://r7j3ddww-5000.inc1.devtunnels.ms/navmenu`;
  console.log(menuUrl);
  const res = await fetch(menuUrl, {
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  });

  const thisData = await res.json().catch((err) => {
    console.log(err);
  });
  return <DesktopNav data={thisData} />;
};
