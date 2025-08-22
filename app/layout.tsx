import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mezkenz – IT TeamLead Services & Coaching",
  description: "Mezkenz helpt bedrijven met IT teamleiderschap, coaching, teamopbouw, outsourcing en projectassistentie.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}