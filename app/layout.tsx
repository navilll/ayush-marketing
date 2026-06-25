import type { Metadata } from "next";
import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/main.css";
import "./globals.css";
import { Rubik } from "next/font/google";


const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});


export const metadata: Metadata = {
  title: "Ayush Marketing",
  description: "Ayush Marketing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
}


