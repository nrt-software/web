export default async function Page({ params }: { params: { id: string } }) {
  return <div>Client Details {params.id}</div>;
}
