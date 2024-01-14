import PageContent from "@/app/page-content";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_URL}/api/getProducts`, {
    cache: "reload",
  });
  const data = await res.json();

  return <PageContent billing={data} />;
}
