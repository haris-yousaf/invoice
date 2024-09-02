import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "./components/ClientProvider"; // Import the client provider component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Invoice Generator",
  description: "Invoice Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
