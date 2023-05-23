"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "./button";
import { Input } from "./input";

export default function UsernameForm({
  defaultValue,
}: {
  defaultValue?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/${inputRef.current!.value}`);
      }}
      className="flex items-center gap-2"
    >
      <Input
        type="text"
        name="username"
        placeholder="Enter your desired username..."
        defaultValue={defaultValue}
        ref={inputRef}
      />
      <Button type="submit">Go!</Button>
    </form>
  );
}
