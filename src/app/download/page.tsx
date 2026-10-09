import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const downloadHref =
  "https://github.com/raiboyvn/zaloclean-releases/releases/download/v1.0.0-beta.7/Zalo.Clean.Setup.1.0.0-beta.7.exe";
const installerName = "Zalo.Clean.Setup.1.0.0-beta.7.exe";

export const metadata: Metadata = {
  title: "Tải Zalo Clean cho Windows — Cài đặt & hướng dẫn sử dụng",
  description: "Tải Zalo Clean beta.7 cho Windows 10/11 x64. Quét và xem trước miễn phí; hướng dẫn cài đặt, SmartScreen và lựa chọn phương thức dọn dữ liệu Zalo PC.",
  alternates: { canonical: "https://zaloclean.com/download" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const installationSteps = [
  { title: "Tải bộ cài từ nguồn chính thức", text: "Dùng nút tải trên trang này. Kiểm tra nguồn GitHub Releases và tên file bên dưới trước khi mở bộ cài." },
  { title: "Mở bộ cài đã tải", text: "Nếu Windows hiển thị cảnh báo SmartScreen, đọc hướng dẫn bên dưới và kiểm tra nguồn tải trước khi quyết định chạy." },
  { title: "Làm theo trình cài đặt", text: "Đọc các thông báo và làm theo hướng dẫn của bộ cài. Chờ quá trình cài đặt hoàn tất rồi mở Zalo Clean." },
];
const usageSteps = [
  { title: "Quét dữ liệu", text: "Mở Zalo Clean và bắt đầu quét để kiểm tra dữ liệu Zalo PC đang chiếm dung lượng trên máy." },
  { title: "Xem trước kết quả", text: "Xem kết quả quét và dung lượng ước tính. Quét và xem trước miễn phí giúp bạn kiểm tra trước khi quyết định dọn." },
  { title: "Chọn dữ liệu cần dọn", text: "Chọn nhóm dữ liệu và mốc thời gian theo chức năng ứng dụng hỗ trợ. Kiểm tra kỹ và sao lưu những tệp quan trọng trước khi xác nhận." },
  { title: "Chọn phương thức dọn", text: "Đọc sự khác nhau giữa Dọn an toàn và Dọn nhanh bên dưới. Dung lượng có thể giải phóng phụ thuộc dữ liệu được chọn và phương thức dọn." },
];
const faqs = [
  { question: "Tải và quét thử có miễn phí không?", answer: "Bạn có thể tải bộ cài, quét và xem trước miễn phí. Việc sử dụng các chức năng cần bản quyền tuân theo gói và điều kiện được công bố trong ứng dụng." },
  { question: "Kích hoạt bản quyền ở đâu?", answer: "Thực hiện mua và kích hoạt bản quyền trong ứng dụng Zalo Clean theo hướng dẫn. Kích hoạt và thanh toán cần kết nối Internet; kiểm tra trạng thái giao dịch trước khi tiếp tục." },
  { question: "Dọn an toàn khác Dọn nhanh thế nào?", answer: "Dọn an toàn chuyển dữ liệu đã chọn vào Thùng rác Windows, giữ cơ hội khôi phục trước khi làm trống Thùng rác. Dọn nhanh xóa trực tiếp; không thể khôi phục từ Thùng rác sau khi dọn." },
  { question: "Vì sao Windows có thể cảnh báo khi mở bộ cài?", answer: "Ứng dụng hiện chưa có chữ ký số nên một số máy có thể hiện cảnh báo ứng dụng chưa được nhận diện. Cảnh báo không xác nhận ứng dụng an toàn; hãy kiểm tra nguồn tải và tên file trước khi quyết định chạy." },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header className="border-b border-outline-variant/40 bg-surface-container-lowest">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-space-md py-4 md:px-margin-tablet lg:px-margin-desktop">
          <Link href="/" className="flex items-center gap-space-sm text-headline-sm font-bold">
            <Image src="/images/logo.png" alt="Zalo Clean" width={36} height={36} className="h-9 w-9 object-contain" />
            <span>Zalo Clean</span>
          </Link>
          <Link href="/" className="rounded-lg border border-outline-variant/60 px-4 py-2 text-label-lg font-semibold text-primary hover:bg-surface-container-low">Về trang chủ</Link>
        </div>
      </header>

      <main>
        <section className="border-b border-outline-variant/30 bg-surface-container-low px-space-md py-12 md:px-margin-tablet md:py-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-label-md font-bold uppercase tracking-wider text-primary">Zalo Clean · Windows · 1.0.0-beta.7</p>
            <h1 className="text-headline-xl-mobile font-bold tracking-tight md:text-display-hero">Tải Zalo Clean cho Windows</h1>
            <p className="mt-5 max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">Quét và xem trước dữ liệu Zalo PC miễn phí. Kiểm tra kết quả, chọn phạm vi cần dọn và làm theo hướng dẫn trước khi xác nhận.</p>
            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={downloadHref} className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-label-lg font-semibold text-on-primary shadow-sm transition-colors hover:bg-tertiary-container sm:w-auto">Tải Zalo Clean cho Windows x64</a>
              <span className="text-body-sm text-on-surface-variant">Windows 10/11 · 64-bit · beta.7</span>
            </div>
            <p className="mt-4 text-body-sm text-on-surface-variant">Bản thử nghiệm. Ứng dụng hiện chưa có chữ ký số; hãy đọc hướng dẫn SmartScreen trước khi mở bộ cài.</p>
            <nav aria-label="Hướng dẫn tải và sử dụng" className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-body-sm font-semibold text-primary">
              <a href="#installation" className="underline underline-offset-4">Cài đặt</a>
              <a href="#smartscreen" className="underline underline-offset-4">Windows SmartScreen</a>
              <a href="#user-guide" className="underline underline-offset-4">Cách sử dụng</a>
              <a href="#faq" className="underline underline-offset-4">Hỏi đáp</a>
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-12 px-space-md py-10 md:space-y-16 md:px-margin-tablet md:py-16">
          <section id="installation" className="scroll-mt-6">
            <h2 className="text-headline-lg font-bold md:text-headline-xl">Cài đặt trong 3 bước</h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-3">
              {installationSteps.map((step, index) => (
                <li key={step.title} className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5">
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-fixed text-label-lg font-bold text-on-primary-fixed">{index + 1}</span>
                  <h3 className="text-headline-sm font-semibold">{step.title}</h3>
                  <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="smartscreen" className="scroll-mt-6 rounded-2xl border border-outline-variant/60 bg-surface-container-low p-5 md:p-8">
            <p className="text-label-md font-bold uppercase tracking-wider text-primary">Lưu ý trước khi chạy</p>
            <h2 className="mt-2 text-headline-lg font-bold">Nếu Windows hiện cảnh báo SmartScreen</h2>
            <div className="mt-4 space-y-4 text-body-md leading-relaxed text-on-surface-variant">
              <p>Một số máy có thể hiển thị <strong className="text-on-surface">Windows protected your PC</strong> và <strong className="text-on-surface">Don&apos;t run</strong>. Cảnh báo có thể xuất hiện với ứng dụng chưa ký số hoặc chưa có đủ uy tín tải xuống. Điều này không chứng minh ứng dụng an toàn.</p>
              <ol className="list-decimal space-y-3 pl-5">
                <li>Kiểm tra bạn tải từ nút chính thức trên <strong>zaloclean.com</strong>, dẫn tới GitHub Releases của dự án Zalo Clean. Không dùng bộ cài từ nguồn không rõ.</li>
                <li>Đối chiếu tên file: <code className="break-all rounded bg-surface-container-lowest px-1.5 py-1 text-body-sm text-on-surface">{installerName}</code>. Tên file đúng là bước kiểm tra, không phải chứng nhận an toàn.</li>
                <li>Chỉ khi nguồn tải đúng và bạn tin tưởng ứng dụng, chọn <strong>More info</strong> → <strong>Run anyway</strong>, nếu Windows cung cấp tùy chọn này. Nếu không chắc chắn, chọn <strong>Don&apos;t run</strong> và liên hệ hỗ trợ.</li>
              </ol>
              <p>Không tắt Defender hoặc SmartScreen để chạy bộ cài. Nếu Windows hoặc phần mềm bảo mật báo phát hiện mã độc, dừng chạy và liên hệ hỗ trợ; không bỏ qua cảnh báo đó. Nếu Windows không cung cấp tùy chọn chạy, không tìm cách vượt qua cơ chế chặn.</p>
              <p>Zalo Clean hiện chưa có chữ ký số; không có tuyên bố Microsoft đã xác minh, chứng nhận hoặc ký ứng dụng.</p>
              <p className="border-t border-outline-variant/40 pt-4 text-body-sm">Vị trí bổ sung ảnh SmartScreen thực tế sau: cảnh báo ban đầu và màn hình More info. Hiện hướng dẫn sử dụng chữ; chưa có ảnh chụp thực tế của bộ cài này.</p>
              <a href="https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/smartscreen-reputation" className="inline-block text-primary underline underline-offset-4">Tìm hiểu SmartScreen từ Microsoft</a>
            </div>
          </section>

          <section id="user-guide" className="scroll-mt-6">
            <h2 className="text-headline-lg font-bold md:text-headline-xl">Quét, xem trước rồi chọn cách dọn</h2>
            <ol className="mt-6 space-y-4">
              {usageSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-label-lg font-bold text-on-primary-fixed">{index + 1}</span>
                  <div><h3 className="text-headline-sm font-semibold">{step.title}</h3><p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">{step.text}</p></div>
                </li>
              ))}
            </ol>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-primary/30 bg-surface-container-lowest p-6">
                <h3 className="text-headline-md font-semibold text-primary">Dọn an toàn · Thùng rác</h3>
                <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">Chuyển dữ liệu đã chọn vào Thùng rác Windows. Bạn có thể khôi phục các tệp còn trong Thùng rác trước khi làm trống.</p>
                <p className="mt-3 text-body-sm font-semibold">Dung lượng ổ đĩa chỉ được giải phóng sau khi làm trống Thùng rác.</p>
              </div>
              <div className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-6">
                <h3 className="text-headline-md font-semibold">Dọn nhanh · Xóa trực tiếp</h3>
                <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">Xóa trực tiếp dữ liệu đã chọn, không chuyển qua Thùng rác. Chỉ xác nhận khi bạn đã kiểm tra và chắc chắn không cần giữ lại.</p>
                <p className="mt-3 text-body-sm font-semibold">Không thể khôi phục từ Thùng rác sau khi dọn.</p>
              </div>
            </div>
          </section>

          <section id="faq" className="scroll-mt-6">
            <h2 className="text-headline-lg font-bold md:text-headline-xl">Câu hỏi thường gặp</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5">
                  <summary className="cursor-pointer text-body-lg font-semibold">{faq.question}</summary>
                  <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-primary p-6 text-on-primary md:p-8">
            <h2 className="text-headline-md font-semibold">Cần hỗ trợ khi tải hoặc sử dụng?</h2>
            <p className="mt-3 text-body-md leading-relaxed">Gửi câu hỏi tới <a href="mailto:contact@zaloclean.com" className="break-words font-semibold underline underline-offset-4">contact@zaloclean.com</a>. Với cảnh báo Windows, ghi lại nội dung cảnh báo và tên file trước khi liên hệ.</p>
          </section>
        </div>
      </main>
      <footer className="border-t border-outline-variant/40 bg-surface-container">
        <nav aria-label="Liên kết Zalo Clean" className="mx-auto flex max-w-4xl flex-wrap gap-x-6 gap-y-3 px-space-md py-6 text-body-sm text-on-surface-variant md:px-margin-tablet">
          <Link href="/" className="hover:text-primary">Trang chủ</Link>
          <Link href="/privacy" className="hover:text-primary">Chính sách quyền riêng tư</Link>
          <Link href="/terms" className="hover:text-primary">Điều khoản sử dụng</Link>
          <Link href="/disclaimer" className="hover:text-primary">Tuyên bố miễn trừ</Link>
        </nav>
      </footer>
    </div>
  );
}
