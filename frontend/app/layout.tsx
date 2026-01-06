import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Everpost - AI Content Planner for Social Media",
  description: "AI content planner that generates weekly post ideas for your business in 30 seconds. Stay consistent on social media without the stress. Free to start.",
};

import { UserContentProvider } from "./context/UserContentContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <UserContentProvider>
          <Navbar />
          {children}
        </UserContentProvider>
      </body>
    </html>
  );
}
