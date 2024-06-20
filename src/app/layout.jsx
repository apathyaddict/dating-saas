import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

//TODO: fix metada
export const metadata = {
  title: "DeNebsify",
  description: "Find the Love You Deserve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "grainy min-h-screen font-sans antialiased",
          inter.className,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
