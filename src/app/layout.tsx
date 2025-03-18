import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Archivo } from "next/font/google";
import "./globals.css";
import "@/styles/animated-button.css";
import "@/styles/custom-buttons.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { CartProvider } from "@/context/cart-context";

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRUTUS | Premium Men's Skincare",
  description: "Elevate your grooming routine with Brutus premium skincare for men.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} min-h-screen bg-background antialiased dark:bg-black dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
