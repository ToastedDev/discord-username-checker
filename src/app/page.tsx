import { Input } from "~/components/input";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold">Discord Username Checker</h1>
      <p>Check if your @username is taken or not.</p>
      <form className="flex flex-grow flex-col justify-center">
        <Input placeholder="Enter your desired username..." />
      </form>
    </>
  );
}
