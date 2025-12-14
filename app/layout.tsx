import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext"; 
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

// 1. Load the font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silver Tsunami Advisors | Maximize Business Valuation",
  description:
    "Specializing in EBITDA growth, AI implementation, and strategic exit planning for business owners. Maximize your value in the 8-24 months leading to a sale.",
  keywords: [
    "EBITDA growth",
    "business exit strategy",
    "M&A advisors",
    "AI implementation",
    "business valuation",
    "Silver Tsunami",
    "outsourcing",
    "wealth management",
    "tenacity group"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`
          ${inter.className} 
          min-h-screen 
          bg-[#050505] 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] 
          text-white 
          antialiased
        `}
      >
        <AuthProvider>
          {children}
          <Toaster richColors position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}