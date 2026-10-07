"use client";

import { useState } from "react";
import Image from "next/image";

const downloadHref =
  "https://github.com/raiboyvn/zaloclean-releases/releases/download/v1.0.0-beta.5/Zalo.Clean.Setup.1.0.0-beta.5.exe";

const faqs = [
  {
    id: "faq-1",
    question: "Zalo Clean có gửi dữ liệu của tôi lên mạng không?",
    answer:
      "Tuyệt đối không. Zalo Clean là tiện ích desktop độc lập thuần túy xử lý cục bộ trên máy tính của bạn (Local Storage). Dữ liệu được quét và dọn trực tiếp trên máy, không upload dữ liệu quét lên cloud.",
  },
  {
    id: "faq-2",
    question: "Dọn an toàn khác gì với dọn nhanh?",
    answer:
      "Dọn nhanh xóa vĩnh viễn ảnh, video và âm thanh đã chọn theo mốc thời gian để giải phóng dung lượng ổ đĩa ngay, không chuyển qua Thùng rác. Dọn an toàn chuyển media đã chọn vào Thùng rác Windows để bạn có thể khôi phục trước khi làm trống Thùng rác; dung lượng ổ đĩa chỉ được giải phóng khi Thùng rác được làm trống.",
  },
  {
    id: "faq-3",
    question: "License có cần gia hạn hàng năm không?",
    answer:
      "Không. Tất cả các gói license của Zalo Clean đều là bản quyền trọn đời (Lifetime License). Bạn mua một lần và có quyền sử dụng vĩnh viễn trên số lượng thiết bị đã đăng ký mà không phát sinh thêm chi phí định kỳ.",
  },
  {
    id: "faq-4",
    question: "Sau khi kích hoạt có dùng offline được không?",
    answer:
      "Hoàn toàn được. Mã kích hoạt sau khi đã xác thực hợp lệ trên máy tính sẽ được lưu mã hóa cục bộ. Bạn có thể tiếp tục sử dụng bình thường ngay cả khi máy tính ở môi trường nội bộ doanh nghiệp không có Internet.",
  },
  {
    id: "faq-5",
    question: "Mua license ở đâu và thanh toán thế nào?",
    answer:
      "Bạn xem bảng giá trên website và thực hiện kích hoạt trực tiếp trong ứng dụng Zalo Clean. Ứng dụng tích hợp thanh toán tự động qua mã VietQR của tất cả ngân hàng Việt Nam, license được cấp và kích hoạt tự động ngay sau khi hoàn tất giao dịch.",
  },
  {
    id: "faq-6",
    question: "Không nhận được email license thì xử lý thế nào?",
    answer:
      "Vui lòng kiểm tra kỹ thư mục Spam / Hộp thư rác. Nếu bạn thanh toán trực tiếp qua VietQR trong app, ứng dụng sẽ tự động kích hoạt license tại chỗ mà không cần chờ email. Trường hợp cần trợ giúp, bạn có thể bấm 'Thử kích hoạt lại' hoặc liên hệ hỗ trợ kèm mã giao dịch.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* 1. Top Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-200">
        <div className="flex justify-between items-center w-full px-space-md md:px-margin-tablet lg:px-margin-desktop max-w-[1280px] mx-auto h-16">
          {/* Brand & Version Badge */}
          <a className="flex items-center gap-space-sm group shrink-0" href="#dau-trang">
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
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-tertiary-fixed/40 text-primary border border-primary/20 tracking-wide">
                v1.0 Beta
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-body-md text-primary font-semibold border-b-2 border-primary pb-1 transition-colors"
              href="#features"
            >
              Tính năng
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="#workflow"
            >
              Quy trình
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="#comparison"
            >
              So sánh
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="#pricing"
            >
              Bảng giá
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="#security"
            >
              An toàn &amp; Riêng tư
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="#faq"
            >
              Hỏi đáp
            </a>
          </nav>

          {/* Trailing CTAs */}
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-label-md text-secondary hover:text-on-surface transition-colors font-medium"
              href="#pricing"
            >
              Bảng giá
            </a>
            <a
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary text-label-lg hover:bg-tertiary-container active:scale-[0.98] transition-all duration-150 shadow-sm shadow-primary/20"
              href={downloadHref}
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Tải ứng dụng (Miễn phí)</span>
            </a>
            {/* Hamburger button (Mobile only) */}
            <button
              className="md:hidden p-2 text-on-surface hover:text-primary transition-colors rounded-lg border border-outline-variant/40"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-space-md py-4 flex flex-col gap-3 shadow-lg">
            <a
              className="text-on-surface-variant font-medium text-body-md py-1.5"
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tính năng
            </a>
            <a
              className="text-on-surface-variant font-medium text-body-md py-1.5"
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quy trình
            </a>
            <a
              className="text-on-surface-variant font-medium text-body-md py-1.5"
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
            >
              So sánh
            </a>
            <a
              className="text-on-surface-variant font-medium text-body-md py-1.5"
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bảng giá
            </a>
            <a
              className="text-on-surface-variant font-medium text-body-md py-1.5"
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
            >
              An toàn &amp; Riêng tư
            </a>
            <a
              className="text-on-surface-variant font-medium text-body-md py-1.5"
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hỏi đáp
            </a>
            <a
              className="bg-primary text-on-primary py-3 text-center rounded-lg font-semibold mt-2"
              href={downloadHref}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tải cho Windows (x64)
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section
        id="dau-trang"
        className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden border-b border-outline-variant/30"
      >
        {/* Atmospheric subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-primary-fixed/25 to-transparent blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
              <span className="text-[11px] sm:text-label-md text-primary font-semibold tracking-wide">
                ZALO CLEAN DÀNH CHO WINDOWS • BẢN 1.0.0-BETA.5
              </span>
            </div>
            {/* Headline */}
            <h1 className="text-headline-xl-mobile md:text-display-hero text-on-surface tracking-tight">
              Dọn Zalo PC gọn hơn. <br className="hidden sm:inline" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary-container">
                An toàn hơn.
              </span>
            </h1>
            {/* Subtitle */}
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Quét thông minh, xem trước trực quan và giải phóng hàng chục GB dữ liệu Zalo PC. Bạn luôn chủ động kiểm tra từng nhóm tệp trước khi dọn.
            </p>
            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg bg-primary-container text-on-primary text-label-lg hover:bg-tertiary-container active:scale-[0.98] transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 font-medium"
                href={downloadHref}
              >
                <span className="material-symbols-outlined text-[20px]">window</span>
                <span>Tải Zalo Clean cho Windows</span>
                <span className="text-[12px] opacity-80 font-normal border-l border-white/30 pl-2">
                  x64 (~112 MB)
                </span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface border border-outline-variant/50 text-label-lg hover:bg-surface-container-low transition-colors shadow-xs font-medium"
                href="#pricing"
              >
                <span>Xem bảng giá</span>
                <span className="text-label-md text-primary font-bold">(Từ 29.000đ)</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            {/* Reassurance micro-copy */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-code-stat text-on-surface-variant pt-2">
              <span className="flex items-center gap-1.5">
                <span className="text-primary font-bold">✓</span> Tương thích Windows 10, 11 (64-bit)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-primary font-bold">✓</span> Quét và dọn dữ liệu trực tiếp trên máy
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-primary font-bold">✓</span> Không cần đăng nhập Zalo
              </span>
            </div>
          </div>

          {/* High-fidelity App Window Mockup (Fluent / Mica aesthetic) */}
          <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
            <div className="fluent-window-shadow rounded-xl bg-surface-container-lowest border border-outline-variant/60 overflow-hidden">
              {/* Windows Title Bar */}
              <div className="h-10 bg-surface-container-low border-b border-outline-variant/40 px-4 flex items-center justify-between select-none">
                <div className="flex items-center gap-2.5">
                  <Image
                    alt="Icon"
                    className="w-4 h-4 object-contain"
                    src="/images/logo.png"
                    width={16}
                    height={16}
                  />
                  <span className="text-code-stat text-on-surface font-medium">
                    Zalo Clean v1.0.0-beta.5 — Quét dọn thông minh
                  </span>
                </div>
                <div className="flex items-center gap-1 -mr-2 pointer-events-none select-none opacity-60">
                  <span className="w-8 h-6 inline-flex items-center justify-center text-on-surface-variant text-xs">🗕</span>
                  <span className="w-8 h-6 inline-flex items-center justify-center text-on-surface-variant text-xs">🗖</span>
                  <span className="w-8 h-6 inline-flex items-center justify-center text-on-surface-variant text-xs">✕</span>
                </div>
              </div>

              {/* App Interior Canvas */}
              <div className="p-5 md:p-8 bg-surface-bright grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Panel: Storage Analytics Gauge & Actions */}
                <div className="lg:col-span-5 bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/40 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                      <span className="text-label-md text-on-surface-variant">Trạng thái phân tích</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-tertiary-fixed/40 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Đã hoàn tất quét
                      </span>
                    </div>
                    <div className="mt-5 text-center">
                      <div className="text-[13px] font-medium text-on-surface-variant">Có thể giải phóng ngay</div>
                      <div className="text-4xl md:text-5xl font-extrabold tracking-tight mt-1 text-primary">
                        38.4 <span className="text-headline-md text-on-surface-variant">GB</span>
                      </div>
                      <p className="text-body-sm text-outline mt-1">Chiếm 41.2% dung lượng cache ổ đĩa C:\</p>
                    </div>

                    {/* Segmented Storage Meter */}
                    <div className="mt-6 space-y-2">
                      <div className="h-3 w-full rounded-full bg-surface-container overflow-hidden flex">
                        <div className="h-full bg-primary" style={{ width: "64.5%" }} title="Ảnh & Video: 24.8 GB"></div>
                        <div className="h-full bg-secondary" style={{ width: "24%" }} title="File & Tài liệu: 9.2 GB"></div>
                        <div className="h-full bg-outline-variant" style={{ width: "11.5%" }} title="Cache & Tạm: 4.4 GB"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-1 pt-2 text-left">
                        <div>
                          <div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Ảnh &amp; Video
                          </div>
                          <div className="text-label-md font-bold text-on-surface mt-0.5">24.8 GB</div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                            <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span> Tài liệu / File
                          </div>
                          <div className="text-label-md font-bold text-on-surface mt-0.5">9.2 GB</div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                            <span className="w-2 h-2 rounded-full bg-outline-variant inline-block"></span> Cache tạm
                          </div>
                          <div className="text-label-md font-bold text-on-surface mt-0.5">4.4 GB</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons inside Mockup (Static illustrative) */}
                  <div className="space-y-2.5 pt-4 border-t border-outline-variant/30 pointer-events-none">
                    <div className="w-full py-2.5 px-4 rounded-lg bg-primary text-on-primary text-label-md flex items-center justify-center gap-2 shadow-xs font-semibold">
                      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                      <span>Dọn vào Thùng rác (An toàn)</span>
                    </div>
                    <div className="w-full py-2 px-4 rounded-lg bg-surface-container-low text-on-surface-variant text-label-md flex items-center justify-center gap-2 font-medium">
                      <span className="material-symbols-outlined text-[18px]">delete_forever</span>
                      <span>Dọn vĩnh viễn</span>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Scanned Categories & File Breakdown */}
                <div className="lg:col-span-7 bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                      <span className="text-headline-sm text-on-surface">Danh mục dữ liệu phát hiện</span>
                      <span className="text-code-stat text-on-surface-variant">14,280 tệp tin</span>
                    </div>
                    <div className="divide-y divide-outline-variant/20 mt-2">
                      {/* Row 1 */}
                      <div className="py-3 flex items-center justify-between hover:bg-surface-bright px-2 rounded-md transition-colors">
                        <div className="flex items-center gap-3">
                          <input
                            checked
                            readOnly
                            className="w-4 h-4 rounded text-primary border-outline-variant accent-primary pointer-events-none"
                            type="checkbox"
                          />
                          <div className="w-8 h-8 rounded bg-primary-fixed/30 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-[18px]">movie</span>
                          </div>
                          <div>
                            <div className="text-label-md text-on-surface font-semibold">
                              Video &amp; Ảnh trong hội thoại nhóm
                            </div>
                            <div className="text-body-sm text-outline">Cache media lớn hơn 60 ngày • 8,420 tệp</div>
                          </div>
                        </div>
                        <span className="text-label-lg font-bold text-on-surface">24.8 GB</span>
                      </div>
                      {/* Row 2 */}
                      <div className="py-3 flex items-center justify-between hover:bg-surface-bright px-2 rounded-md transition-colors">
                        <div className="flex items-center gap-3">
                          <input
                            checked
                            readOnly
                            className="w-4 h-4 rounded text-primary border-outline-variant accent-primary pointer-events-none"
                            type="checkbox"
                          />
                          <div className="w-8 h-8 rounded bg-secondary-container text-secondary flex items-center justify-center">
                            <span className="material-symbols-outlined text-[18px]">folder_zip</span>
                          </div>
                          <div>
                            <div className="text-label-md text-on-surface font-semibold">
                              File nén, cài đặt &amp; tài liệu trùng lặp
                            </div>
                            <div className="text-body-sm text-outline">Thư mục FileReceived • 1,180 tệp</div>
                          </div>
                        </div>
                        <span className="text-label-lg font-bold text-on-surface">9.2 GB</span>
                      </div>
                      {/* Row 3 */}
                      <div className="py-3 flex items-center justify-between hover:bg-surface-bright px-2 rounded-md transition-colors">
                        <div className="flex items-center gap-3">
                          <input
                            checked
                            readOnly
                            className="w-4 h-4 rounded text-primary border-outline-variant accent-primary pointer-events-none"
                            type="checkbox"
                          />
                          <div className="w-8 h-8 rounded bg-surface-container-high text-on-surface-variant flex items-center justify-center">
                            <span className="material-symbols-outlined text-[18px]">cached</span>
                          </div>
                          <div>
                            <div className="text-label-md text-on-surface font-semibold">
                              Bộ nhớ đệm hình thu nhỏ &amp; logs
                            </div>
                            <div className="text-body-sm text-outline">AppData/Roaming/ZaloData/temp • 4,680 tệp</div>
                          </div>
                        </div>
                        <span className="text-label-lg font-bold text-on-surface">4.4 GB</span>
                      </div>
                    </div>
                  </div>

                  {/* Micro audit notice */}
                  <div className="bg-surface-container-low p-3 rounded-lg flex items-center gap-2 text-code-stat text-on-surface-variant mt-4">
                    <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                    <span>Zalo Clean không đụng đến tin nhắn văn bản, danh bạ hay lịch sử chat của bạn.</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-on-surface-variant/70 mt-3 select-none">
              Minh họa giao diện ứng dụng trên Windows
            </p>
          </div>
        </div>
      </section>

      {/* 3. Key Benefits Section */}
      <section className="py-16 md:py-24 bg-surface-container-lowest" id="features">
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-16">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider">
              Lợi ích cốt lõi
            </span>
            <h2 className="text-headline-lg md:text-headline-xl text-on-surface">
              Dọn dẹp rõ ràng, không gây lo lắng
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Được thiết kế riêng cho người dùng văn phòng và chuyên gia sử dụng Zalo thường xuyên trong công việc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-surface-bright p-6 md:p-8 rounded-xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md group">
              <div className="w-12 h-12 rounded-lg bg-tertiary-fixed/50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">speed</span>
              </div>
              <h3 className="text-headline-sm text-on-surface mb-3">Quét nhanh &amp; Toàn diện</h3>
              <p className="text-body-md text-on-surface-variant">
                Nhanh chóng tìm ra dữ liệu Zalo PC đang chiếm nhiều dung lượng (cache, media, temp files trong các thư mục ẩn AppData/Roaming) một cách nhanh chóng.
              </p>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-surface-bright p-6 md:p-8 rounded-xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md group">
              <div className="w-12 h-12 rounded-lg bg-tertiary-fixed/50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">preview</span>
              </div>
              <h3 className="text-headline-sm text-on-surface mb-3">Xem trước trước khi dọn</h3>
              <p className="text-body-md text-on-surface-variant">
                Phân loại rõ ràng từng nhóm dữ liệu theo hội thoại, người gửi, kích thước; hiển thị thumbnail xem trước chi tiết giúp bạn quyết định chính xác không sợ xóa nhầm.
              </p>
            </div>
            {/* Benefit Card 3 */}
            <div className="bg-surface-bright p-6 md:p-8 rounded-xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md group">
              <div className="w-12 h-12 rounded-lg bg-tertiary-fixed/50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">restore_from_trash</span>
              </div>
              <h3 className="text-headline-sm text-on-surface mb-3">Dọn nhanh hoặc vào Thùng rác</h3>
              <p className="text-body-md text-on-surface-variant">
                Xóa vĩnh viễn để giải phóng dung lượng ổ đĩa ngay hoặc chuyển vào Thùng rác Windows để giữ cơ hội khôi phục trước khi làm trống Thùng rác.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <section className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/30" id="workflow">
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider">
              Cách thức hoạt động
            </span>
            <h2 className="text-headline-lg md:text-headline-xl text-on-surface">
              Quy trình 3 bước minh bạch
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Không câu chữ mập mờ, không tính năng ngầm. Người dùng toàn quyền kiểm soát từng tệp tin.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant/40 shadow-xs">
              <div className="text-label-md font-bold text-primary bg-primary-fixed/40 px-3 py-1 rounded-md inline-block mb-4">
                BƯỚC 01
              </div>
              <h3 className="text-headline-sm text-on-surface mb-2">Quét dung lượng đang chiếm</h3>
              <p className="text-body-md text-on-surface-variant">
                Tự động định vị thư mục dữ liệu Zalo PC mà không làm gián đoạn ứng dụng đang chạy. Tốc độ quét cực nhanh với thuật toán đa luồng.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant/40 shadow-xs">
              <div className="text-label-md font-bold text-primary bg-primary-fixed/40 px-3 py-1 rounded-md inline-block mb-4">
                BƯỚC 02
              </div>
              <h3 className="text-headline-sm text-on-surface mb-2">Xem trước theo nhóm dữ liệu</h3>
              <p className="text-body-md text-on-surface-variant">
                Bộ lọc thông minh lọc nhanh file nặng (&gt;50MB, &gt;100MB), phân loại theo hình ảnh, video, tài liệu hoặc mốc thời gian lưu trữ.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant/40 shadow-xs">
              <div className="text-label-md font-bold text-primary bg-primary-fixed/40 px-3 py-1 rounded-md inline-block mb-4">
                BƯỚC 03
              </div>
              <h3 className="text-headline-sm text-on-surface mb-2">Chọn dọn nhanh hoặc an toàn</h3>
              <p className="text-body-md text-on-surface-variant">
                Minh bạch từng byte dung lượng được giải phóng theo thời gian thực. Tùy chọn an toàn đưa vào Thùng rác để yên tâm hoàn toàn.
              </p>
            </div>
          </div>

          {/* Callout Banner */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
              </div>
              <div>
                <div className="text-label-lg text-on-surface font-semibold">Xem trước rồi mới quyết định</div>
                <div className="text-body-sm text-on-surface-variant">
                  Xem trước chi tiết từng nhóm dữ liệu trước khi bạn quyết định dọn.
                </div>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-label-md font-bold text-primary hover:text-tertiary-container shrink-0"
              href={downloadHref}
            >
              Trải nghiệm quét thử miễn phí <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Comparison Section */}
      <section className="py-16 md:py-24 bg-surface-container-lowest" id="comparison">
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider">
              Cơ chế bảo vệ
            </span>
            <h2 className="text-headline-lg md:text-headline-xl text-on-surface">
              Chọn cách dọn phù hợp với bạn
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Zalo Clean mang đến 2 phương thức dọn dẹp linh hoạt tùy theo mức độ quan trọng của tệp dữ liệu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option 1: Quick Clean (Featured - Khuyên dùng) */}
            <div className="bg-surface-bright rounded-2xl p-6 md:p-8 border-2 border-primary shadow-lg shadow-primary/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-3 -right-3 w-28 h-28 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-label-md text-primary font-bold uppercase tracking-wider">
                    Phương thức 1
                  </span>
                  <span className="px-2.5 py-1 rounded bg-primary text-on-primary text-[11px] font-bold">
                    Khuyên dùng
                  </span>
                </div>
                <h3 className="text-headline-md text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">bolt</span> Dọn nhanh
                </h3>
                <p className="text-body-md text-on-surface-variant mb-6">
                  Xóa vĩnh viễn ảnh, video và âm thanh đã chọn theo mốc thời gian để giải phóng dung lượng ổ đĩa.
                </p>
                <ul className="space-y-3 border-t border-outline-variant/20 pt-4 text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Chỉ dọn nhóm media bạn đã chọn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Không chuyển qua Thùng rác.</span>
                  </li>
                  <li className="flex items-start gap-2 text-outline">
                    <span className="material-symbols-outlined text-outline text-[18px]">info</span>
                    <span>Không thể khôi phục từ Thùng rác sau khi dọn.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/20">
                <span className="text-label-md text-primary font-semibold">
                  Dành cho: Khi bạn đã kiểm tra và chắc chắn không cần giữ lại.
                </span>
              </div>
            </div>

            {/* Option 2: Safe Clean (Có thể khôi phục) */}
            <div className="bg-surface-bright rounded-2xl p-6 md:p-8 border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-label-md text-secondary font-bold uppercase tracking-wider">
                    Phương thức 2
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant text-[11px] font-semibold">
                    Có thể khôi phục
                  </span>
                </div>
                <h3 className="text-headline-md text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">security</span> Dọn an toàn
                </h3>
                <p className="text-body-md text-on-surface-variant mb-6">
                  Chuyển media đã chọn vào Thùng rác Windows thay vì xóa vĩnh viễn.
                </p>
                <ul className="space-y-3 border-t border-outline-variant/20 pt-4 text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Có thể khôi phục các tệp còn trong Thùng rác.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Dung lượng ổ đĩa chỉ được giải phóng khi làm trống Thùng rác.</span>
                  </li>
                  <li className="flex items-start gap-2 text-outline">
                    <span className="material-symbols-outlined text-outline text-[18px]">info</span>
                    <span>Sau khi làm trống Thùng rác, không thể khôi phục từ đó.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/20">
                <span className="text-label-md text-on-surface-variant">
                  Dành cho: Khi bạn muốn giữ cơ hội khôi phục trước khi xóa hẳn.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <section className="py-16 md:py-24 bg-surface-container-low border-t border-outline-variant/30" id="pricing">
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider">
              Chi phí một lần
            </span>
            <h2 className="text-headline-lg md:text-headline-xl text-on-surface">
              License trọn đời — Mua một lần, dùng vĩnh viễn
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Không phí gia hạn định kỳ hàng tháng hay hàng năm. Kích hoạt đơn giản bằng mã trực tuyến hoặc mã chuyển khoản.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant/50 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="text-label-lg text-on-surface-variant font-medium">Cá nhân cơ bản</div>
                <h3 className="text-headline-md text-on-surface mt-1">1 Thiết bị</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-on-surface">29.000</span>
                  <span className="text-body-md text-on-surface-variant">đ / trọn đời</span>
                </div>
                <ul className="space-y-3 text-body-sm text-on-surface-variant border-t border-outline-variant/20 pt-5">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Bản quyền trọn đời cho 01 máy tính Windows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Cập nhật miễn phí các bản nâng cấp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Hỗ trợ kỹ thuật qua email/Zalo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Dùng offline sau khi kích hoạt license</span>
                  </li>
                </ul>
              </div>
              <a
                className="mt-8 block text-center py-2.5 px-4 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant text-label-md font-semibold transition-colors"
                href="#thanh-toan"
              >
                Mua bản quyền 1 máy
              </a>
            </div>

            {/* Tier 2 (Featured / Most Popular) */}
            <div className="bg-inverse-surface text-inverse-on-surface rounded-2xl p-6 md:p-8 border-2 border-primary shadow-xl relative flex flex-col justify-between transform md:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                PHỔ BIẾN NHẤT
              </div>
              <div>
                <div className="text-label-lg text-inverse-primary font-medium">Gia đình &amp; Công việc</div>
                <h3 className="text-headline-md text-inverse-on-surface mt-1">3 Thiết bị</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-inverse-on-surface">87.000</span>
                  <span className="text-body-md text-inverse-on-surface/70">đ / trọn đời</span>
                </div>
                <ul className="space-y-3 text-body-sm text-inverse-on-surface/80 border-t border-inverse-on-surface/10 pt-5">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span>
                    <span className="text-inverse-on-surface font-medium">Bản quyền trọn đời cho 3 máy tính (PC &amp; Laptop)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span>
                    <span>Tiết kiệm chi phí so với mua lẻ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span>
                    <span>Được hỗ trợ kích hoạt ưu tiên</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span>
                    <span>Dùng offline sau khi kích hoạt license</span>
                  </li>
                </ul>
              </div>
              <a
                className="mt-8 block text-center py-3 px-4 rounded-lg bg-primary hover:bg-tertiary-container text-on-primary text-label-md font-bold shadow-md shadow-primary/30 transition-colors"
                href="#thanh-toan"
              >
                Mua gói 3 máy (Khuyên dùng)
              </a>
            </div>

            {/* Tier 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant/50 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="text-label-lg text-on-surface-variant font-medium">Nhóm / Văn phòng nhỏ</div>
                <h3 className="text-headline-md text-on-surface mt-1">5 Thiết bị</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-on-surface">145.000</span>
                  <span className="text-body-md text-on-surface-variant">đ / trọn đời</span>
                </div>
                <ul className="space-y-3 text-body-sm text-on-surface-variant border-t border-outline-variant/20 pt-5">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Bản quyền trọn đời cho 05 máy tính</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Phù hợp văn phòng kế toán, studio, team dự án</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Hỗ trợ xuất mã license gộp tiện lợi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Dùng offline sau khi kích hoạt license</span>
                  </li>
                </ul>
              </div>
              <a
                className="mt-8 block text-center py-2.5 px-4 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant text-label-md font-semibold transition-colors"
                href="#thanh-toan"
              >
                Mua bản quyền 5 máy
              </a>
            </div>
          </div>

          {/* Guarantee note */}
          <div className="text-center mt-10 max-w-xl mx-auto text-body-sm text-on-surface-variant flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">qr_code_2</span>
            <span>
              Thanh toán VietQR tiện lợi và kích hoạt tự động trực tiếp trong ứng dụng. License trọn đời theo gói thiết bị đã chọn và tiếp tục sử dụng offline sau khi kích hoạt.
            </span>
          </div>

          {/* In-app activation guidance box */}
          <div
            id="thanh-toan"
            className="mt-10 max-w-2xl mx-auto bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">payments</span>
              </div>
              <div>
                <h4 className="text-headline-sm font-bold text-on-surface">Luồng kích hoạt bản quyền trong ứng dụng</h4>
                <p className="text-body-sm text-on-surface-variant">Không cần thẻ tín dụng, tự động xác nhận qua VietQR</p>
              </div>
            </div>
            <ol className="space-y-3 text-body-sm text-on-surface-variant list-decimal list-inside pl-1">
              <li>Tải và cài đặt Zalo Clean từ nút tải trên website.</li>
              <li>Mở ứng dụng, nhấn vào nút <strong className="text-on-surface">&quot;Kích hoạt bản quyền&quot;</strong> ở góc trên hoặc sau khi quét dữ liệu.</li>
              <li>Chọn gói thiết bị mong muốn (1, 3 hoặc 5 máy) và quét mã VietQR bằng bất kỳ ứng dụng ngân hàng nào.</li>
              <li>License được cấp tự động ngay trên máy và lưu mã hóa cục bộ để tiếp tục dùng offline.</li>
            </ol>
            <div className="mt-5 pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-outline">Chưa có ứng dụng trên máy?</span>
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary text-label-md font-semibold hover:bg-tertiary-container transition-colors"
                href={downloadHref}
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                Tải bộ cài Zalo Clean (x64)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Privacy & Security Section */}
      <section className="py-16 md:py-24 bg-inverse-surface text-inverse-on-surface relative overflow-hidden" id="security">
        {/* Atmospheric teal ambient light */}
        <div className="absolute -bottom-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-label-md text-inverse-primary font-bold uppercase tracking-wider">
              Bảo mật tối đa
            </span>
            <h2 className="text-headline-lg md:text-headline-xl text-inverse-on-surface">
              Quyền riêng tư là mặc định — Quét và dọn dữ liệu trực tiếp trên máy
            </h2>
            <p className="text-body-md text-inverse-on-surface/80">
              Zalo Clean được thiết kế theo triết lý bảo vệ dữ liệu cá nhân cao nhất. Chúng tôi không bao giờ chạm vào nội dung riêng tư của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Security Pillar 1 */}
            <div className="bg-surface-bright/5 p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[26px]">laptop_windows</span>
              </div>
              <h3 className="text-headline-sm text-inverse-on-surface mb-2">Dữ liệu xử lý trên máy</h3>
              <p className="text-body-sm text-inverse-on-surface/75">
                Quét và dọn cục bộ hoàn toàn trên máy tính của bạn. Không gửi bất kỳ tin nhắn, hình ảnh hay tệp tin nào lên bất kỳ máy chủ bên ngoài nào.
              </p>
            </div>
            {/* Security Pillar 2 */}
            <div className="bg-surface-bright/5 p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[26px]">cloud_off</span>
              </div>
              <h3 className="text-headline-sm text-inverse-on-surface mb-2">Không upload dữ liệu</h3>
              <p className="text-body-sm text-inverse-on-surface/75">
                Bảo mật tuyệt đối mọi thông tin cá nhân, tài liệu công việc và danh bạ. Ứng dụng không yêu cầu đăng nhập tài khoản Zalo của bạn.
              </p>
            </div>
            {/* Security Pillar 3 */}
            <div className="bg-surface-bright/5 p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[26px]">wifi_off</span>
              </div>
              <h3 className="text-headline-sm text-inverse-on-surface mb-2">Sử dụng Offline</h3>
              <p className="text-body-sm text-inverse-on-surface/75">
                Sau khi kích hoạt bản quyền một lần duy nhất, bạn hoàn toàn có thể tiếp tục sử dụng mà ứng dụng vẫn hoạt động đầy đủ tính năng ngay cả khi không có kết nối mạng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-16 md:py-24 bg-surface-container-lowest" id="faq">
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider">
              Giải đáp thắc mắc
            </span>
            <h2 className="text-headline-lg md:text-headline-xl text-on-surface">
              Câu hỏi thường gặp
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Những điều người dùng hay băn khoăn nhất trước khi tải và sử dụng Zalo Clean.
            </p>
          </div>

          {/* Accordion Grid */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item) => (
              <details
                key={item.id}
                id={item.id}
                className="group bg-surface-bright rounded-xl border border-outline-variant/40 p-5 open:bg-surface-container-low transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-headline-sm text-on-surface font-semibold">
                  <span>{item.question}</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="mt-3 text-body-md text-on-surface-variant leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section
        className="py-16 md:py-24 bg-gradient-to-br from-inverse-surface via-primary-container to-primary text-on-primary text-center relative overflow-hidden"
        id="download"
      >
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-headline-lg md:text-headline-xl text-on-primary">
              Sẵn sàng cho một chiếc máy tính gọn gàng hơn?
            </h2>
            <p className="text-body-lg text-on-primary-container max-w-xl mx-auto">
              Tải Zalo Clean ngay hôm nay và giải phóng hàng chục gigabyte bộ nhớ ổ đĩa sau các bước quét dọn an toàn.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-surface-container-lowest text-primary text-label-lg font-bold hover:bg-surface-bright active:scale-[0.98] transition-all duration-200 shadow-lg"
                href={downloadHref}
              >
                <span className="material-symbols-outlined text-[22px]">download</span>
                <span>Tải Zalo Clean cho Windows</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-normal">
                  v1.0.0-Beta
                </span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-on-primary text-label-lg transition-colors border border-white/20"
                href="#faq"
              >
                <span>Tìm hiểu thêm câu hỏi</span>
                <span className="material-symbols-outlined text-[18px]">help_outline</span>
              </a>
            </div>
            <div className="text-code-stat text-on-primary-container/80 pt-2">
              Dung lượng ~112 MB • Dành cho Windows 10 &amp; 11 (64-bit) • Quét sạch an toàn
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-surface-container border-t border-outline-variant/40 text-on-surface-variant">
        <div className="max-w-[1280px] mx-auto px-space-md md:px-margin-tablet lg:px-margin-desktop py-12 md:py-16">
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
                Tiện ích tối ưu hóa độc lập dành cho Windows, hỗ trợ quản lý và dọn dẹp dữ liệu lưu trữ cục bộ của Zalo PC an toàn và thông minh.
              </p>
              <div className="text-code-stat text-outline">
                Phiên bản phát hành: 1.0.0-beta.5 (Build 2026.04)
              </div>
            </div>

            {/* Links Column 1: Sản phẩm */}
            <div>
              <div className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-4">
                Sản phẩm
              </div>
              <ul className="space-y-2.5 text-body-sm">
                <li><a className="hover:text-primary transition-colors" href="#features">Tính năng chính</a></li>
                <li><a className="hover:text-primary transition-colors" href="#workflow">Quy trình dọn dẹp</a></li>
                <li><a className="hover:text-primary transition-colors" href="#pricing">Bảng giá bản quyền</a></li>
                <li><a className="hover:text-primary transition-colors" href={downloadHref}>Tải bản Windows x64</a></li>
              </ul>
            </div>

            {/* Links Column 2: Bảo mật & Pháp lý */}
            <div>
              <div className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-4">
                Bảo mật &amp; Pháp lý
              </div>
              <ul className="space-y-2.5 text-body-sm">
                <li><a className="hover:text-primary transition-colors" href="#security">Kiến trúc Offline Local</a></li>
                <li><a className="hover:text-primary transition-colors" href="#features">Chính sách quyền riêng tư</a></li>
                <li><a className="hover:text-primary transition-colors" href="#features">Điều khoản dịch vụ</a></li>
                <li><a className="hover:text-primary transition-colors" href="#features">Tuyên bố miễn trừ</a></li>
              </ul>
            </div>

            {/* Links Column 3: Hỗ trợ khách hàng */}
            <div>
              <div className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-4">
                Hỗ trợ khách hàng
              </div>
              <ul className="space-y-2.5 text-body-sm">
                <li><a className="hover:text-primary transition-colors" href="#faq">Trung tâm hỏi đáp (FAQ)</a></li>
                <li><a className="hover:text-primary transition-colors" href="#thanh-toan">Kích hoạt mã License</a></li>
                <li><a className="hover:text-primary transition-colors" href="#faq">Hỗ trợ kỹ thuật</a></li>
                <li><a className="hover:text-primary transition-colors" href="#features">Gửi góp ý &amp; báo lỗi</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm">
            <div>© 2026 Zalo Clean. All rights reserved.</div>
            <p className="text-outline text-xs text-center md:text-right max-w-xl">
              Zalo Clean là tiện ích tối ưu hóa độc lập dành cho Windows, hỗ trợ quản lý dữ liệu lưu trữ cục bộ của người dùng và không liên kết trực tiếp với VNG hay Zalo Group.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
