"use client";

import { SchemaType, professions, registerSchema } from "@/app/register/config";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { CustomInput } from "@/components/ui/input-mask";

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    field: ["name"],
  },
  {
    id: "Step 2",
    name: "Personal Information",
    field: ["profession"],
  },
  {
    id: "Step 3",
    name: "Personal Information",
    field: ["phone"],
  },
  {
    id: "Step 4",
    name: "Personal Information",
    field: ["email"],
  },
  {
    id: "Step 5",
    name: "Personal Information",
    field: ["password"],
  },
];

type FieldName = keyof SchemaType;

export const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const lastStep = currentStep === steps.length - 1;
  const progress = (currentStep / steps.length) * 100;

  const { toast } = useToast();

  const form = useForm<SchemaType>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(values: SchemaType) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  const next = async () => {
    const fields = steps[currentStep].field;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep === steps.length - 1) {
      await form.handleSubmit(onSubmit)();
    } else {
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="w-full lg:w-1/3 relative z-9 mt-10">
      <Progress value={progress} className="my-10 h-2"></Progress>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 0 && (
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
          )}
          {currentStep === 1 && (
            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profissão</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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
          )}
          {currentStep === 2 && (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <CustomInput
                      placeholder="Telefone"
                      {...field}
                      mask="phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {currentStep === 3 && (
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
          )}
          {currentStep === 4 && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="****" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </form>
      </Form>
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={prev}
            variant="secondary"
            disabled={currentStep === 0}
          >
            Voltar
          </Button>
          <Button type="button" onClick={next}>
            {lastStep ? "Enviar" : "Continuar"}
          </Button>
        </div>
      </div>
    </div>
  );
};
