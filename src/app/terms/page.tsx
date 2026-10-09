import type { Metadata } from "next";
import PolicyPage from "../PolicyPage";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng Zalo Clean",
  description: "Zalo Clean là phần mềm tiện ích độc lập dành cho Windows, được phát triển và vận hành bởi cá nhân dưới thương hiệu Zalo Clean.",
  alternates: { canonical: "https://zaloclean.com/terms" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function Page() {
  return (
    <PolicyPage title="Điều khoản sử dụng Zalo Clean">
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"1. Giới thiệu"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Zalo Clean là phần mềm tiện ích độc lập dành cho Windows, được phát triển và vận hành bởi cá nhân dưới thương hiệu Zalo Clean."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"2. Phạm vi sử dụng"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Phần mềm hỗ trợ kiểm tra dung lượng, quét, xem trước và dọn dẹp dữ liệu Zalo PC theo chức năng của từng phiên bản."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Người dùng chịu trách nhiệm lựa chọn dữ liệu cần xử lý và cần xem xét kết quả quét trước khi xác nhận."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"3. Bản quyền phần mềm"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Zalo Clean có thể cung cấp các gói bản quyền tương ứng với số lượng thiết bị khác nhau."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Giá bán, quyền lợi, phạm vi cập nhật và điều kiện kích hoạt được công bố tại thời điểm người dùng đăng ký hoặc mua bản quyền."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"4. Thanh toán và kích hoạt"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Nếu lựa chọn mua bản quyền, người dùng thực hiện thanh toán qua phương thức được ứng dụng hỗ trợ."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Việc cấp hoặc kích hoạt bản quyền được thực hiện sau khi giao dịch được hệ thống xác nhận."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Các điều kiện về xử lý giao dịch lỗi, chuyển thiết bị và hoàn tiền sẽ được công bố theo chính sách chính thức."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"5. Trách nhiệm sử dụng"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Người dùng cần xem trước dữ liệu, sao lưu những thông tin quan trọng và cân nhắc phương thức dọn phù hợp."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Việc xóa vĩnh viễn có thể khiến dữ liệu không thể khôi phục bằng các công cụ thông thường."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"6. Hỗ trợ"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Liên hệ "}<strong><a href="mailto:contact@zaloclean.com" className="break-words text-primary underline underline-offset-4">{"contact@zaloclean.com"}</a></strong>{" khi cần hỗ trợ kỹ thuật, kích hoạt hoặc thông tin về bản quyền."}</p>
      </section>
    </PolicyPage>
  );
}
