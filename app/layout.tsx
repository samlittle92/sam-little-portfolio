import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
