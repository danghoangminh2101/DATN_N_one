'use client'
import "./globals.css";
import Header from "@/app/components/Header";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins"
        />
      </head>
      <RecoilRoot>
      <body
      >
        <Header></Header>
        {children}
      </body></RecoilRoot>
    </html>
  );
}
