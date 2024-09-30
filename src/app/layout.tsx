import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import headerData from "@/mocks/header.mock";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Baykar FE Case by SB",
  description: "Baykar FE Case by SB",
  viewport,
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} isolate font-roboto`}>
        <Header {...headerData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
