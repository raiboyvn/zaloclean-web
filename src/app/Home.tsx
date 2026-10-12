"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

const downloadHref = "/download";

const faqs = [
  {
    id: "faq-1",
    question: "Zalo Clean có gửi dữ liệu của tôi lên mạng không?",
    answer:
      "Tuyệt đối không. Zalo Clean xử lý cục bộ trên máy tính. Dữ liệu quét và dọn trực tiếp trên máy, không upload lên máy chủ. Kết nối Internet chỉ sử dụng khi tạo thanh toán và kích hoạt license.",
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
    <div className="bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen overflow-x-clip">
      {/* 1. Top Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-xs transition-all duration-200">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-16">
          {/* Brand & Version Badge */}
          <a className="flex items-center gap-2.5 group shrink-0" href="#dau-trang">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center p-1 bg-surface-container-low border border-outline-variant/40 shadow-xs group-hover:scale-105 transition-transform shrink-0">
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
              <span className="text-lg sm:text-xl font-bold text-on-surface tracking-tight whitespace-nowrap">
                Zalo Clean
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20 tracking-wide">
                v1.0 Beta
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              href="#features"
            >
              Tính năng
            </a>
            <a
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              href="#workflow"
            >
              Quy trình
            </a>
            <a
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              href="#comparison"
            >
              So sánh
            </a>
            <a
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              href="#security"
            >
              An toàn &amp; Riêng tư
            </a>
            <a
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              href="#faq"
            >
              Hỏi đáp
            </a>
          </nav>

          {/* Trailing CTAs */}
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-tertiary-container active:scale-[0.98] transition-all duration-150 shadow-xs hover:shadow-sm"
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
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 px-5 py-5 flex flex-col gap-3 shadow-xl">
            <a
              className="text-on-surface-variant hover:text-primary font-medium text-sm py-2 px-2 rounded-lg hover:bg-surface-container-low transition-colors"
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tính năng
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-medium text-sm py-2 px-2 rounded-lg hover:bg-surface-container-low transition-colors"
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quy trình
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-medium text-sm py-2 px-2 rounded-lg hover:bg-surface-container-low transition-colors"
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
            >
              So sánh
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-medium text-sm py-2 px-2 rounded-lg hover:bg-surface-container-low transition-colors"
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
            >
              An toàn &amp; Riêng tư
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-medium text-sm py-2 px-2 rounded-lg hover:bg-surface-container-low transition-colors"
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hỏi đáp
            </a>
            <a
              className="bg-primary hover:bg-tertiary-container text-on-primary py-3 text-center rounded-xl font-semibold mt-2 shadow-sm text-sm transition-all"
              href={downloadHref}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tải ứng dụng
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section
        id="dau-trang"
        className="relative pt-10 sm:pt-14 md:pt-18 pb-14 md:pb-22 overflow-hidden border-b border-outline-variant/30"
      >
        {/* Atmospheric subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-primary-fixed/20 via-surface-container-low/30 to-transparent blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 shadow-xs mb-5 sm:mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
            <span className="text-[9.5px] sm:text-xs text-primary font-semibold tracking-tight sm:tracking-wider uppercase">
              ZALO CLEAN DÀNH CHO WINDOWS • BẢN 1.0.0-beta.7
            </span>
          </div>

          {/* Headline H1 (Ngắt 2 dòng cân xứng, không rớt chữ "hơn.") */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.25] md:leading-[1.18] max-w-4xl mx-auto mb-5 sm:mb-6">
            <span className="block">Dọn Zalo PC gọn hơn.</span>
            <span className="block text-primary">An toàn hơn.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Quét dung lượng cache và xem trước dữ liệu media (ảnh, video, âm thanh) Zalo PC trực tiếp trên máy tính. Giải phóng từ vài GB đến hàng chục GB media, tùy dữ liệu trên máy.
          </p>

          {/* CTA Row (Duy nhất 1 nút tải, tối ưu gọn gàng cho cả Mobile và Desktop) */}
          <div className="flex items-center justify-center mb-6 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-primary text-on-primary text-sm sm:text-base font-semibold hover:bg-tertiary-container active:scale-[0.98] transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg text-center"
              href={downloadHref}
            >
              <div className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] shrink-0">window</span>
                <span>Tải Zalo Clean cho Windows</span>
              </div>
              <span className="text-xs opacity-85 font-normal sm:border-l sm:border-white/30 sm:pl-2.5">
                x64 (~112 MB)
              </span>
            </a>
          </div>

          {/* Reassurance Commitments */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-on-surface-variant mb-10 md:mb-14">
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

          {/* Real App Screenshot in Hero */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="rounded-2xl border border-outline-variant/60 overflow-hidden shadow-xl md:shadow-2xl bg-surface-container-lowest">
              <Image
                src="/images/zalo-clean-app.png"
                alt="Ảnh chụp thực tế giao diện ứng dụng Zalo Clean trên Windows"
                width={1768}
                height={1248}
                priority
                className="w-full h-auto object-contain block"
              />
            </div>
            <p className="text-center text-xs text-on-surface-variant/70 mt-3.5 select-none px-4 max-w-md mx-auto">
              Ảnh chụp thực tế giao diện ứng dụng Zalo Clean trên Windows
            </p>
          </div>
        </div>
      </section>

      {/* 3. Key Benefits Section */}
      <section className="py-16 md:py-20 bg-surface-container-lowest" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-16">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider block">
              Lợi ích cốt lõi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
              Dọn dẹp rõ ràng, không gây lo lắng
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Được thiết kế riêng cho người dùng văn phòng và chuyên gia sử dụng Zalo thường xuyên trong công việc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-surface-bright p-6 sm:p-7 md:p-8 rounded-2xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">speed</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2.5">Quét nhanh &amp; An toàn</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Tự động tìm kiếm và thống kê dung lượng media (ảnh, video, âm thanh) và bộ nhớ cache Zalo PC trên máy tính Windows mà không làm ảnh hưởng đến ứng dụng.
                </p>
              </div>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-surface-bright p-6 sm:p-7 md:p-8 rounded-2xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">preview</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2.5">Xem trước theo media &amp; thời gian</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Phân loại rõ ràng theo nhóm Hình ảnh, Video &amp; Âm thanh; chọn mốc thời gian giữ lại (30 ngày, 90 ngày, 1 năm...) và xem trước dung lượng ước tính có thể dọn.
                </p>
              </div>
            </div>
            {/* Benefit Card 3 */}
            <div className="bg-surface-bright p-6 sm:p-7 md:p-8 rounded-2xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">restore_from_trash</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2.5">Dọn nhanh hoặc Dọn an toàn</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Linh hoạt chọn xóa vĩnh viễn để giải phóng ổ cứng ngay lập tức, hoặc chuyển vào Thùng rác Windows để giữ cơ hội khôi phục tệp khi cần.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <section className="py-16 md:py-20 bg-surface-container-low border-y border-outline-variant/30" id="workflow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-14">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider block">
              Cách thức hoạt động
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
              Quy trình 3 bước minh bạch
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Quét dung lượng, xem kết quả theo nhóm dữ liệu và chọn chế độ dọn phù hợp. Bạn xác nhận trước khi bắt đầu dọn.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-6 sm:p-7 md:p-8 rounded-2xl border border-outline-variant/40 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-md inline-block w-fit mb-4">
                  BƯỚC 01
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2">Quét dung lượng đang chiếm</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Kiểm tra dung lượng dữ liệu media và bộ nhớ cache Zalo PC trên máy.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-6 sm:p-7 md:p-8 rounded-2xl border border-outline-variant/40 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-md inline-block w-fit mb-4">
                  BƯỚC 02
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2">Xem trước theo nhóm dữ liệu</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Chọn ảnh hoặc video &amp; âm thanh cùng mốc thời gian giữ lại; xem dung lượng ước tính có thể dọn.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-6 sm:p-7 md:p-8 rounded-2xl border border-outline-variant/40 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-md inline-block w-fit mb-4">
                  BƯỚC 03
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2">Chọn dọn nhanh hoặc an toàn</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Dọn nhanh để xóa vĩnh viễn hoặc Dọn an toàn để chuyển media đã chọn vào Thùng rác Windows.
                </p>
              </div>
            </div>
          </div>

          {/* Callout Banner */}
          <div className="mt-10 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
              </div>
              <div>
                <div className="text-sm sm:text-base text-on-surface font-semibold">Xem trước rồi mới quyết định</div>
                <div className="text-xs sm:text-sm text-on-surface-variant">
                  Xem dung lượng ước tính theo từng nhóm media trước khi bạn quyết định dọn.
                </div>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-tertiary-container shrink-0"
              href={downloadHref}
            >
              Trải nghiệm quét thử miễn phí <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Comparison Section */}
      <section className="py-16 md:py-20 bg-surface-container-lowest" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-14">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider block">
              Cơ chế bảo vệ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
              Chọn cách dọn phù hợp với bạn
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Zalo Clean mang đến 2 phương thức dọn dẹp linh hoạt tùy theo mức độ quan trọng của tệp dữ liệu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Option 1: Quick Clean (Featured - Khuyên dùng) */}
            <div className="bg-surface-bright rounded-2xl p-6 sm:p-7 md:p-8 border-2 border-primary shadow-lg shadow-primary/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-3 -right-3 w-28 h-28 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Phương thức 1
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary text-on-primary text-[11px] font-bold tracking-wide uppercase">
                    Khuyên dùng
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">bolt</span> Dọn nhanh
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                  Xóa vĩnh viễn ảnh, video và âm thanh đã chọn theo mốc thời gian để giải phóng dung lượng ổ đĩa.
                </p>
                <ul className="space-y-3 border-t border-outline-variant/20 pt-4 text-xs sm:text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Chỉ dọn nhóm media bạn đã chọn.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Không chuyển qua Thùng rác.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-outline">
                    <span className="material-symbols-outlined text-outline text-[18px]">info</span>
                    <span>Không thể khôi phục từ Thùng rác sau khi dọn.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20">
                <span className="text-xs sm:text-sm text-primary font-semibold">
                  Dành cho: Khi bạn đã kiểm tra và chắc chắn không cần giữ lại.
                </span>
              </div>
            </div>

            {/* Option 2: Safe Clean (Có thể khôi phục) */}
            <div className="bg-surface-bright rounded-2xl p-6 sm:p-7 md:p-8 border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Phương thức 2
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-semibold tracking-wide">
                    Có thể khôi phục
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">security</span> Dọn an toàn
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                  Chuyển media đã chọn vào Thùng rác Windows thay vì xóa vĩnh viễn.
                </p>
                <ul className="space-y-3 border-t border-outline-variant/20 pt-4 text-xs sm:text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Có thể khôi phục các tệp còn trong Thùng rác.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Dung lượng ổ đĩa chỉ được giải phóng khi làm trống Thùng rác.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-outline">
                    <span className="material-symbols-outlined text-outline text-[18px]">info</span>
                    <span>Sau khi làm trống Thùng rác, không thể khôi phục từ đó.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20">
                <span className="text-xs sm:text-sm text-on-surface-variant font-medium">
                  Dành cho: Khi bạn muốn giữ cơ hội khôi phục trước khi xóa hẳn.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <section className="py-16 md:py-20 bg-surface-container-low border-t border-outline-variant/30" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-14">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider block">
              Chi phí một lần
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
              License trọn đời — Mua một lần, dùng vĩnh viễn
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Không phí gia hạn định kỳ hàng tháng hay hàng năm. Kích hoạt đơn giản bằng mã trực tuyến hoặc mã chuyển khoản.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 md:p-8 border border-outline-variant/50 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="text-sm font-medium text-on-surface-variant">Cá nhân cơ bản</div>
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface mt-1">1 Thiết bị</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-on-surface">29.000</span>
                  <span className="text-sm sm:text-base text-on-surface-variant">đ / trọn đời</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-on-surface-variant border-t border-outline-variant/20 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Bản quyền trọn đời cho 01 máy tính Windows</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Cập nhật miễn phí các bản nâng cấp</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Dùng offline sau khi kích hoạt license</span>
                  </li>
                </ul>
              </div>
              <a
                className="mt-8 block text-center py-2.5 px-4 rounded-xl bg-surface-container text-on-surface hover:bg-surface-variant text-sm font-semibold transition-colors"
                href="#thanh-toan"
              >
                Mua bản quyền 1 máy
              </a>
            </div>

            {/* Tier 2 (Featured / Most Popular) */}
            <div className="bg-inverse-surface text-inverse-on-surface rounded-2xl p-6 sm:p-7 md:p-8 border-2 border-primary shadow-xl relative flex flex-col justify-between md:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                Gói 3 máy
              </div>
              <div>
                <div className="text-sm font-medium text-inverse-primary">Gia đình &amp; Công việc</div>
                <h3 className="text-xl sm:text-2xl font-bold text-inverse-on-surface mt-1">3 Thiết bị</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-inverse-on-surface">87.000</span>
                  <span className="text-sm sm:text-base text-inverse-on-surface/70">đ / trọn đời</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-inverse-on-surface/80 border-t border-inverse-on-surface/10 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span>
                    <span className="text-inverse-on-surface font-medium">Bản quyền trọn đời cho 3 máy tính (PC &amp; Laptop)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span>
                    <span>Phù hợp khi sử dụng trên 3 máy tính</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span>
                    <span>Dùng offline sau khi kích hoạt license</span>
                  </li>
                </ul>
              </div>
              <a
                className="mt-8 block text-center py-3 px-4 rounded-xl bg-primary hover:bg-tertiary-container text-on-primary text-sm font-bold shadow-md shadow-primary/30 transition-colors"
                href="#thanh-toan"
              >
                Mua bản quyền 3 máy
              </a>
            </div>

            {/* Tier 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 md:p-8 border border-outline-variant/50 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="text-sm font-medium text-on-surface-variant">Nhóm / Văn phòng nhỏ</div>
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface mt-1">5 Thiết bị</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-on-surface">145.000</span>
                  <span className="text-sm sm:text-base text-on-surface-variant">đ / trọn đời</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-on-surface-variant border-t border-outline-variant/20 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Bản quyền trọn đời cho 05 máy tính</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Phù hợp văn phòng kế toán, studio, team dự án</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                    <span>Dùng offline sau khi kích hoạt license</span>
                  </li>
                </ul>
              </div>
              <a
                className="mt-8 block text-center py-2.5 px-4 rounded-xl bg-surface-container text-on-surface hover:bg-surface-variant text-sm font-semibold transition-colors"
                href="#thanh-toan"
              >
                Mua bản quyền 5 máy
              </a>
            </div>
          </div>

          {/* Guarantee note */}
          <div className="text-center mt-10 max-w-xl mx-auto text-xs sm:text-sm text-on-surface-variant flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">qr_code_2</span>
            <span>
              Thanh toán VietQR tiện lợi và kích hoạt tự động trực tiếp trong ứng dụng. License trọn đời theo gói thiết bị đã chọn và tiếp tục sử dụng offline sau khi kích hoạt.
            </span>
          </div>

          {/* In-app activation guidance box */}
          <div
            id="thanh-toan"
            className="mt-10 max-w-2xl mx-auto bg-surface-container-lowest p-6 sm:p-7 rounded-2xl border border-outline-variant/50 shadow-xs"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">payments</span>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-on-surface">Luồng kích hoạt bản quyền trong ứng dụng</h4>
                <p className="text-xs sm:text-sm text-on-surface-variant">Không cần thẻ tín dụng, tự động xác nhận qua VietQR</p>
              </div>
            </div>
            <ol className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant list-decimal list-inside pl-1 leading-relaxed">
              <li>Tải và cài đặt Zalo Clean từ nút tải trên website.</li>
              <li>Mở ứng dụng, nhấn vào nút <strong className="text-on-surface">&quot;Kích hoạt bản quyền&quot;</strong> ở góc trên hoặc sau khi quét dữ liệu.</li>
              <li>Chọn gói thiết bị mong muốn (1, 3 hoặc 5 máy) và quét mã VietQR bằng bất kỳ ứng dụng ngân hàng nào.</li>
              <li>License được cấp tự động ngay trên máy và lưu mã hóa cục bộ để tiếp tục dùng offline.</li>
            </ol>
            <div className="mt-5 pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-outline">Chưa có ứng dụng trên máy?</span>
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-tertiary-container transition-colors"
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
      <section className="py-16 md:py-20 bg-inverse-surface text-inverse-on-surface relative overflow-hidden" id="security">
        {/* Atmospheric teal ambient light */}
        <div className="absolute -bottom-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-14">
            <span className="text-label-md text-inverse-primary font-bold uppercase tracking-wider block">
              Bảo mật tối đa
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-inverse-on-surface tracking-tight">
              Quyền riêng tư là mặc định — Quét và dọn dữ liệu trực tiếp trên máy
            </h2>
            <p className="text-sm sm:text-base text-inverse-on-surface/80">
              Zalo Clean quét và dọn dữ liệu Zalo PC trực tiếp trên máy tính. Dữ liệu quét không được tải lên máy chủ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Security Pillar 1 */}
            <div className="bg-surface-bright/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">laptop_windows</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-inverse-on-surface mb-2">Dữ liệu xử lý trên máy</h3>
                <p className="text-xs sm:text-sm text-inverse-on-surface/75 leading-relaxed">
                  Dữ liệu Zalo PC được quét và dọn trực tiếp trên máy tính của bạn. Dữ liệu quét không được tải lên máy chủ.
                </p>
              </div>
            </div>
            {/* Security Pillar 2 */}
            <div className="bg-surface-bright/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">cloud_off</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-inverse-on-surface mb-2">Không upload dữ liệu</h3>
                <p className="text-xs sm:text-sm text-inverse-on-surface/75 leading-relaxed">
                  Bảo vệ tối đa quyền riêng tư. Không đọc tin nhắn văn bản, danh bạ hay lịch sử trò chuyện. Không yêu cầu đăng nhập Zalo.
                </p>
              </div>
            </div>
            {/* Security Pillar 3 */}
            <div className="bg-surface-bright/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">wifi_off</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-inverse-on-surface mb-2">Sử dụng Offline</h3>
                <p className="text-xs sm:text-sm text-inverse-on-surface/75 leading-relaxed">
                  Sau khi kích hoạt bản quyền, ứng dụng có thể tiếp tục quét và dọn offline trên máy mà không cần duy trì kết nối mạng liên tục.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-16 md:py-20 bg-surface-container-lowest" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-14">
            <span className="text-label-md text-primary font-bold uppercase tracking-wider block">
              Giải đáp thắc mắc
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
              Câu hỏi thường gặp
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Những điều người dùng hay băn khoăn nhất trước khi tải và sử dụng Zalo Clean.
            </p>
          </div>

          {/* Accordion Grid */}
          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((item) => (
              <details
                key={item.id}
                id={item.id}
                className="group bg-surface-bright rounded-2xl border border-outline-variant/40 p-5 sm:p-6 open:bg-surface-container-low transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-base sm:text-lg text-on-surface font-semibold gap-4">
                  <span>{item.question}</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-inverse-surface via-primary-container to-primary text-on-primary text-center relative overflow-hidden"
        id="download"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-primary tracking-tight">
              Sẵn sàng cho một chiếc máy tính gọn gàng hơn?
            </h2>
            <p className="text-base sm:text-lg text-on-primary-container max-w-xl mx-auto leading-relaxed">
              Tải Zalo Clean ngay hôm nay, xem trước dung lượng ước tính và dọn dẹp dữ liệu media Zalo PC an toàn trên Windows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <a
                className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-surface-container-lowest text-primary text-sm sm:text-base font-bold hover:bg-surface-bright active:scale-[0.98] transition-all duration-200 shadow-lg text-center"
                href={downloadHref}
              >
                <div className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] shrink-0">download</span>
                  <span>Tải Zalo Clean cho Windows</span>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-normal sm:ml-1">
                  v1.0.0-Beta
                </span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-on-primary text-sm sm:text-base transition-colors border border-white/20"
                href="#faq"
              >
                <span>Tìm hiểu thêm câu hỏi</span>
                <span className="material-symbols-outlined text-[18px]">help_outline</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm text-on-primary-container/85 pt-2">
              Dung lượng ~112 MB • Dành cho Windows 10 &amp; 11 (64-bit) • Quét sạch an toàn
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer (Bố cục 2 cột nằm xa nhau ở hai mép vùng nội dung) */}
      <Footer />
    </div>
  );
}
