"use client";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Children, ReactNode, useMemo, useState } from "react";

const bookkSerifThin = localFont({
  src: "../../public/fonts/bookk_serif_thin.ttf",
});

const PhotoGroup = ({ children }: { children: ReactNode }): ReactNode => {
  const [viewMore, setViewMore] = useState(false);
  const childrenCount = Children.count(children);
  const renderedChildren = useMemo(() => {
    if (childrenCount === 1 || viewMore) {
      return children;
    }
    return Children.toArray(children).slice(0, 9);
  }, [viewMore, children, childrenCount]);
  const handleClickViewMore = () => {
    setViewMore(true);
  };
  return (
    <>
      <div className="m-auto overflow-hidden pl-0.5">{renderedChildren}</div>
      {!viewMore && (
        <div
          className="mt-5 h-[45px] w-full cursor-pointer border border-solid border-[#a7adbb] text-center"
          onClick={handleClickViewMore}
        >
          <span
            className={cn(
              bookkSerifThin.className,
              "text-[13px] leading-[45px]",
            )}
          >
            더보기
          </span>
        </div>
      )}
    </>
  );
};

export default PhotoGroup;
