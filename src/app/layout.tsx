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
  title: "世界のNEWSをあなたの言語で｜WorldPick AI",
  description:
    "たったワンコインで世界が読める、世界中の投資家がチェックする情報を翻訳 & 要約して配信するWebアプリです。",
  keywords: [
    "WorldPick AI",
    "ニュースサマリー",
    "競合調査",
    "Slack アプリ",
    "AI ニュース",
  ],
  openGraph: {
    title: "世界のNEWSをあなたの言語で｜WorldPick AI",
    description:
      "たったワンコインで世界が読める、世界中の投資家がチェックする情報を翻訳 & 要約して配信するWebアプリです。",
    url: "https://worldpick-ai.codeknock.net",
    siteName: "WorldPick AI",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "世界のNEWSをあなたの言語で｜WorldPick AI",
    description:
      "たったワンコインで世界が読める、世界中の投資家がチェックする情報を翻訳 & 要約して配信するWebアプリです。",
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
