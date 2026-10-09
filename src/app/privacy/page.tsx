import type { Metadata } from "next";
import PolicyPage from "../PolicyPage";

export const metadata: Metadata = {
  title: "Chính sách quyền riêng tư | Zalo Clean",
  description: "Zalo Clean tôn trọng quyền riêng tư và quyền kiểm soát dữ liệu của người sử dụng.",
  alternates: { canonical: "https://zaloclean.com/privacy" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function Page() {
  return (
    <PolicyPage title="Chính sách quyền riêng tư">
      <p className="text-body-md leading-relaxed text-on-surface-variant"><strong>{"Zalo Clean"}</strong>{" tôn trọng quyền riêng tư và quyền kiểm soát dữ liệu của người sử dụng."}</p>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"1. Dữ liệu trên máy tính"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Zalo Clean hỗ trợ quét, xem trước và dọn dẹp dữ liệu Zalo PC trực tiếp trên thiết bị Windows của người dùng."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Dữ liệu được quét và dọn trên máy tính, không được tải lên máy chủ của Zalo Clean."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"2. Kết nối Internet"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Một số chức năng vận hành, chẳng hạn như kích hoạt bản quyền và xử lý thanh toán, có thể yêu cầu kết nối Internet."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Thông tin phục vụ các chức năng này được xử lý theo phạm vi cần thiết để cung cấp dịch vụ. Chi tiết về loại dữ liệu, bên xử lý và thời gian lưu trữ sẽ được công bố sau khi xác minh đầy đủ."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"3. Quyền kiểm soát dữ liệu"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Người dùng có thể xem trước kết quả quét và lựa chọn dữ liệu cần dọn theo các chức năng ứng dụng hỗ trợ."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Người dùng nên kiểm tra kỹ dữ liệu được lựa chọn trước khi xác nhận dọn dẹp."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"4. Liên hệ"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Mọi câu hỏi về quyền riêng tư và dữ liệu có thể gửi tới:"}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant"><strong><a href="mailto:contact@zaloclean.com" className="break-words text-primary underline underline-offset-4">{"contact@zaloclean.com"}</a></strong></p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Chính sách có thể được cập nhật khi tính năng hoặc hoạt động xử lý dữ liệu thay đổi."}</p>
      </section>
    </PolicyPage>
  );
}
