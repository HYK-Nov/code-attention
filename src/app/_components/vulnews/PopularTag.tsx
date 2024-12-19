export default function PopularTag() {
  return (
    <>
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
    </>
  );
}
