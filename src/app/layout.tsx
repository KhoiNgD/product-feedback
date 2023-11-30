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
    <html lang="en">
      <body className={jost.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
