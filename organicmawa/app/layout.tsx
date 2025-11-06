import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organic Mawa - Complete Organic Farming Knowledge Hub",
  description: "Learn organic cultivation, seed preparation, and natural fertilizer production. Empowering farmers with sustainable farming practices and traditional wisdom.",
  keywords: "organic farming, organic cultivation, seed preparation, organic fertilizer, sustainable agriculture, natural farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
