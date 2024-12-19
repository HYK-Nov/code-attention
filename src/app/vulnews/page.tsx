import { Button } from "@headlessui/react";
import ArticleButton from "@/app/_components/vulnews/ArticleButton";
import PopularTag from "@/app/_components/vulnews/PopularTag";
import { getArticles } from "@/server/article.action";

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
            <h1 className={"pb-5 text-xl font-bold text-primary"}>
              보안 취약점 기사
            </h1>
            <div className={"flex h-fit gap-5 text-secondary"}>
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
            <ArticleButton newsId={1} />
            <ArticleButton newsId={2} />
            <ArticleButton newsId={3} />
          </div>
        </section>
        <aside className={"col-span-2 w-full pl-8"}>
          <PopularTag />
        </aside>
      </div>
    </main>
  );
}
