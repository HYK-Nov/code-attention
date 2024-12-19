export default async function Page({
  params,
}: {
  params: Promise<{ newsId: number }>;
}) {
  const newsId = (await params).newsId;
  return (
    <>
      <div>
        <h2 className={"pb-3 text-3xl font-bold"}>
          [취약성 경고] Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서
        </h2>
        <div className={"flex gap-3"}>
          <p>CVE / CNNVD</p>
          <p>입력시간 {`2024.99.99. 99:99`}</p>
        </div>
      </div>
      <hr className={"my-6"} />
      <div>
        <p>페이지 확인: {newsId}</p>
      </div>
    </>
  );
}
