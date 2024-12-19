import Link from "next/link";

type TProps = { newsId: number };

export default function ArticleButton({ newsId }: TProps) {
  return (
    <Link href={`/vulnews/article/${newsId}`}>
      <div className={"flex cursor-pointer flex-col gap-1 rounded"}>
        <p className={"text-lg font-bold hover:text-blue-600"}>
          [취약성 경고] Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </p>
        <p className={"line-clamp-1"}>
          최근 Microsoft는 다양한 보안 취약점에 대한 공지를 공식적으로
          발표했으며, 이 취약점 공지에는 총 80개의 취약점 이 취약점 공지에는 총
          80개의 취약점
        </p>
        <div className={"flex gap-2 text-sm"}>
          <p>Microsoft</p>
          <p>2일 전</p>
        </div>
      </div>
    </Link>
  );
}
