import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Balancer, { Provider as BalancerProvider } from "react-wrap-balancer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discord Username Checker",
  description: "Check if your @username is available or not.",
  themeColor: "#5865F2",
  metadataBase: new URL("https://discord-username-checker.vercel.app"),
  twitter: {
    site: "@ToastedDev",
    creator: "@ToastedDev",
    card: "summary_large_image",
  },
  openGraph: {
    title: "Discord Username Checker",
    description: "Check if your @username is available or not.",
    type: "website",
    url: "/",
  },
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
            <BalancerProvider>
              <Balancer as="h1" className="text-5xl font-bold">
                Discord Username Checker
              </Balancer>
              <Balancer as="p">
                Check if your @username is taken or not.
              </Balancer>
            </BalancerProvider>
          </header>
          <div className="flex flex-grow flex-col items-center justify-center gap-2">
            {children}
          </div>
          <footer className="fixed bottom-4">
            <ul className="flex gap-1 divide-x-2">
              <li>
                <Link
                  className="px-2 hover:underline"
                  href="https://github.com/ToastedDev/discord-username-checker"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 hover:underline"
                  href="https://discord.com/blog/usernames"
                >
                  Blog post from Discord
                </Link>
              </li>
            </ul>
          </footer>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
