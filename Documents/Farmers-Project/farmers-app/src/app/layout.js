import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import SessionWrapper from "./components/sessionWrapper";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FarmFuse",
  description: "This website connect directly with farmers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
          <body className={inter.className}>{children}</body>
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </SessionWrapper>
    </html>
  );
}
