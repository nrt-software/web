"use client";

import {
  experimental_useFormStatus as useFormStatus,
  experimental_useFormState as useFormState,
} from "react-dom";
import { create } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Page() {
  const [state, formAction] = useFormState(create, null);
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col gap-4">
      <form action={formAction} className="flex gap-4">
        <Input type="text" name="message" className="flex-1" />
        <Button type="submit" disabled={pending} aria-disabled={pending}>
          {pending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
      {state?.message && <p>{state?.message}</p>}
    </div>
  );
}
