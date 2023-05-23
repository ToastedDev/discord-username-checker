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
          {children}
        </main>
      </body>
    </html>
  );
}
