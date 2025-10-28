import type { Metadata } from "next";
import "./globals.css";
import Header from "@/uis/Header";

export const metadata: Metadata = {
  title: "Clone KBIZhrd",
  description: "clone coding for KBIZ hrd",
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
      </body>
    </html>
  );
}
