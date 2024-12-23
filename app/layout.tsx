import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Correct import
import "./globals.css";

// Font declarations
const geistSans = Geist({
  variable: "--font-geist-sans",  // Correct font declaration
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",  // Correct font declaration
  subsets: ["latin"],
});

// Metadata for the page
export const metadata: Metadata = {
  title: "AI Assistant Chat | Powered by Llama 3.2",
  description:
    "Engage in a conversation with our AI-powered assistant, built with the Llama 3.2 model for multilingual dialogue, summarization, and more.",
  authors: [
    {
      name: "Your Name", // The name of the author
      url: "https://yourwebsite.com", // Optional: URL of the author's profile or website
    },
  ],  // Corrected to use an object with 'name' and optionally 'url'
  keywords: "AI, chatbot, assistant, Llama 3.2, Cloudflare Workers, multilingual, nextjs, tailwind",
  viewport: "width=device-width, initial-scale=1.0",
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter",
    title: "AI Assistant Chat",
    description:
      "Engage in a conversation with our AI-powered assistant, built with the Llama 3.2 model for multilingual dialogue, summarization, and more.",
    images: [
      {
        url: "/path/to/image.jpg",
        alt: "AI Assistant Chat",
        width: 1200,
        height: 630,
      },
    ],
  },
  openGraph: {
    title: "AI Assistant Chat | Powered by Llama 3.2",
    description:
      "Engage in a conversation with our AI-powered assistant, built with the Llama 3.2 model for multilingual dialogue, summarization, and more.",
    url: "https://yourwebsite.com",
    siteName: "AI Assistant Chat",
    images: [
      {
        url: "/path/to/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Assistant Chat",
      },
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
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add any additional head elements here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Applying the font variables
      >
        {children}
      </body>
    </html>
  );
}
