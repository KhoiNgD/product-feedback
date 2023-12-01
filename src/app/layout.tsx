import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Product Feedback",
  description: "a product feedback application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-light">
      <body className={`${jost.className} w-full max-w-[1110px] m-auto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
