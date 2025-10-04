import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "業界・ニュース要約を毎朝5分で｜WorldPick AI",
  description:
    "グローバルで戦うあなたへ、世界のNEWSをあなたの言語で。あなたが気になる業界のニュースを要約して配信するSlackアプリです。",
  keywords: [
    "WorldPick AI",
    "ニュースサマリー",
    "競合調査",
    "Slack アプリ",
    "AI ニュース",
  ],
  openGraph: {
    title: "業界・ニュース要約を毎朝5分で｜WorldPick AI",
    description:
      "グローバルで戦うあなたへ、世界のNEWSをあなたの言語で。あなたが気になる業界のニュースを要約して配信するSlackアプリです。",
    url: "https://news-hound.ai/",
    siteName: "WorldPick AI",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "業界・ニュース要約を毎朝5分で｜WorldPick AI",
    description:
      "グローバルで戦うあなたへ、世界のNEWSをあなたの言語で。あなたが気になる業界のニュースを要約して配信するSlackアプリです。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
