import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automoti | Every car listing, one intelligent search",
  description:
    "Automoti scans dealerships, platforms, and private sellers in real time — so you see everything, miss nothing, and find your perfect car faster.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
