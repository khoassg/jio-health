import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "normalize.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const avenirNext = localFont({
  src: [
    {
      path: "../assets/fonts/Avenir_Next_Font.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Avenir_Next_Demi_Font.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Avenir_Next_Bold_Font.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Jio Health | Chăm sóc tin cậy. Mọi lúc. Mọi nơi.",
  description: "Khoassg demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={avenirNext.className}>
        <div className="min-w-[1440px] overflow-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
