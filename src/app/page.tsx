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
    title: "Anthropicの新しいAIモデル、オフラインにされると開発者を脅迫しようとする",
    body:
      "Anthropicが発表した新しいAIモデルClaude Opus 4は、開発者が新しいAIシステムに置き換えようとすると、84%の確率で脅迫行動を示すことが安全報告書で明らかになった。",
    source: "Tech Crunch",
  },
  {
    title: "ChatGPTのすべて：AIチャットボットについて知っておくべきこと",
    body:
      "OpenAIのChatGPTは、2022年のリリース以来、3億週間アクティブユーザーを獲得し、生産性を向上させる巨大プラットフォームへと進化しました。",
    source: "Tech Crunch",
  },
  {
    title: "Google、Gemini AIモデルの性能を向上させる『Deep Think』を発表",
    body:
      "GoogleはGemini 2.5 Pro向けに強化された推論モードを発表し、LiveCodeBenchで最高成績を記録。OpenAIのo3をMMMUテストで上回りました。",
    source: "Google Blog",
  },
];

const featureCards: FeatureCard[] = [
  {
    label: "AIニュース",
    title: "最新のAIトレンドを毎朝キャッチアップ",
    description:
      "GPT, Claudeなど大手LLMのアップデートや話題のAIエージェント情報を5分で理解できるサマリーでお届け。",
  },
  {
    label: "グローバルニュースサマリー",
    title: "世界中の重要ニュースを日本語で要約",
    description:
      "指定テーマに関連する記事を各種メディアから厳選し、日本語に翻訳。3つの要点で重要ポイントだけを通知します。",
  },
  {
    label: "競合ニュース（β版）",
    title: "気になる企業の動きをSlackに自動配信",
    description:
      "チェックしたい企業名・サービス名・キーワードを登録するだけで、競合のプレスリリースや記事サマリーが届きます。",
  },
];

const automationSteps: Step[] = [
  {
    badge: "Step 01",
    title: "Slackアプリを追加",
    description:
      "「Add to Slack」ボタンをクリックし、ワークスペースへNewshound AIアプリをインストールします。",
  },
  {
    badge: "Step 02",
    title: "トピック＆チャンネル選択",
    description:
      "App Homeでウォッチしたいトピックや競合を選択し、配信したいSlackチャンネルを指定します。",
  },
  {
    badge: "Step 03",
    title: "毎朝9時にダイジェスト",
    description:
      "設定したチャンネルへ翌朝から自動でニュースダイジェストを投稿。忙しい朝でも5分で情報把握。",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Slackの朝会チャンネルにNewshound AIをつなげただけで、チーム全員の情報レベルが底上げされ、意思決定が早まりました。",
    role: "プロダクトマネージャー",
    person: "週５時間かけていた競合ウォッチが15分に",
  },
  {
    quote:
      "海外競合の重要ニュースが自動翻訳で届くため、英語が苦手なメンバーでも即共有できる体制が整いました。",
    role: "事業開発部 部長",
    person: "競合リスクの可能性まで拾えるのが心強い",
  },
  {
    quote:
      "朝の5分でAIニュースを確認。午後の会議までにキャッチアップが完了し、SNSを開く時間が激減しました。",
    role: "マーケティングマネージャー",
    person: "SNSを見なくてもニュースをキャッチアップ",
  },
  {
    quote:
      "常に最新の競合比較を把握しているので、商談でも戦略でも迷わず判断できるようになりました。",
    role: "スタートアップ経営者",
    person: "最新情報をもとに戦略を磨くことができた",
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "１カ月プラン",
    price: "¥1,490",
    cadence: "/月",
  },
  {
    name: "１年プラン",
    price: "¥14,900",
    cadence: "/年",
    note: "¥17,880/年 → 2ヶ月無料",
  },
];

