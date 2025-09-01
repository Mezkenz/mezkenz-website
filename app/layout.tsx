import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Mezkenz – IT Leadership & Consultancy",
  description:
    "Independent IT Support Leader offering team lead services, project management, process improvement and IT consultancy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}