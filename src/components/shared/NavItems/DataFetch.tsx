import DesktopNav from "./NavItems.desktop";

export const TrendyMenu = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/trendy`, {
    next: {
      revalidate: 3600,
    },
  });

  const data = await res.json();
  return <DesktopNav data={data} />;
};
export const PopularMenu = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/popular`, {
    next: {
      revalidate: 3600,
    },
  });

  const data = await res.json();
  return data;
};
