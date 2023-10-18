"use client";

import useTable from "@/hooks/useTable";
import generateSampleData, { SampleData } from "@/mock/client";

export default function Page() {
  const dataPromise = generateSampleData(20);

  const { table } = useTable<SampleData>({
    dataPromise: dataPromise,
    caption: "A list of clients",
  });

  return <div>{table}</div>;
}
