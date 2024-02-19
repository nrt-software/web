export async function getClientDetails(id: string) {
  const res = await fetch(`${process.env.NEXT_API_URL}/clients/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  const details = await res.json();

  return details;
}
