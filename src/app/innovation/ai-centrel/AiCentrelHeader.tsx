"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const downloadHref =
  "https://github.com/raiboyvn/zaloclean-releases/releases/download/v1.0.0-beta.7/Zalo.Clean.Setup.1.0.0-beta.7.exe";

export default function AiCentrelHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-200">
      <div className="flex justify-between items-center w-full px-space-md md:px-margin-tablet lg:px-margin-desktop max-w-[1280px] mx-auto h-16">
        {/* Brand & Innovation Badge */}
        <Link className="flex items-center gap-space-sm group shrink-0" href="/">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center p-1 bg-surface-container-low border border-outline-variant/40 shadow-xs group-hover:scale-105 transition-transform shrink-0">
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
            <span className="text-headline-sm font-bold text-on-surface tracking-tight whitespace-nowrap">
              Zalo Clean
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-tertiary-fixed/40 text-primary border border-primary/20 tracking-wide flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Innovation
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="/"
          >
            Trang chủ
          </Link>
          <Link
            className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="/#features"
          >
            Tính năng
          </Link>
          <Link
            className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="/#workflow"
          >
            Quy trình
          </Link>
          <Link
            className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="/#pricing"
          >
            Bảng giá
          </Link>
          <Link
            className="text-body-md text-primary font-semibold border-b-2 border-primary pb-0.5 transition-colors flex items-center gap-1.5"
            href="/innovation/ai-centrel/"
          >
            <span>AI Centrel</span>
            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-primary/10 text-primary border border-primary/20">
              R&amp;D
            </span>
          </Link>
          <Link
            className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="/#security"
          >
            An toàn &amp; Riêng tư
          </Link>
          <Link
            className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="/#faq"
          >
            Hỏi đáp
          </Link>
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 text-label-md text-secondary hover:text-on-surface transition-colors font-medium"
            href="/"
          >
            Về Trang chủ
          </Link>
          <a
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary text-label-lg hover:bg-tertiary-container active:scale-[0.98] transition-all duration-150 shadow-sm shadow-primary/20"
            href={downloadHref}
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Tải ứng dụng</span>
          </a>
          {/* Hamburger button (Mobile only) */}
          <button
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors rounded-lg border border-outline-variant/40"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-space-md py-4 flex flex-col gap-3 shadow-lg animate-in fade-in duration-150">
          <Link
            className="text-on-surface-variant font-medium text-body-md py-1.5 flex items-center justify-between"
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Trang chủ Zalo Clean</span>
            <span className="material-symbols-outlined text-sm text-outline">arrow_forward</span>
          </Link>
          <Link
            className="text-on-surface-variant font-medium text-body-md py-1.5"
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tính năng chính
          </Link>
          <Link
            className="text-on-surface-variant font-medium text-body-md py-1.5"
            href="/#workflow"
            onClick={() => setMobileMenuOpen(false)}
          >
            Quy trình dọn dẹp
          </Link>
          <Link
            className="text-on-surface-variant font-medium text-body-md py-1.5"
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
          >
            Bảng giá bản quyền
          </Link>
          <div className="pt-2 border-t border-outline-variant/20">
            <div className="text-[11px] font-bold text-outline uppercase tracking-wider px-1 pb-1">
              Đổi mới sáng tạo
            </div>
            <Link
              className="text-primary font-semibold text-body-md py-2 px-2.5 rounded-lg bg-surface-container-low flex items-center justify-between"
              href="/innovation/ai-centrel/"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">science</span>
                <span>AI Centrel</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-on-primary">
                Đang xem
              </span>
            </Link>
          </div>
          <Link
            className="text-on-surface-variant font-medium text-body-md py-1.5"
            href="/#security"
            onClick={() => setMobileMenuOpen(false)}
          >
            An toàn &amp; Riêng tư
          </Link>
          <Link
            className="text-on-surface-variant font-medium text-body-md py-1.5"
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hỏi đáp (FAQ)
          </Link>
          <a
            className="bg-primary text-on-primary py-3 text-center rounded-lg font-semibold mt-2 shadow-sm"
            href={downloadHref}
            onClick={() => setMobileMenuOpen(false)}
          >
            Tải ứng dụng Windows (x64)
          </a>
        </div>
      )}
    </header>
  );
}
