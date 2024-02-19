"use client";

import { SchemaType } from "@/app/dashboard/clients/(form)";
import { ClientForm } from "@/app/dashboard/clients/form";

interface ClientEditContentProps {
  data: SchemaType;
  id: string;
}

export default function ClientEditContent({
  data,
  id,
}: ClientEditContentProps) {
  const onSubmit = async (values: SchemaType) => {
    const response = await fetch(`/client/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ client: values }),
    });
  };

  return (
    <ClientForm
      onSubmit={(values) => {
        onSubmit(values);
      }}
      data={data}
    />
  );
}
