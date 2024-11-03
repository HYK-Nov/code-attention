"use client";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { ReactNode } from "react";
import { Button } from "@headlessui/react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    className={"text-slate-500 hover:font-semibold hover:text-slate-800"}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isLogin } = useUserStore();

  return (
    <header
      className={
        "bg-background/30 sticky top-0 mb-5 flex justify-center border-0 border-b-2 py-4 backdrop-blur"
      }
    >
      <div
        className={
          "flex w-screen max-w-screen-2xl items-center justify-between gap-5 px-[1rem] md:px-[3rem]"
        }
      >
        <div className={"flex items-center gap-5"}>
          <Link href={"/"} className={"text-primary text-2xl font-black"}>
            Code Attention
          </Link>
          <NavLink href={"/news"}>보안 뉴스</NavLink>
        </div>
        <div className={"flex items-center justify-between gap-5"}>
          {isLogin && <NavLink href={"/library"}>라이브러리</NavLink>}
          <Link href={"/login"}>
            <Button
              className={
                "bg-primary hover:bg-primary/90 rounded px-3 py-1.5 text-white"
              }
            >
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
