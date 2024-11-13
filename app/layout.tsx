import type { Metadata } from "next";
import { DM_Sans } from "@next/font/google";
import "./globals.css";
import Header from "./components/Header-bg-white";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Agency Website",
  description: "Your Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
