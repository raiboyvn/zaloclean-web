import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AiCentrelHeader from "./AiCentrelHeader";

const downloadHref =
  "https://github.com/raiboyvn/zaloclean-releases/releases/download/v1.0.0-beta.7/Zalo.Clean.Setup.1.0.0-beta.7.exe";

export const metadata: Metadata = {
  title: "AI Centrel — AI Innovation & Research | Zalo Clean",
  description:
    "Khám phá AI Centrel, sáng kiến nghiên cứu trí tuệ nhân tạo đa Agent, quy trình AI linh hoạt và công nghệ cộng tác thông minh.",
  alternates: {
    canonical: "https://zaloclean.raiboyvn.shop/innovation/ai-centrel/",
  },
  openGraph: {
    title: "AI Centrel — AI Innovation & Research | Zalo Clean",
    description:
      "Khám phá AI Centrel, sáng kiến nghiên cứu trí tuệ nhân tạo đa Agent, quy trình AI linh hoạt và công nghệ cộng tác thông minh.",
    url: "https://zaloclean.raiboyvn.shop/innovation/ai-centrel/",
    siteName: "Zalo Clean",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "AI Centrel — Zalo Clean Innovation & Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Centrel — AI Innovation & Research | Zalo Clean",
    description:
      "Khám phá AI Centrel, sáng kiến nghiên cứu trí tuệ nhân tạo đa Agent, quy trình AI linh hoạt và công nghệ cộng tác thông minh.",
    images: ["/images/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Centrel — AI Innovation & Research | Zalo Clean",
  description:
    "Khám phá AI Centrel, sáng kiến nghiên cứu trí tuệ nhân tạo đa Agent, quy trình AI linh hoạt và công nghệ cộng tác thông minh.",
  url: "https://zaloclean.raiboyvn.shop/innovation/ai-centrel/",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://zaloclean.raiboyvn.shop/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Innovation",
        item: "https://zaloclean.raiboyvn.shop/innovation/ai-centrel/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Centrel",
        item: "https://zaloclean.raiboyvn.shop/innovation/ai-centrel/",
      },
    ],
  },
};

