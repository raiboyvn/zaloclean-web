import type { Metadata } from "next";
import PolicyPage from "../PolicyPage";

export const metadata: Metadata = {
  title: "Tuyên bố miễn trừ | Zalo Clean",
  description: "Zalo Clean là phần mềm tiện ích độc lập, không phải sản phẩm chính thức của Zalo hoặc VNG, không đại diện và không được các đơn vị này tài trợ hoặc bảo chứng.",
  alternates: { canonical: "https://zaloclean.com/disclaimer" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function Page() {
  return (
    <PolicyPage title="Tuyên bố miễn trừ">
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"1. Sản phẩm độc lập"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Zalo Clean là phần mềm tiện ích độc lập, không phải sản phẩm chính thức của Zalo hoặc VNG, không đại diện và không được các đơn vị này tài trợ hoặc bảo chứng."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Tên Zalo được sử dụng để mô tả phần mềm và dữ liệu mà tiện ích hướng tới hỗ trợ."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"2. Kết quả dọn dẹp"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Dung lượng có thể giải phóng phụ thuộc vào dữ liệu thực tế trên máy tính, phạm vi được chọn và phương thức dọn."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Những số liệu hoặc hình ảnh có ghi chú minh họa trên website không phải cam kết về kết quả trên mọi thiết bị."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"3. Khôi phục dữ liệu"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Chế độ chuyển dữ liệu vào Thùng rác Windows có thể cho phép người dùng khôi phục dữ liệu trước khi Thùng rác bị làm trống."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Dữ liệu bị xóa vĩnh viễn có thể không khôi phục được. Người dùng nên kiểm tra kỹ trước khi xác nhận."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"4. Khả năng tương thích"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Tính năng và khả năng tương thích phụ thuộc vào phiên bản Zalo Clean, phiên bản Windows và tình trạng dữ liệu trên thiết bị."}</p>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Các bản thử nghiệm có thể còn hạn chế hoặc được điều chỉnh trong những phiên bản tiếp theo."}</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-headline-sm font-semibold md:text-headline-md">{"5. Liên hệ"}</h2>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{"Mọi thắc mắc vui lòng gửi tới "}<strong><a href="mailto:contact@zaloclean.com" className="break-words text-primary underline underline-offset-4">{"contact@zaloclean.com"}</a></strong>{"."}</p>
      </section>
    </PolicyPage>
  );
}
