import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Ammar | Frontend Developer",
  description: "Portfolio of Ammar, a skilled frontend developer.",
  openGraph: {
    title: "Ammar | Frontend Developer",
    description: "Portfolio of Ammar, a skilled frontend developer.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0A192F] text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          {/* Toast Container for Notifications */}
          <ToastContainer position="top-right" autoClose={3000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
