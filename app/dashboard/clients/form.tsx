"use client";

import { SchemaType, clientSchema } from "@/app/dashboard/clients/(form)";
import { professions } from "@/app/register/config";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomInput } from "@/components/ui/input-mask";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";

interface ClientFormProps {
  onSubmit: (data: SchemaType) => void;
  data?: SchemaType;
}

export function ClientForm({ onSubmit, data }: ClientFormProps) {
  const path = usePathname();
  const isCreate = path.includes("create");
  const form = useForm<SchemaType>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      ...data,
    },
  });

  function onHandleSubmit(values: SchemaType) {
    onSubmit(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onHandleSubmit)}
        className="lg:w-1/3 space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profissão</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sua profissão" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {professions.map((item) => (
                    <SelectGroup key={item.name}>
                      <SelectLabel>{item.name}</SelectLabel>
                      {item.group.map((subitem) => (
                        <SelectItem value={subitem} key={subitem}>
                          {subitem}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <CustomInput placeholder="Telefone" {...field} mask="phone" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">{isCreate ? "Create" : "Edit"}</Button>
        </div>
      </form>
    </Form>
  );
}
