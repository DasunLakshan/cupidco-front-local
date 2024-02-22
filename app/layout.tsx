import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/common/footer/Footer";

const quicksand = Quicksand({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Cupidco",
  description: "A Sri Lankan Matrimonial Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
