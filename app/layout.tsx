import type { Metadata } from "next";
import './styles/pages.css'
import './styles/globals.css'
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Anime to watch",
  description: "From underrated gems to mainstream wonders, a list of anime that you can't miss out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
