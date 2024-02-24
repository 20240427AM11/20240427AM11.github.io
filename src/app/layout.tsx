import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
    </html>
  );
}
