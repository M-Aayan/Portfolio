import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CursorBackground } from "@/components/background/CursorBackground";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Muhammad Aayan Shaikh — Frontend Developer",
  description:
    "Personal portfolio of Muhammad Aayan Shaikh, Frontend Developer based in Karachi, Pakistan.",
  keywords: [
    "Muhammad Aayan Shaikh",
    "Frontend Developer",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "UI Designer",
    "Karachi",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Aayan Shaikh" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="relative bg-dark-bg text-primaryText antialiased selection:bg-accent/30 selection:text-white min-h-screen">
        <ThemeProvider>
          <SmoothScrollProvider>
            {/* Ambient Background & Noise */}
            <CursorBackground />
            <div className="noise-overlay" aria-hidden="true" />

            {/* Navigation Header */}
            <Navbar />

            {/* Main Application Content */}
            <main className="relative z-10">{children}</main>

            {/* Minimal Footer */}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
