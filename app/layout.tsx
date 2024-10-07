import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter} from 'next/font/google';
import NavBar from "@/components/navbar/NavBar";
import Container from "@/components/global/Container";
import Providers from "./providers";

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: "Next Store",
  description: "Purchase any thing here!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Providers>
          <NavBar />
          <Container className="py-20">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
