import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "The Art of Ashley",
  description: "Custom artwork by local artists in Coquitlam, BC. Commission your own unique piece today!", icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
