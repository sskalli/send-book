import type { Metadata } from "next";

import "@/app/globals.css";
import { geistSans, geistMono } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Sendbook",
  description: "Log & track your sends",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
