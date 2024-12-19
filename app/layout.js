import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh",
  description: "My Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="background">
      <head>
        {/* Google site verification meta tag */}
        <meta
          name="google-site-verification"
          content="rHKKu_lZ5lHo9Sfe4ETV8QfxRIVIAw8JWWCpsTSJhM4"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
