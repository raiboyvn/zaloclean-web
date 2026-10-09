import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header className="border-b border-outline-variant/40 bg-surface-container-lowest">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-space-md py-4 md:px-margin-tablet lg:px-margin-desktop">
          <Link href="/" className="flex items-center gap-space-sm text-headline-sm font-bold">
            <Image src="/images/logo.png" alt="Zalo Clean" width={36} height={36} className="h-9 w-9 object-contain" />
            <span>Zalo Clean</span>
          </Link>
          <Link href="/" className="rounded-lg border border-outline-variant/60 px-4 py-2 text-label-lg font-semibold text-primary transition-colors hover:bg-surface-container-low">
            Về trang chủ
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-space-md py-10 md:px-margin-tablet md:py-16">
        <article className="space-y-8">
          <h1 className="text-headline-xl-mobile font-bold tracking-tight md:text-headline-xl">{title}</h1>
          {children}
        </article>
      </main>
      <footer className="border-t border-outline-variant/40 bg-surface-container text-on-surface-variant">
        <nav aria-label="Chính sách Zalo Clean" className="mx-auto flex max-w-3xl flex-wrap gap-x-6 gap-y-3 px-space-md py-6 text-body-sm md:px-margin-tablet">
          <Link href="/privacy" className="hover:text-primary">Chính sách quyền riêng tư</Link>
          <Link href="/terms" className="hover:text-primary">Điều khoản sử dụng</Link>
          <Link href="/disclaimer" className="hover:text-primary">Tuyên bố miễn trừ</Link>
        </nav>
      </footer>
    </div>
  );
}
