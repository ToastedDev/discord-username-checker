import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discord Username Checker",
  description: "Check if your Discord handle is available or not.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[inter.className, "dark"].join(" ")}>
        <main className="flex h-screen flex-col items-center p-4">
          <header className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold">Discord Username Checker</h1>
            <p>Check if your @username is taken or not.</p>
          </header>
          <div className="flex flex-grow flex-col items-center justify-center gap-2">
            {children}
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