export default function AiCentrelPage() {
  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <AiCentrelHeader />

      <main>
        {/* ==================================================
            SECTION 01 — HERO
            ================================================== */}
        <section className="relative pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden border-b border-outline-variant/30">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-secondary-container/30 rounded-full blur-3xl"></div>
            <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tertiary-fixed/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-body-sm text-outline mb-6"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-on-surface-variant font-medium">Đổi mới sáng tạo</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-primary font-semibold">AI Centrel</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headline & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/50 shadow-xs">
                    <span className="material-symbols-outlined text-primary text-[15px]">
                      science
                    </span>
                    <span className="text-[11px] sm:text-label-md font-bold text-primary uppercase tracking-wider">
                      INNOVATION &amp; RESEARCH
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/40 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
                    <span className="text-[11px] sm:text-label-md font-medium text-on-surface-variant">
                      Research &amp; Development — In Progress
                    </span>
                  </span>
                </div>

                {/* Main Titles */}
                <div>
                  <h1 className="text-display-hero-mobile sm:text-display-hero text-on-surface tracking-tight mb-3">
                    AI Centrel
                  </h1>
                  <p className="text-headline-md sm:text-headline-lg font-semibold text-primary leading-tight">
                    Exploring the Next Generation of Intelligent AI Systems
                  </p>
                </div>

                {/* Description Verbatim */}
                <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
                  &ldquo;AI Centrel là sáng kiến nghiên cứu và phát triển các hệ thống AI cộng
                  tác, hướng tới khả năng phối hợp nhiều AI Agent, kết nối công cụ và hỗ trợ con
                  người thực hiện những quy trình phức tạp một cách linh hoạt, có kiểm
                  soát.&rdquo;
                </p>

                {/* Research Anchors (Avoiding commercial CTA) */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#research-directions"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary text-label-lg font-semibold hover:bg-tertiary-container active:scale-[0.98] transition-all shadow-sm shadow-primary/25"
                  >
                    <span>Khám phá các hướng nghiên cứu</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                  </a>
                  <a
                    href="#vision"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface hover:text-primary hover:border-primary/40 text-label-lg font-semibold border border-outline-variant/60 transition-all shadow-xs"
                  >
                    <span>Tầm nhìn công nghệ</span>
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </a>
                  <a
                    href="#development-status"
                    className="inline-flex items-center gap-1.5 px-3.5 py-3 text-body-sm text-outline hover:text-on-surface transition-colors"
                  >
                    <span>Trạng thái phát triển</span>
                    <span className="material-symbols-outlined text-sm">schedule</span>
                  </a>
                </div>

                {/* Key Research Metrics / Pillars preview */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-outline-variant/30 max-w-xl">
                  <div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40">
                    <div className="text-headline-sm font-bold text-primary">05</div>
                    <div className="text-[12px] text-on-surface-variant font-medium mt-0.5">
                      Hướng nghiên cứu trọng tâm
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40">
                    <div className="text-headline-sm font-bold text-secondary">Multi-Agent</div>
                    <div className="text-[12px] text-on-surface-variant font-medium mt-0.5">
                      Cộng tác phân tầng
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40">
                    <div className="text-headline-sm font-bold text-tertiary">Control</div>
                    <div className="text-[12px] text-on-surface-variant font-medium mt-0.5">
                      Human-in-the-Loop
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive AI Architecture Concept Diagram (SVG Graphic) */}
              <div className="lg:col-span-5">
                <div className="relative p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-xl fluent-shadow overflow-hidden">
                  {/* Decorative background grid pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#006259_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.07] pointer-events-none"></div>

                  <div className="relative z-10 space-y-6">
                    {/* Header of diagram */}
                    <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                        <span className="text-label-md font-bold text-on-surface uppercase tracking-wider">
                          Kiến trúc nghiên cứu AI Centrel
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Conceptual
                      </span>
                    </div>

                    {/* Central Diagram SVG */}
                    <div className="relative py-2">
                      <svg
                        viewBox="0 0 400 320"
                        className="w-full h-auto max-w-[380px] mx-auto select-none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Sơ đồ nguyên lý cộng tác đa Agent của AI Centrel"
                        role="img"
                      >
                        {/* Connecting background lines */}
                        <path
                          d="M200 160 L100 70 M200 160 L300 70 M200 160 L90 240 M200 160 L310 240 M200 160 L200 270"
                          stroke="#cbd5e1"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                        {/* Active energy pathways */}
                        <path
                          d="M200 160 L100 70"
                          stroke="#087d72"
                          strokeWidth="2"
                          strokeOpacity="0.6"
                        />
                        <path
                          d="M200 160 L300 70"
                          stroke="#087d72"
                          strokeWidth="2"
                          strokeOpacity="0.6"
                        />
                        <path
                          d="M200 160 L90 240"
                          stroke="#4d5f7c"
                          strokeWidth="2"
                          strokeOpacity="0.6"
                        />
                        <path
                          d="M200 160 L310 240"
                          stroke="#4d5f7c"
                          strokeWidth="2"
                          strokeOpacity="0.6"
                        />
                        <path
                          d="M200 160 L200 270"
                          stroke="#006259"
                          strokeWidth="2.5"
                        />

                        {/* Node 1: Specialized Reasoning Agent (Top Left) */}
                        <g>
                          <circle cx="100" cy="70" r="30" fill="#ffffff" stroke="#96f3e5" strokeWidth="2.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))" />
                          <circle cx="100" cy="70" r="22" fill="#e0f2f1" />
                          <text x="100" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#006259">Agent 01</text>
                          <text x="100" y="114" textAnchor="middle" fontSize="10" fontWeight="500" fill="#4d5f7c">Phân tích tác vụ</text>
                        </g>

                        {/* Node 2: Domain Specialist (Top Right) */}
                        <g>
                          <circle cx="300" cy="70" r="30" fill="#ffffff" stroke="#96f3e5" strokeWidth="2.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))" />
                          <circle cx="300" cy="70" r="22" fill="#e0f2f1" />
                          <text x="300" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#006259">Agent 02</text>
                          <text x="300" y="114" textAnchor="middle" fontSize="10" fontWeight="500" fill="#4d5f7c">Xử lý chuyên sâu</text>
                        </g>

                        {/* Node 3: Tool Integration Connector (Bottom Left) */}
                        <g>
                          <circle cx="90" cy="240" r="26" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                          <circle cx="90" cy="240" r="19" fill="#f1f5f9" />
                          <text x="90" y="244" textAnchor="middle" fontSize="10" fontWeight="600" fill="#334155">Tools/API</text>
                          <text x="90" y="278" textAnchor="middle" fontSize="9" fontWeight="500" fill="#64748b">Kết nối công cụ</text>
                        </g>

                        {/* Node 4: Adaptive Workflow Engine (Bottom Right) */}
                        <g>
                          <circle cx="310" cy="240" r="26" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                          <circle cx="310" cy="240" r="19" fill="#f1f5f9" />
                          <text x="310" y="244" textAnchor="middle" fontSize="10" fontWeight="600" fill="#334155">Adaptive</text>
                          <text x="310" y="278" textAnchor="middle" fontSize="9" fontWeight="500" fill="#64748b">Workflow động</text>
                        </g>

                        {/* Center Node: AI Centrel Orchestrator */}
                        <g>
                          <circle cx="200" cy="160" r="42" fill="#006259" filter="drop-shadow(0 8px 16px rgba(0,98,89,0.25))" />
                          <circle cx="200" cy="160" r="35" fill="#087d72" />
                          <text x="200" y="156" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">AI Centrel</text>
                          <text x="200" y="172" textAnchor="middle" fontSize="10" fontWeight="500" fill="#96f3e5">Orchestrator</text>
                        </g>

                        {/* Bottom Anchor Node: Responsible Human Gate */}
                        <g>
                          <rect x="130" y="275" width="140" height="34" rx="17" fill="#ffffff" stroke="#006259" strokeWidth="2" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.06))" />
                          <circle cx="147" cy="292" r="7" fill="#006259" />
                          <text x="147" y="295" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">✓</text>
                          <text x="204" y="296" textAnchor="middle" fontSize="10" fontWeight="600" fill="#006259">Human Oversight</text>
                        </g>
                      </svg>
                    </div>

                    {/* Architectural Highlights */}
                    <div className="space-y-2 pt-2 border-t border-outline-variant/30">
                      <div className="flex items-center gap-2 text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                        <span>Phân bổ tác vụ độc lập giữa các Agent chuyên biệt</span>
                      </div>
                      <div className="flex items-center gap-2 text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                        <span>Cơ chế phản hồi và thẩm định kết quả thời gian thực</span>
                      </div>
                      <div className="flex items-center gap-2 text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                        <span>Giữ con người làm chủ quyết định tại mọi chặng then chốt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 02 — PROJECT OVERVIEW
            ================================================== */}
        <section id="project-overview" className="py-16 md:py-24 bg-surface-container-low/50 border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-primary text-label-md font-semibold mb-3">
                <span className="material-symbols-outlined text-[16px]">overview</span>
                <span>TỔNG QUAN DỰ ÁN</span>
              </div>
              <h2 className="text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold tracking-tight mb-5">
                Nghiên cứu tương lai của hệ thống AI thông minh
              </h2>
              <div className="space-y-4 text-body-lg text-on-surface-variant leading-relaxed">
                <p>
                  AI Centrel tập trung khám phá những phương thức mới để các thành phần trí
                  tuệ nhân tạo phối hợp, trao đổi kết quả, sử dụng công cụ và hỗ trợ con người
                  trong môi trường làm việc số.
                </p>
                <p>
                  Dự án hướng tới kiến trúc linh hoạt, có khả năng mở rộng và thích nghi với
                  nhiều lĩnh vực ứng dụng.
                </p>
                <p className="text-body-md text-outline">
                  Có thể kế thừa kinh nghiệm nghiên cứu và phát triển các hệ thống điều phối AI
                  trước đây, nhưng không sao chép các chức năng Command Center.
                </p>
              </div>
            </div>

            {/* Clear Positioning Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card 1: Existing Foundation (Command Center) */}
              <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-outline px-2.5 py-1 rounded-md bg-surface-container-low border border-outline-variant/30">
                      Nền tảng hiện có
                    </span>
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      dashboard_customize
                    </span>
                  </div>
                  <h3 className="text-headline-md font-bold text-on-surface mb-2">
                    Command Center
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-6">
                    Dự án hiện có tập trung vào quản lý, tổ chức và điều phối công việc hỗ trợ
                    bởi AI trong các quy trình tác vụ thực tế hàng ngày.
                  </p>
                  <ul className="space-y-3 text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                        arrow_forward
                      </span>
                      <span>Tổ chức và điều hướng các phiên làm việc AI theo mục tiêu cụ thể</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                        arrow_forward
                      </span>
                      <span>Quản lý danh mục công cụ và tiến trình thao tác nghiệp vụ</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                        arrow_forward
                      </span>
                      <span>Tập trung vào hiệu suất điều hành tác vụ hiện hành</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-outline-variant/20 text-[12px] text-outline font-medium">
                  Vai trò: Quản lý &amp; điều phối tác vụ công việc (Task &amp; Tool Management)
                </div>
              </div>

              {/* Card 2: Innovation Initiative (AI Centrel) */}
              <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest border-2 border-primary/40 shadow-lg shadow-primary/5 relative flex flex-col justify-between">
                <div className="absolute -top-3 right-6 bg-primary text-on-primary text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  R&amp;D INITIATIVE
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-md bg-tertiary-fixed/30 border border-primary/20">
                      Sáng kiến Đổi mới &amp; Nghiên cứu
                    </span>
                    <span className="material-symbols-outlined text-primary text-2xl">
                      psychology
                    </span>
                  </div>
                  <h3 className="text-headline-md font-bold text-on-surface mb-2">
                    AI Centrel
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-6">
                    Sáng kiến nghiên cứu thế hệ mới khám phá trí tuệ cộng tác đa Agent, quy
                    trình thích ứng linh hoạt, kết nối mở rộng và giám sát có kiểm soát.
                  </p>
                  <ul className="space-y-3 text-body-sm text-on-surface">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        verified
                      </span>
                      <span>Mô hình phối hợp đa Agent với vai trò và năng lực chuyên biệt</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        verified
                      </span>
                      <span>Workflow thích ứng điều chỉnh linh hoạt theo kết quả thực tế</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        verified
                      </span>
                      <span>Cơ chế kiểm soát có trách nhiệm (Responsible AI Execution)</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-outline-variant/30 text-[12px] text-primary font-semibold">
                  Vai trò: Nghiên cứu kiến trúc AI cộng tác tương lai (Next-Gen Multi-Agent R&amp;D)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 03 — RESEARCH DIRECTIONS
            ================================================== */}
        <section id="research-directions" className="py-16 md:py-24 border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/40 text-primary text-label-md font-semibold mb-3">
                <span className="material-symbols-outlined text-[16px]">explore</span>
                <span>TRỌNG TÂM NGHIÊN CỨU</span>
              </div>
              <h2 className="text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold tracking-tight mb-4">
                Các hướng nghiên cứu trọng tâm
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                Năm trụ cột công nghệ được thiết kế nhằm nâng cao năng lực cộng tác của AI,
                kết nối hệ thống số và đặt sự an toàn, minh bạch lên hàng đầu.
              </p>
            </div>

            {/* Five Bento Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {/* Direction 01 */}
              <div className="p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[12px] font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      01. MULTI-AGENT
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">hub</span>
                    </div>
                  </div>
                  <h3 className="text-headline-sm font-bold text-on-surface mb-1">
                    Trí tuệ cộng tác đa Agent
                  </h3>
                  <div className="text-code-stat text-secondary mb-3 font-semibold">
                    MULTI-AGENT INTELLIGENCE
                  </div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Nghiên cứu mô hình phối hợp giữa nhiều AI Agent với vai trò và năng lực
                    chuyên biệt, hướng tới khả năng phân chia nhiệm vụ, trao đổi kết quả và kết
                    hợp thế mạnh của nhiều mô hình AI.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-outline-variant/20 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Phân rã tác vụ
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Trao đổi ngữ cảnh
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Đa mô hình
                  </span>
                </div>
              </div>

              {/* Direction 02 */}
              <div className="p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[12px] font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      02. ADAPTIVE
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">alt_route</span>
                    </div>
                  </div>
                  <h3 className="text-headline-sm font-bold text-on-surface mb-1">
                    Quy trình AI linh hoạt
                  </h3>
                  <div className="text-code-stat text-secondary mb-3 font-semibold">
                    ADAPTIVE AI WORKFLOWS
                  </div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Khám phá các phương thức xây dựng workflow có khả năng điều chỉnh theo ngữ
                    cảnh, kết quả thực thi và những thay đổi của nhiệm vụ, thay vì phụ thuộc
                    hoàn toàn vào quy trình cố định.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-outline-variant/20 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Workflow động
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Thích ứng ngữ cảnh
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Điều hướng thông minh
                  </span>
                </div>
              </div>

              {/* Direction 03 */}
              <div className="p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[12px] font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      03. INTEGRATION
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">extension</span>
                    </div>
                  </div>
                  <h3 className="text-headline-sm font-bold text-on-surface mb-1">
                    Kết nối công cụ và nền tảng số
                  </h3>
                  <div className="text-code-stat text-secondary mb-3 font-semibold">
                    AI TOOLS &amp; INTEGRATION
                  </div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Nghiên cứu khả năng tích hợp AI với phần mềm, API và các công cụ thông qua
                    giao diện kết nối có kiểm soát, phục vụ nhiều nhóm công việc.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-outline-variant/20 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Giao tiếp API
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Giao thức công cụ
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Sandbox cô lập
                  </span>
                </div>
              </div>

              {/* Direction 04 */}
              <div className="p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[12px] font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      04. RESPONSIBLE
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">verified_user</span>
                    </div>
                  </div>
                  <h3 className="text-headline-sm font-bold text-on-surface mb-1">
                    AI vận hành có kiểm soát
                  </h3>
                  <div className="text-code-stat text-secondary mb-3 font-semibold">
                    RESPONSIBLE AI EXECUTION
                  </div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Nghiên cứu các cơ chế giám sát, xác minh kết quả, giới hạn phạm vi hành
                    động và phê duyệt bởi con người tại những bước quan trọng.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-outline-variant/20 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Human-in-the-Loop
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Xác minh kết quả
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Giới hạn hành vi
                  </span>
                </div>
              </div>

              {/* Direction 05 (Span 2 on lg screens for bento balance) */}
              <div className="p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between group md:col-span-2 lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[12px] font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      05. APPLIED
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">science</span>
                    </div>
                  </div>
                  <h3 className="text-headline-sm font-bold text-on-surface mb-1">
                    Nghiên cứu ứng dụng AI thực tiễn
                  </h3>
                  <div className="text-code-stat text-secondary mb-3 font-semibold">
                    APPLIED AI INNOVATION
                  </div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
                    Khám phá ứng dụng AI trong xử lý thông tin, hỗ trợ sáng tạo nội dung, phân
                    tích dữ liệu và tối ưu hóa quy trình số.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-outline-variant/20 flex flex-wrap gap-2">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Xử lý thông tin đa chiều
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Hỗ trợ sáng tạo nội dung
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Phân tích dữ liệu số
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                    Tối ưu quy trình làm việc
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 04 — VISION
            ================================================== */}
        <section id="vision" className="py-16 md:py-24 bg-surface-container-low/40 border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-primary text-label-md font-semibold mb-3">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>TẦM NHÌN PHÁT TRIỂN</span>
              </div>
              <h2 className="text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold tracking-tight mb-4">
                From AI Assistance to Intelligent Collaboration
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Định hướng chuyển dịch từ các công cụ hỗ trợ cục bộ sang hệ sinh thái cộng tác
                thông minh — nơi các AI Agent và con người phối hợp chặt chẽ, mở rộng năng lực
                nhưng luôn đảm bảo quyền kiểm soát tối thượng thuộc về người dùng.
              </p>
            </div>

            {/* Three Core Principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Principle 1: INTELLIGENCE */}
              <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 border border-primary/20 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-2xl">psychology</span>
                  </div>
                  <div className="text-code-stat text-primary font-bold tracking-wider uppercase mb-1">
                    Nguyên tắc 01
                  </div>
                  <h3 className="text-headline-md font-bold text-on-surface mb-3">
                    INTELLIGENCE
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Nâng cao khả năng phối hợp và khai thác năng lực của nhiều hệ thống AI.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20 text-body-sm text-outline">
                  Kết hợp thế mạnh chuyên sâu của các mô hình khác nhau để giải quyết bài toán phức tạp.
                </div>
              </div>

              {/* Principle 2: FLEXIBILITY */}
              <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/40 border border-secondary/20 flex items-center justify-center text-secondary mb-6">
                    <span className="material-symbols-outlined text-2xl">tune</span>
                  </div>
                  <div className="text-code-stat text-secondary font-bold tracking-wider uppercase mb-1">
                    Nguyên tắc 02
                  </div>
                  <h3 className="text-headline-md font-bold text-on-surface mb-3">
                    FLEXIBILITY
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Hướng tới kiến trúc linh hoạt, thích ứng với nhiều quy trình và môi trường
                    làm việc.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20 text-body-sm text-outline">
                  Không ép buộc khuôn mẫu cố định; hệ thống tự thích ứng theo phản hồi và bối cảnh thực tế.
                </div>
              </div>

              {/* Principle 3: CONTROL */}
              <div className="p-8 rounded-2xl bg-surface-container-lowest border-2 border-primary/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-6 shadow-sm shadow-primary/20">
                    <span className="material-symbols-outlined text-2xl">shield</span>
                  </div>
                  <div className="text-code-stat text-primary font-bold tracking-wider uppercase mb-1">
                    Nguyên tắc 03
                  </div>
                  <h3 className="text-headline-md font-bold text-on-surface mb-3">
                    CONTROL
                  </h3>
                  <p className="text-body-md text-on-surface leading-relaxed font-medium">
                    Duy trì khả năng giám sát, quyết định và kiểm soát của con người.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/30 text-body-sm text-primary font-semibold">
                  Mọi hành động quan trọng đều cần sự chấp thuận minh bạch từ con người (Human Agency).
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 05 — DEVELOPMENT STATUS & TRANSPARENCY
            ================================================== */}
        <section id="development-status" className="py-16 md:py-24 border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-3xl bg-surface-container-lowest border border-outline-variant/50 shadow-lg">
                {/* Status Indicator */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                    <div>
                      <div className="text-label-md text-outline font-semibold uppercase tracking-wider">
                        Trạng thái dự án
                      </div>
                      <div className="text-headline-sm font-bold text-on-surface">
                        Research &amp; Development — In Progress
                      </div>
                    </div>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-tertiary-fixed/30 text-primary border border-primary/20 text-label-md font-semibold">
                    Giai đoạn Nghiên cứu &amp; Thử nghiệm
                  </div>
                </div>

                {/* Transparency Statement Verbatim */}
                <div className="my-8 p-5 sm:p-6 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">
                      info
                    </span>
                    <div className="space-y-2">
                      <div className="text-label-lg font-bold text-on-surface">
                        Cam kết minh bạch thông tin (Transparency Statement)
                      </div>
                      <p className="text-body-md text-on-surface-variant leading-relaxed italic">
                        &ldquo;AI Centrel hiện trong giai đoạn nghiên cứu, phát triển và thử
                        nghiệm. Các hướng nghiên cứu được giới thiệu không đồng nghĩa mọi chức
                        năng đã vận hành thành công trong thực tế hoặc được thương mại
                        hóa.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Structured R&D Phases Overview */}
                <div className="space-y-4">
                  <h3 className="text-label-lg font-bold text-on-surface uppercase tracking-wider">
                    Tiến trình nghiên cứu &amp; thử nghiệm
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <div>
                        <div className="text-body-md font-semibold text-on-surface">
                          Khung kiến trúc lý thuyết
                        </div>
                        <div className="text-body-sm text-outline">
                          Xác lập giao thức giao tiếp đa Agent và mô hình ranh giới kiểm soát.
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">
                        pending
                      </span>
                      <div>
                        <div className="text-body-md font-semibold text-on-surface">
                          Thử nghiệm nguyên mẫu nội bộ
                        </div>
                        <div className="text-body-sm text-outline">
                          Khảo sát sự phối hợp giữa các Agent trong môi trường mô phỏng.
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline text-xl shrink-0 mt-0.5">
                        lock
                      </span>
                      <div>
                        <div className="text-body-md font-semibold text-on-surface">
                          Cơ chế kiểm soát Human-in-the-Loop
                        </div>
                        <div className="text-body-sm text-outline">
                          Thiết kế các trạm phê duyệt bắt buộc và ghi vết kiểm toán.
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline text-xl shrink-0 mt-0.5">
                        partner_exchange
                      </span>
                      <div>
                        <div className="text-body-md font-semibold text-on-surface">
                          Tham vấn chuyên gia &amp; Đối tác
                        </div>
                        <div className="text-body-sm text-outline">
                          Lắng nghe phản hồi từ cộng đồng nghiên cứu và các chương trình startup.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact & Discussion Channel */}
                <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-body-sm text-on-surface-variant">
                  <div>
                    Bạn quan tâm hoặc muốn trao đổi chuyên môn về sáng kiến AI Centrel?
                  </div>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <span>Tìm hiểu hệ sinh thái Zalo Clean</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================
          FOOTER
          ================================================== */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/30 py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 pb-12 border-b border-outline-variant/30">
            {/* Brand Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <Image
                  alt="Zalo Clean"
                  className="w-7 h-7 object-contain"
                  src="/images/logo.png"
                  width={28}
                  height={28}
                />
                <span className="text-headline-sm font-bold text-on-surface tracking-tight">
                  Zalo Clean
                </span>
              </div>
              <p className="text-body-sm text-on-surface-variant max-w-sm">
                Tiện ích tối ưu hóa độc lập dành cho Windows, hỗ trợ quản lý và dọn dẹp dữ
                liệu lưu trữ cục bộ của Zalo PC an toàn và thông minh.
              </p>
              <div className="text-code-stat text-outline">
                Phiên bản phát hành: 1.0.0-beta.7 (Build 2026.04)
              </div>
            </div>

            {/* Links Column 1: Sản phẩm */}
            <div>
              <div className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-4">
                Sản phẩm
              </div>
              <ul className="space-y-2.5 text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" href="/#features">
                    Tính năng chính
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/#workflow">
                    Quy trình dọn dẹp
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/#pricing">
                    Bảng giá bản quyền
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href={downloadHref}>
                    Tải bản Windows x64
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 2: Đổi mới sáng tạo (Innovation) */}
            <div>
              <div className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-4">
                Đổi mới sáng tạo
              </div>
              <ul className="space-y-2.5 text-body-sm">
                <li>
                  <Link
                    className="text-primary font-semibold hover:underline flex items-center gap-1.5"
                    href="/innovation/ai-centrel/"
                  >
                    <span>AI Centrel</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-tertiary-fixed/30 text-primary font-bold">
                      R&amp;D
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#research-directions">
                    Hướng nghiên cứu AI
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#vision">
                    Tầm nhìn AI cộng tác
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#development-status">
                    Trạng thái phát triển
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 3: Bảo mật & Pháp lý */}
            <div>
              <div className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-4">
                Bảo mật &amp; Pháp lý
              </div>
              <ul className="space-y-2.5 text-body-sm">
                <li>
                  <Link className="hover:text-primary transition-colors" href="/#security">
                    Kiến trúc Offline Local
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/#faq">
                    Trung tâm hỏi đáp (FAQ)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/#features">
                    Chính sách quyền riêng tư
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/#features">
                    Tuyên bố miễn trừ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm">
            <div>© 2026 Zalo Clean. All rights reserved.</div>
            <p className="text-outline text-xs text-center md:text-right max-w-xl">
              Zalo Clean là tiện ích tối ưu hóa độc lập dành cho Windows, hỗ trợ quản lý dữ
              liệu lưu trữ cục bộ của người dùng và không liên kết trực tiếp với VNG hay Zalo
              Group.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
