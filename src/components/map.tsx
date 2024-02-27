"use client";

import { cn } from "@/lib/utils";
import { Nanum_Gothic } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  CustomOverlayMap,
  Map as Detail,
  MapMarker,
} from "react-kakao-maps-sdk";

const maps: any = {
  detail: "지도",
  rough: "약도",
};

const gothic = Nanum_Gothic({ weight: ["400", "700"], subsets: ["latin"] });
const markerPosition = { lat: 37.55713946226895, lng: 126.91870574516105 };

const bookkSerifThin = localFont({
  src: "../../public/fonts/bookk_serif_thin.ttf",
});

const bookkSerifBold = localFont({
  src: "../../public/fonts/bookk_serif_bold.ttf",
});

const Map = () => {
  const [type, setType] = useState("detail");
  const [status, setStatus] = useState("lock");
  const [isOpen, setOpen] = useState(true);
  const isLocked = useMemo(() => status === "lock", [status]);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className={cn(
          bookkSerifThin.className,
          "mb-5 text-center leading-[26px] tracking-[0.02em]",
        )}
      >
        <div className="text-[#333333] underline decoration-[#797979] underline-offset-[3.5px]">
          아만티호텔 서울
        </div>
        <div className="text-[#333333]">서울 마포구 월드컵북로 31</div>
        <div className="text-[#333333]">02-332-0158</div>
        <a href="tel:02-332-0158">
          <div className="m-auto mt-2.5 inline-block h-[30px] w-[100px] rounded-[15px] border border-solid border-transparent bg-[#e7b596] bg-[url(/images/icon/tel_white.png)] bg-[length:auto_14px] bg-[position:12px_center] bg-no-repeat pl-[22px] text-sm leading-[31px] text-[#ffffff]">
            전화문의
          </div>
        </a>
      </div>
      <div className="mt-[50px] h-9 leading-9">
        {["detail", "rough"].map((map: string) => (
          <div
            key={map}
            className={cn(
              bookkSerifBold.className,
              "float-left w-1/2 cursor-pointer text-center tracking-[0.01em]",
              type === map
                ? "bg-[#f0d0bc] text-[#ffffff]"
                : "bg-[#f5f5f7] text-[#7f838c]",
            )}
            onClick={() => {
              setType(map);
            }}
          >
            {maps[map]}
          </div>
        ))}
      </div>
      {type === "detail" && (
        <div className="relative">
          <Detail
            center={markerPosition}
            style={{ aspectRatio: 330 / 400 }}
            onClick={() => {
              setStatus("unlock");
            }}
            draggable={!isLocked}
            zoomable={!isLocked}
          >
            <MapMarker
              position={markerPosition}
              onClick={() => {
                setOpen(true);
              }}
            />
            {isOpen && (
              <CustomOverlayMap position={markerPosition}>
                <div
                  className={cn(
                    gothic.className,
                    "absolute bottom-10 left-0 -ml-[100px] h-[100px] w-[200px] text-left leading-[1.5]",
                  )}
                >
                  <div className="h-[90px] w-[200px] rounded-[5px] border-0 bg-[#ffffff] shadow-[0px_1px_2px_#888] after:absolute after:bottom-0 after:left-1/2 after:-ml-3 after:h-3 after:w-[22px] after:bg-[url(//t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png)] after:content-['']">
                    <div className="box-content h-6 border-b border-solid border-b-[#dddddd] bg-[#eeeeee] pl-2.5 pt-[5px] text-sm font-bold">
                      아만티호텔 서울
                      <div
                        className="absolute right-2.5 top-[5px] h-[17px] w-[17px] bg-[url(//t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png)] text-[#888888]"
                        onClick={handleClose}
                      />
                    </div>
                    <div className="m-0 p-0">
                      <div className="ml-[13px] mt-[13px] h-[60px]">
                        <div className="text-xs">서울 마포구 월드컵북로 31</div>
                        <div className="mt-[1px] text-[11px] text-[#888888]">
                          (지번) 서울 마포구 서교동 447-1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomOverlayMap>
            )}
          </Detail>
          {isLocked && (
            <Image
              className="absolute right-0 top-5 z-10 h-[35px] opacity-80"
              alt="lock"
              src="images/map_lock.png"
              height={35}
              width={210}
            />
          )}
          <div className="mt-[47px] pb-5 leading-6" />
        </div>
      )}

      {type === "rough" && (
        <div className="relative aspect-[330/490] text-right">
          <Image src="images/map.gif" alt="map" fill />
        </div>
      )}
    </>
  );
};

export default Map;
