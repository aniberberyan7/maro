
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Online Store Delivery Shop",
  description: "online store delivery shop for products from Iran and other countries brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