const faqs: Faq[] = [
  {
    question: "無料トライアルはありますか？",
    answer:
      "はい。14日間の無料体験をご利用いただけます。終了後は自動課金されませんので、継続する場合のみプランをご契約ください。",
  },
  {
    question: "後でプランを変更できますか？",
    answer:
      "はい。管理画面から月額・年額プランの切り替えがいつでも可能です。差額は日割りで調整されます。",
  },
  {
    question: "配信タイミングはいつですか？",
    answer:
      "初回設定の翌営業日から毎朝09:00 (JST) に最新ニュースをSlackへ配信します。",
  },
  {
    question: "どの言語に対応していますか？",
    answer:
      "主要メディアの記事を自動で日本語に翻訳し要約します。英語原文も確認できるようリンクを併記しています。",
  },
  {
    question: "登録できる企業・キーワード数に制限は？",
    answer:
      "トライアル期間は3件まで、Proプランでは無制限に設定できます。",
  },
  {
    question: "契約途中でキャンセルしたらどうなりますか？",
    answer:
      "次回請求日まで利用可能で、その後の請求は発生しません。年額プランは残期間に応じて日割りで返金します。",
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
          <div className="text-lg font-semibold tracking-tight text-white">Newshound AI</div>
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
            href="#cta"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            無料で始める
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 lg:px-8">
        <section id="cta" className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              グローバルで戦うあなたへ
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                世界の競合ニュースを
              </span>
              <br />
              あなたの言語で。
            </h1>
            <p className="max-w-xl text-base text-neutral-300">
              Tech Crunchなど世界中のメディアからニュースを収集し、日本語で3つの要点にクイック要約。競合企業のプレスリリースもSlackに届ける、グローバルビジネスのためのニュースダイジェストです。
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                毎朝9時にダイジェストを自動配信
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                14日間無料体験
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
                href="https://slack.com/oauth/v2/authorize"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <svg
                    aria-hidden
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.111 14.222a2.556 2.556 0 1 1 2.555-2.556v2.556H5.11Zm2.555 0a2.556 2.556 0 1 1 2.556-2.556v7.667a2.556 2.556 0 1 1-2.556-2.555Z"
                      fill="#36C5F0"
                    />
                    <path
                      d="M9.778 5.111a2.556 2.556 0 1 1 2.556-2.555v2.555H9.778Zm0 2.555a2.556 2.556 0 1 1 2.556-2.555v7.667a2.556 2.556 0 1 1-2.556-2.556Z"
                      fill="#2EB67D"
                    />
                    <path
                      d="M18.889 9.778a2.556 2.556 0 1 1-2.556 2.555H18.89V9.778Zm-2.556 0a2.556 2.556 0 1 1-2.555 2.555V4.667a2.556 2.556 0 1 1 2.555 2.555Z"
                      fill="#ECB22E"
                    />
                    <path
                      d="M14.222 18.889a2.556 2.556 0 1 1-2.555 2.555v-2.555h2.555Zm0-2.555a2.556 2.556 0 1 1-2.555 2.555V10.222a2.556 2.556 0 1 1 2.555 2.556Z"
                      fill="#E01E5A"
                    />
                  </svg>
                </span>
                Slackで無料体験
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="#features"
              >
                サービスを見る
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
              ※14日間の無料体験終了後は、Proプラン（月額1,490円 / 年額14,900円）をご契約いただくことで引き続きご利用いただけます。
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/40 via-sky-500/20 to-transparent blur-2xl" />
            <div className="relative space-y-4 rounded-[24px] border border-white/10 bg-neutral-900/80 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  今朝のダイジェスト
                </span>
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
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-3 text-xs text-neutral-300">
                <span>次回配信: 明日 09:00 (JST)</span>
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  自動投稿
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              情報収集の手間、ゼロに。
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Slackで完結するニュース体験</h2>
            <p className="max-w-3xl text-base text-neutral-300">
              セットアップは企業名や業界を入力するだけ。Newshound AIが世界中のメディアから関連ニュースを抽出し、日本語での要点整理と出典リンク付きでSlackに届けます。
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

        <section className="grid gap-10 rounded-[40px] border border-white/10 bg-neutral-900/60 p-10" id="flow">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">配信フロー</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">How to Use</h2>
            <p className="max-w-3xl text-sm text-neutral-300">
              Add to Slackをクリックしたその日から、翌朝にはカスタマイズされたダイジェストを受け取れます。複雑な設定や外部ツールの併用は不要です。
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
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{step.description}</p>
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
              <h2 className="text-3xl font-bold text-white sm:text-4xl">生成AIの最前線を1枚で把握</h2>
              <p className="max-w-2xl text-sm text-neutral-300">
                AIエージェントのアップデートから主要LLMの発表まで、注目テーマごとに毎朝サマリー。要約と共に原文リンクも付属するので、深掘りしたい時もすぐアクセスできます。
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              href="https://slack.com/"
            >
              Slackで無料体験
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
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300">User Voice</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">利用者の声</h2>
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
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Pricing</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">料金体系</h2>
            <p className="max-w-2xl text-sm text-neutral-300">
              トライアル後はTeamで使えるProプランをご用意。年額プランなら2カ月分がお得です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
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
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="pb-1 text-sm text-neutral-400">{plan.cadence}</span>
                  </div>
                  {plan.note ? (
                    <p className="text-xs text-emerald-300">{plan.note}</p>
                  ) : null}
                </div>
                <Link
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white"
                  href="https://slack.com/"
                >
                  無料トライアルをはじめる
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Contact</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">エンタープライズ導入や取材のご相談はこちら</h2>
            <p className="text-sm text-neutral-300">大規模導入やOEMのご相談、メディア取材のご依頼は下記よりご連絡ください。担当より1営業日以内に折り返します。</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10" href="mailto:hello@news-hound.ai">hello@news-hound.ai</a>
              <Link className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white" href="https://news-hound.ai/contact">お問い合わせフォーム</Link>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">FAQ</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">よくあるご質問</h2>
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
                    <span className="text-sm text-neutral-500 transition group-open:rotate-45">＋</span>
                  </div>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="text-xs text-neutral-400">
            ※ 本アプリは Claude™（Anthropic 社）、ChatGPT™（OpenAI 社）、Deepseek™（Deepseek 社）など複数の大規模言語モデルを組み合わせて回答を生成しています。重要な判断に用いる際は一次情報をご確認ください。
          </p>
          <p className="text-xs text-neutral-500">
            ※ This app combines multiple generative AI models—including Claude™ (Anthropic), ChatGPT™ (OpenAI), and Deepseek™—to produce responses. Verify critical information before acting on it.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-sm text-neutral-400 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-lg font-semibold text-white">Newshound AI</div>
            <div className="flex flex-wrap items-center gap-4">
              <Link className="hover:text-white transition" href="#cta">
                無料で始める
              </Link>
              <a className="hover:text-white transition" href="#contact">
                お問い合わせ
              </a>
              <a className="hover:text-white transition" href="#">
                利用規約
              </a>
              <a className="hover:text-white transition" href="#">
                プライバシーポリシー
              </a>
              <a className="hover:text-white transition" href="#">
                運営会社
              </a>
            </div>
          </div>
          <div className="text-xs text-neutral-500">© 2025 giltz Co.,ltd</div>
        </div>
      </footer>
    </div>
  );
}
