import Link from "next/link";

type NewsItem = {
  title: string;
  body: string;
  source: string;
};

type FeatureCard = {
  label: string;
  title: string;
  description: string;
};

type Step = {
  title: string;
  description: string;
  badge: string;
};

type Testimonial = {
  quote: string;
  role: string;
  person: string;
};

type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  note?: string;
};

type Faq = {
  question: string;
  answer: string;
};

const newsHighlights: NewsItem[] = [
  {
    title: "米国株市場、FOMC議事録発表で上昇 - インフレ懸念の緩和示唆",
    body: "米連邦準備制度理事会（FRB）の12月FOMC議事録が発表され、インフレ目標達成への道筋が明確化。市場は利下げ期待を織り込み、S&P500は前日比1.2%上昇。",
    source: "CNBC Investing",
  },
  {
    title: "OpenAI、新たな資金調達ラウンドで評価額1000億ドル突破",
    body: "OpenAIが新たな資金調達ラウンドで評価額1000億ドルを突破。AI市場の成長期待を背景に、投資家の関心が高まっている。",
    source: "TechCrunch",
  },
  {
    title: "Apple、第1四半期決算でiPhone売上高を上回る - サービス収益が牽引",
    body: "Appleが第1四半期決算を発表。iPhone売上高は前年同期比で微減したものの、サービス収益が大幅に増加し、全体収益は市場予想を上回った。",
    source: "CNBC Earnings",
  },
];

const featureCards: FeatureCard[] = [
  {
    label: "投資ニュース",
    title: "市場動向と投資戦略の要点を毎朝配信",
    description:
      "CNBC Investingから個人投資家が最も欲しい「株・投資の要点」を厳選。市場動向と投資戦略の切り口を5分で理解できるサマリーでお届け。",
  },
  {
    label: "決算速報",
    title: "重要企業の決算情報を日本語で即時配信",
    description:
      "CNBC Earningsから決算速報を厳選し、日本語に翻訳。投資判断に必要な重要ポイントを3つの要点で通知します。",
  },
  {
    label: "政策動向",
    title: "中長期投資に影響する政策情報を配信",
    description:
      "ホワイトハウスの大統領令や政策動向を中長期視点の投資家向けに翻訳。差別化された情報で投資戦略を立てられます。",
  },
];

const automationSteps: Step[] = [
  {
    badge: "Step 01",
    title: "アカウント登録",
    description:
      "メールアドレスで簡単登録。投資家向けのニュースをタイムラインで受け取れます。",
  },
  {
    badge: "Step 02",
    title: "3行要約",
    description: "忙しいあなたでも3行要約で簡単に世界の動向をキャッチアップ。",
  },
  {
    badge: "Step 03",
    title: "詳細や出典も確認",
    description:
      "気になるニュースは詳細内容を確認。出典もリンクから確認できます。",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "毎朝の投資ニュース配信で、米国市場の動向を素早く把握できるようになりました。投資判断の精度が格段に向上しました。",
    role: "個人投資家",
    person: "投資判断の精度が格段に向上",
  },
  {
    quote:
      "決算速報が日本語で届くため、英語が苦手でも重要な企業情報を逃すことがなくなりました。",
    role: "投資アドバイザー",
    person: "重要な企業情報を逃すことがない",
  },
  {
    quote:
      "朝の5分で市場動向を確認。政策動向も含めて中長期投資戦略を立てやすくなりました。",
    role: "ファンドマネージャー",
    person: "中長期投資戦略を立てやすくなった",
  },
  {
    quote:
      "CNBCやTechCrunchの重要ニュースが翻訳されて届くので、常に最新の投資情報を把握できています。",
    role: "個人投資家",
    person: "常に最新の投資情報を把握",
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "１カ月プラン",
    price: "¥500",
    cadence: "/月",
  },
];

