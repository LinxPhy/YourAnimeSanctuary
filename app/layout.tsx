import type { Metadata } from "next";
import './styles/globals.css'

export const metadata: Metadata = {
  title: "Anime to watch",
  description: "From underrated to mainstream, a list of animes that you can't miss out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
