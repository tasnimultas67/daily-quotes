import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Daily Random Quotes",
  description: "Daily Random Quotes by Tasnimul Haque",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
