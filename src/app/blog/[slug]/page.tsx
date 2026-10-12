import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/data/blogPosts";
import Footer from "../../components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết — Zalo Clean",
    };
  }

  return {
    title: `${post.title} — Zalo Clean Blog`,
    description: post.description,
    alternates: {
      canonical: `https://zaloclean.com/blog/${post.slug}/`,
    },
    openGraph: {
      title: `${post.title} — Zalo Clean Blog`,
      description: post.description,
      url: `https://zaloclean.com/blog/${post.slug}/`,
      siteName: "Zalo Clean",
      locale: "vi_VN",
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: "/images/og-cover.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Zalo Clean Blog`,
      description: post.description,
      images: ["/images/og-cover.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zaloclean.com/blog/${post.slug}`,
    },
    author: {
      "@type": "Organization",
      name: "Zalo Clean",
      url: "https://zaloclean.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Zalo Clean",
      url: "https://zaloclean.com",
      logo: {
        "@type": "ImageObject",
        url: "https://zaloclean.com/images/logo.png",
      },
    },
    image: "https://zaloclean.com/images/og-cover.png",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://zaloclean.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://zaloclean.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://zaloclean.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-xs">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto h-16">
          <Link className="flex items-center gap-2 sm:gap-2.5 group shrink-0" href="/">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center p-1 bg-surface-container-low border border-outline-variant/40 shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Image
                alt="Zalo Clean Logo"
                className="w-full h-full object-contain"
                src="/images/logo.png"
                width={36}
                height={36}
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-xl font-bold text-on-surface tracking-tight whitespace-nowrap">
                Zalo Clean
              </span>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20 tracking-wide">
                v1.0 Beta
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-medium text-on-surface-variant hover:text-primary transition-colors px-2 sm:px-3 py-1.5 rounded-lg hover:bg-surface-container-low whitespace-nowrap"
            >
              <span className="sm:hidden">Blog</span>
              <span className="hidden sm:inline">Tất cả bài viết</span>
            </Link>
            <Link
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-tertiary-container transition-all shadow-xs shrink-0 whitespace-nowrap"
              href="/download"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span className="sm:hidden">Tải app</span>
              <span className="hidden sm:inline">Tải ứng dụng</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex-1">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-on-surface-variant flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">
            Trang chủ
          </Link>
          <span className="text-outline">/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span className="text-outline">/</span>
          <span className="font-semibold text-primary truncate max-w-[220px] sm:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mb-8 pb-8 border-b border-outline-variant/30">
          <div className="flex items-center gap-2.5 mb-3 flex-wrap">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
              {post.category}
            </span>
            <span className="text-xs text-on-surface-variant/75">
              Xuất bản: {post.publishedAt}
            </span>
            <span className="text-xs text-on-surface-variant/75">•</span>
            <span className="text-xs text-on-surface-variant/75">
              {post.readingTime} đọc
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed font-normal bg-surface-container-low p-4 sm:p-5 rounded-xl border border-outline-variant/30">
            {post.content.lead}
          </p>
        </header>

        {/* Article Body */}
        <article className="space-y-8 text-on-surface-variant leading-relaxed text-sm sm:text-base">
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-3.5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-on-surface tracking-tight pt-2">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="space-y-2 list-disc list-inside pl-1 text-on-surface">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="leading-relaxed">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.callout && (
                <div
                  className={`p-4 rounded-xl border text-xs sm:text-sm my-4 ${
                    section.callout.type === "warning"
                      ? "bg-error-container/20 border-error/30 text-on-surface"
                      : "bg-surface-container-low border-primary/20 text-on-surface"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${
                        section.callout.type === "warning" ? "text-error" : "text-primary"
                      }`}
                    >
                      {section.callout.type === "warning" ? "warning" : "info"}
                    </span>
                    <span>{section.callout.text}</span>
                  </div>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Soft CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-xs text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-[26px]">cleaning_services</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2">
            Kiểm tra dung lượng Zalo PC trên máy tính của bạn
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto mb-6">
            Zalo Clean hỗ trợ quét và xem trước dữ liệu media hoàn toàn miễn phí. Xử lý trực tiếp trên máy, bảo vệ quyền riêng tư.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-tertiary-container transition-colors shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Tải Zalo Clean cho Windows</span>
            </Link>
            <Link
              href="/#comparison"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-surface-container text-on-surface hover:bg-surface-variant text-sm font-semibold transition-colors"
            >
              <span>Xem so sánh 2 chế độ</span>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-14 pt-8 border-t border-outline-variant/30">
            <h3 className="text-base sm:text-lg font-bold text-on-surface mb-4">
              Bài viết liên quan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-4 sm:p-5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest hover:border-primary/50 transition-all hover:-translate-y-0.5 shadow-xs group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-primary block mb-1.5">
                      {rel.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-on-surface-variant/70">
                    <span>{rel.readingTime}</span>
                    <span className="text-primary font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center">
                      Đọc tiếp →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
