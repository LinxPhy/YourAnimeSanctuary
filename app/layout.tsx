import type { Metadata } from "next";
import './styles/pages.css'
import './styles/globals.css'
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "YourAnimeSanctuary",
  description: "From underrated gems to mainstream wonders, a list of anime that you can't miss out!",
  keywords: ['Anime', 'Lists', 'Ranking', 'Top 10'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" type="image/x-icon" href="/icon.ico" />
      </head>

      <body>
        <Header />
        <Navigation />
        <div className="container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
