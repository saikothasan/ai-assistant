import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Assistant Chat | Powered by Llama 3.2",
  description:
    "Engage in a conversation with our AI-powered assistant, built with the Llama 3.2 model for multilingual dialogue, summarization, and more.",
  author: "Your Name",
  keywords: "AI, chatbot, assistant, Llama 3.2, Cloudflare Workers, multilingual, nextjs, tailwind",
  viewport: "width=device-width, initial-scale=1.0",
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter",
    title: "AI Assistant Chat",
    description:
      "Engage in a conversation with our AI-powered assistant, built with the Llama 3.2 model for multilingual dialogue, summarization, and more.",
    image: "/path/to/image.jpg",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600&family=Geist+Mono:wght@400;600&display=swap"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        {/* OpenGraph Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
