"use client";

import { ClientForm } from "@/app/dashboard/clients/form";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 lg:w-1/3">
      <ClientForm onSubmit={() => {}} />
    </div>
  );
}
