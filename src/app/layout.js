import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"
import { Inter, Roboto, Poppins } from "next/font/google"
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  )
}
