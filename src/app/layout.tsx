import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/_components/Header";
import ThemeProvider from "@/app/_components/ThemeProvider";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased`}>
        <ThemeProvider>
          <Header />
          <div className={"container"}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
