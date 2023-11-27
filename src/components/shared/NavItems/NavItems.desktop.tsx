"use client";

import { useState } from "react";
import MenuItem from "./MenuItem";

const DesktopNav = ({ data }: any) => {
  // console.log(data);
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full">
      {data.map((item: any, index: number) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else setActiveIndex(index);
        };
        const isOpen = index === activeIndex;
        return (
          <MenuItem
            key={item?.id}
            category={item}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default DesktopNav;
