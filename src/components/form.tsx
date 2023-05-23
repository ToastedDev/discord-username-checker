"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/uiForm";
import { Button } from "./button";
import { Input } from "./input";

const formSchema = z.object({
  username: z.string().regex(/^[a-zA-Z0-9_.]*$/g, {
    message: "Invalid username.",
  }),
});

export default function UsernameForm({
  defaultValue,
  children = null,
}: {
  defaultValue?: string;
  children?: ReactNode;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: defaultValue || "",
    },
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/${values.username}`);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-2"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your desired username..."
                    {...field}
                    className="w-56"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Check</Button>
        </form>
      </Form>
      {form.formState.errors.username ? (
        <p className="text-red-600">{form.formState.errors.username.message}</p>
      ) : (
        children
      )}
    </>
  );
}
