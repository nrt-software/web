export async function GET() {
  const res = await fetch(`${process.env.NEXT_API_URL}/clients`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  const clients = await res.json();

  return Response.json({ clients });
}