const faqs: Faq[] = [
  {
    question: "無料トライアルはありますか？",
    answer:
      "はい。14日間の無料体験をご利用いただけます。終了後は自動課金されませんので、継続する場合のみプランをご契約ください。",
  },
  {
    question: "年間プランはありますか？",
    answer:
      "現在は月額プランのみのご提供となります。年間プランについては将来的にご提供予定です。",
  },
  {
    question: "配信タイミングはいつですか？",
    answer: "30分おきに世界のニュースを取得し、都度翻訳して配信します。",
  },
  {
    question: "どのニュースソースから情報を取得していますか？",
    answer:
      "CNBC Investing・Earnings、TechCrunch、Bloomberg、ホワイトハウスの大統領令など、投資家にとって重要な情報源から厳選して配信しています。今後さらに拡張予定です。",
  },
  {
    question: "閲覧できるニュースに制限はありますか？",
    answer:
      "トライアル期間は14日、その後は月500円で無制限にご利用いただけます。",
  },
  {
    question: "契約途中でキャンセルしたらどうなりますか？",
    answer:
      "次回請求日まで利用可能で、その後の請求は発生しません。月額プランなので、いつでも簡単にキャンセルできます。",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-64 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(236,72,153,0.3),transparent_60%)] blur-3xl"
        aria-hidden="true"
      />

      <header className="border-b border-white/10 bg-neutral-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <div className="text-lg font-semibold tracking-tight text-white">
            WorldPick AI
          </div>
          <nav className="hidden gap-8 text-sm font-medium text-neutral-300 md:flex">
            <a className="hover:text-white transition" href="#features">
              機能
            </a>
            <a className="hover:text-white transition" href="#flow">
              配信フロー
            </a>
            <a className="hover:text-white transition" href="#pricing">
              料金
            </a>
            <a className="hover:text-white transition" href="#faq">
              FAQ
            </a>
          </nav>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 shadow-lg transition hover:bg-neutral-200"
            href="https://news.codeknock.net/"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            無料で始める
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 lg:px-8">
        <section
          id="cta"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              たったワンコインで世界が読める
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                世界のNEWSを
              </span>
              <br />
              あなたの言語で。
            </h1>
            <p className="max-w-xl text-base text-neutral-300">
              CNBC、TechCrunch、決算速報など投資家が求める情報をAIが即時翻訳。
              <br />
              市場動向をいち早くキャッチして投資判断に活かせるのは WorldPick AI
              だけ。
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                リアルタイムに自動翻訳配信
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                14日間無料体験
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
                href="https://news.codeknock.net/"
              >
                無料登録はこちら
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://x.com/world_pick_ai"
              >
                お問い合わせ
                <svg
                  aria-hidden
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.667 11.333 11.333 8 4.667 4.667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <p className="text-xs text-neutral-400">
              ※14日間の無料体験終了後は、プレミアムプラン（月額500円）をご契約いただくことで引き続きご利用いただけます。
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/40 via-sky-500/20 to-transparent blur-2xl" />
            <div className="relative space-y-4 rounded-[24px] border border-white/10 bg-neutral-900/80 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                  自動要約
                </span>
              </div>
              <div className="space-y-5">
                {newsHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-lg"
                  >
                    <h3 className="text-sm font-semibold text-white/90">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                      {item.body}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                      <span>{item.source}</span>
                      <span>翻訳要約 3ポイント</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              情報収集の手間、ゼロに。
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              投資家のためのニュース配信サービス
            </h2>
            <p className="max-w-3xl text-base text-neutral-300">
              セットアップは不要。世界の投資家が求める情報を WorldPick
              AIが自動で取得し即時翻訳。
              <br />
              CNBC Investing、TechCrunch、決算速報、Bloomberg
              などから投資に必要な情報を抽出し、
              <br />
              日本語での3行要約と詳細要約を出典リンク付きで配信します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((feature) => (
              <div
                key={feature.label}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-xl"
              >
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
                  {feature.label}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="grid gap-10 rounded-[40px] border border-white/10 bg-neutral-900/60 p-10"
          id="flow"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
              配信フロー
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              How to Use
            </h2>
            <p className="max-w-3xl text-sm text-neutral-300">
              無料登録したその瞬間から、世界のダイジェストを受け取れます。複雑な設定や外部ツールの併用は不要です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {automationSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg"
              >
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-300">
                  {step.badge}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                Global News Sample
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                投資市場の動向を1枚で把握
              </h2>
              <p className="max-w-2xl text-sm text-neutral-300">
                米国株市場の動向から重要企業の決算情報まで、投資家が注目すべきテーマごとにサマリー。
                <br />
                要約、詳細と共に原文リンクも付属するので、深掘りしたい時もすぐアクセスできます。
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              href="https://news.codeknock.net/"
            >
              無料体験を始める
              <svg
                aria-hidden
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.667 11.333 11.333 8 4.667 4.667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {newsHighlights.map((item) => (
              <div
                key={`${item.title}-sample`}
                className="h-full rounded-3xl border border-white/10 bg-neutral-900/80 p-6 shadow-xl"
              >
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  {item.source}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white/90">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" id="voices">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
              User Voice
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              利用者の声
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.person}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg"
              >
                <span className="text-sm font-semibold text-emerald-300">
                  {testimonial.person}
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-300">
                  {testimonial.quote}
                </p>
                <span className="mt-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  {testimonial.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Pricing
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              料金体系
            </h2>
            <p className="max-w-2xl text-sm text-neutral-300">
              トライアル後は月額500円のシンプルな料金体系でご利用いただけます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-1 max-w-md mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-neutral-900/70 p-6 shadow-xl"
              >
                <div className="space-y-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
                    {plan.name}
                  </span>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-neutral-400">
                      {plan.cadence}
                    </span>
                  </div>
                  {plan.note ? (
                    <p className="text-xs text-emerald-300">{plan.note}</p>
                  ) : null}
                </div>
                <Link
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white"
                  href="https://news.codeknock.net/"
                >
                  無料トライアルをはじめる
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 text-center"
        >
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
              Contact
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              エンタープライズ導入や取材のご相談はこちら
            </h2>
            <p className="text-sm text-neutral-300">
              大規模導入やOEMのご相談、メディア取材のご依頼は下記よりDMにてご連絡ください。担当より折り返します。
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://x.com/world_pick_ai"
              >
                X @world_pick_ai
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              よくあるご質問
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-white/10 bg-neutral-900/60 p-6"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white transition group-open:text-emerald-300">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-sm text-neutral-500 transition group-open:rotate-45">
                      ＋
                    </span>
                  </div>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="text-xs text-neutral-400">
            ※ 本アプリは OpenAI
            の大規模言語モデルを用いて回答を生成しています。重要な判断に用いる際は一次情報をご確認ください。
          </p>
          <p className="text-xs text-neutral-500">
            ※ This app uses OpenAI&apos;s generative AI models to produce
            responses. Verify critical information before acting on it.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-sm text-neutral-400 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-lg font-semibold text-white">WorldPick AI</div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="hover:text-white transition"
                href="https://news.codeknock.net/"
              >
                無料で始める
              </Link>
              <a
                className="hover:text-white transition"
                href="https://x.com/world_pick_ai"
              >
                お問い合わせ
              </a>
              {/* <a className="hover:text-white transition" href="#">
                利用規約
              </a>
              <a className="hover:text-white transition" href="#">
                プライバシーポリシー
              </a>
              <a className="hover:text-white transition" href="#">
                運営会社
              </a> */}
            </div>
          </div>
          {/* <div className="text-xs text-neutral-500">© 2025 giltz Co.,ltd</div> */}
        </div>
      </footer>
    </div>
  );
}
