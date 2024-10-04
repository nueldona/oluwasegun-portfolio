import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import PageClient from "./PageClient";
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export const metadata: Metadata = {
  title: "Portfolio | Oluwasegun Aiyedona - Software Engineer",
  description:
    "Oluwasegun Aiyedona is a software engineer dedicated to crafting innovative web applications. Explore my portfolio to see how I turn ideas into reality with attention to detail and a focus on user experience.",
  keywords: [
    "Oluwasegun Aiyedona",
    "portfolio",
    "software engineer",
    "web developer",
    "front-end developer",
    "back-end developer",
    "Lagos",
  ],
  authors: [{ name: "Oluwasegun Aiyedona" }],
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/x-icon",
        url: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  openGraph: {
    title: "Portfolio | Oluwasegun Aiyedona - Software Engineer",
    description:
      "Explore Oluwasegun Aiyedona's portfolio showcasing innovative web applications.",
    url: "https://nueldona.vercel.app",
    siteName: "Oluwasegun Aiyedona's Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "Oluwasegun Aiyedona Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <PageClient>{children}</PageClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
