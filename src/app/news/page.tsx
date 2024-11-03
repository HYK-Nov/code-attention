import Link from "next/link";
import { Button } from "@headlessui/react";
import ArticleButton from "@/app/_components/news/ArticleButton";

export default function Page() {
  return (
    <main>
      <section></section>

      <div className={"grid grid-cols-10 divide-x"}>
        <aside className={"col-span-1 flex flex-col gap-1 pr-8 font-semibold"}>
          <Button className={"py-1 text-left hover:text-blue-600"}>전체</Button>
          <Button className={"py-1 text-left hover:text-blue-600"}>CVE</Button>
          <Button className={"py-1 text-left hover:text-blue-600"}>
            CNNVD
          </Button>
        </aside>
        <section className={"col-span-7 px-8"}>
          <div
            className={
              "flex justify-between border-0 border-b border-neutral-300"
            }
          >
            <h1 className={"text-primary pb-5 text-xl font-bold"}>
              보안 취약점 기사
            </h1>
            <div className={"text-secondary flex h-fit gap-5"}>
              <Button className={"flex items-center gap-2"}>
                <div
                  className={
                    "h-[0.4rem] w-[0.4rem] rounded-full bg-neutral-300"
                  }
                />
                <p>최신순</p>
              </Button>
              <Button className={"flex items-center gap-2"}>
                <div
                  className={
                    "h-[0.4rem] w-[0.4rem] rounded-full bg-neutral-300"
                  }
                />
                <p>인기순</p>
              </Button>
            </div>
          </div>
          <div
            className={
              "flex flex-col divide-y pt-10 *:py-5 first:*:pt-0 last:*:pb-0"
            }
          >
            <ArticleButton />
            <ArticleButton />
            <ArticleButton />
          </div>
        </section>
        <aside className={"col-span-2 w-full pl-8"}>
          <h1 className={"text-primary pb-5 text-lg font-bold"}>인기태그</h1>
          <section
            className={
              "text-secondary flex flex-col divide-y rounded px-4 py-5 font-semibold outline outline-1 outline-neutral-300 *:py-2 hover:*:cursor-pointer hover:*:text-blue-600"
            }
          >
            <p>1. 태그</p>
            <p>1. 태그</p>
            <p>1. 태그</p>
            <p>1. 태그</p>
            <p>1. 태그</p>
          </section>
        </aside>
      </div>
    </main>
  );
}
