import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/data/blogPosts";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog Zalo Clean — Hướng dẫn tối ưu & dọn dẹp Zalo PC",
  description:
    "Chuyên mục chia sẻ kinh nghiệm tối ưu ổ đĩa, kiểm tra cache và dọn dẹp media Zalo PC an toàn, bảo vệ dữ liệu trên máy tính Windows.",
  alternates: {
    canonical: "https://zaloclean.com/blog/",
  },
  openGraph: {
    title: "Blog Zalo Clean — Hướng dẫn tối ưu & dọn dẹp Zalo PC",
    description:
      "Chuyên mục chia sẻ kinh nghiệm tối ưu ổ đĩa, kiểm tra cache và dọn dẹp media Zalo PC an toàn, bảo vệ dữ liệu trên máy tính Windows.",
    url: "https://zaloclean.com/blog/",
    siteName: "Zalo Clean",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Blog Zalo Clean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Zalo Clean — Hướng dẫn tối ưu & dọn dẹp Zalo PC",
    description:
      "Chuyên mục chia sẻ kinh nghiệm tối ưu ổ đĩa, kiểm tra cache và dọn dẹp media Zalo PC an toàn trên Windows.",
    images: ["/images/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog Zalo Clean",
    description:
      "Chuyên mục chia sẻ kinh nghiệm tối ưu ổ đĩa, kiểm tra cache và dọn dẹp media Zalo PC an toàn.",
    url: "https://zaloclean.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Zalo Clean",
      url: "https://zaloclean.com",
      logo: {
        "@type": "ImageObject",
        url: "https://zaloclean.com/images/logo.png",
      },
    },
    hasPart: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://zaloclean.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
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
    ],
  };

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
              href="/"
              className="text-xs sm:text-sm font-medium text-on-surface-variant hover:text-primary transition-colors px-2 sm:px-3 py-1.5 rounded-lg hover:bg-surface-container-low whitespace-nowrap"
            >
              <span className="sm:hidden">Trang chủ</span>
              <span className="hidden sm:inline">Về trang chủ</span>
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

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full flex-1">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-on-surface-variant flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary transition-colors">
            Trang chủ
          </Link>
          <span className="text-outline">/</span>
          <span className="font-semibold text-primary">Blog</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>Kiến thức &amp; Hướng dẫn</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">
            Blog Zalo Clean
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed">
            Kinh nghiệm tối ưu dung lượng ổ đĩa, kiểm tra cache và dọn dẹp dữ liệu media Zalo PC an toàn, minh bạch trên Windows.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-surface-container-low text-primary border border-primary/15">
                    {post.category}
                  </span>
                  <span className="text-xs text-on-surface-variant/75">
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2.5">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs">
                <span className="text-on-surface-variant/70">
                  {post.publishedAt}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-primary group-hover:text-tertiary-container inline-flex items-center gap-1 transition-colors"
                >
                  <span>Đọc bài viết</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
