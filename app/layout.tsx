import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({subsets: ["latin"], weight: ["100","200","400","700","900"]});



export const metadata: Metadata = {
  title: "Shriharsh Portfolio",
  description: "Welcome to Shriharsh's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
