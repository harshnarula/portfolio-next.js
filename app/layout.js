import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh",
  description: "My Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className = "background">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
