import "./globals.css";
import { Inter, Oswald } from "next/font/google";
import Navbar from "@/app/components/layout/Navbar"

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-text`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}