import { ReactNode } from "react";
import UsernameForm from "~/components/form";

export default function CheckerLayout({
  params,
  children,
}: {
  params: { username: string };
  children: ReactNode;
}) {
  return (
    <>
      <UsernameForm defaultValue={params.username} />
      {children}
    </>
  );
}
