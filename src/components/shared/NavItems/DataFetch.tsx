import DesktopNav from "./NavItems.desktop";

export const TrendyMenu = async () => {
  const menuUrl = "http://localhost:5000/navMenu";
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
