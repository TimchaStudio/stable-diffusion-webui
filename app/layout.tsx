import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";

export const metadata: Metadata = {
  title: "Stable Diffusion web UI",
  description: "A web interface for Stable Diffusion, implemented using Gradio library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
