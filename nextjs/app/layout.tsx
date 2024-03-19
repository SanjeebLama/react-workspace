import type { Metadata } from "next";
import "./globals.css";

/**
 * This is used just for SEO, adding global styles and meta-data
 */

export const metadata: Metadata = {
  title: "SJ | Next",
  description: "Testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
