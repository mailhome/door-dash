import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import { cn } from "@/lib/utils";

const font = localFont({
  src:
   [
    {
      path: "../public/font/TTNorms-Thin.otf",
      weight: '100',
      style: 'normal'
    },

    {
      path: "../public/font/TTNorms-ExtraLight.otf",
      weight: '200',
      style: 'normal'
    },

    {
      path: "../public/font/TTNorms-Light.otf",
      weight: '300',
      style: 'normal'
    },

    {
      path: "../public/font/TTNorms-Regular.otf",
      weight: '400',
      style: 'normal'
    },

    {
      path: "../public/font/TTNorms-Medium.otf",
      weight: '500',
      style: 'normal'
    },

    {
      path: "../public/font/TTNorms-Heavy.otf",
      weight: '600',
      style: 'normal'
    },

    {
      path: "../public/font/TTNorms-Bold.otf",
      weight: '700',
      style: 'normal'
    },
    {
      path: "../public/font/TTNorms-ExtraBold.otf",
      weight: '800',
      style: 'normal'
    },

    {
      path: "../public/font/TTNorms-Black.otf",
      weight: '900',
      style: 'normal'
    },

    {
      path: "../public/font/TTNorms-Black.otf",
      weight: "900",
      style: "normal"
    },
  ]
})


export const metadata: Metadata = {
  title: "Doordash Food Delivery & Takeout - From restaurants near you",
  description: "Doordash",
  icons: {
    icon:"/logo-orange.png" 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-full w-full", font.className)}>
        {children}
      </body>
    </html>
  );
}
