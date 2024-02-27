import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

const KAKAO_API_KEY = process.env.KAKAO_API_KEY;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "배준오 & 이지나 모바일 청첩장",
  description: "배준오 & 이지나 모바일 청첩장",
  openGraph: {
    title: "배준오 & 이지나 모바일 청첩장",
    description: "2024년 04월 27일 오전 11시 홍대 아만티 호텔 예식장",
    url: "https://20241107am11.github.io",
    siteName: "배준오 & 이지나 모바일 청첩장",
    images: [
      {
        url: "/images/gallery/009.jpeg",
        width: 1280,
        height: 853,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer&autoload=false`}
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
