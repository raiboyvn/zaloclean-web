import type { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Zalo Clean — Dọn Zalo PC gọn hơn, an toàn hơn",
  description: "Tiện ích quét, xem trước và dọn dữ liệu Zalo PC trực tiếp trên máy tính Windows. Bảo vệ tin nhắn, giải phóng dung lượng ổ C.",
  alternates: {
    canonical: "https://zaloclean.com/",
  },
  openGraph: {
    title: "Zalo Clean — Dọn Zalo PC gọn hơn, an toàn hơn",
    description: "Tiện ích quét, xem trước và dọn dữ liệu Zalo PC trực tiếp trên máy tính Windows. Bản quyền trọn đời chỉ từ 29.000đ.",
    url: "https://zaloclean.com/",
    siteName: "Zalo Clean",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Zalo Clean cho Windows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zalo Clean — Dọn Zalo PC gọn hơn, an toàn hơn",
    description: "Quét và dọn dữ liệu Zalo PC trực tiếp trên máy tính Windows an toàn.",
    images: ["/images/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Zalo Clean",
      "operatingSystem": "Windows 10, Windows 11 (64-bit)",
      "applicationCategory": "UtilitiesApplication",
      "fileSize": "112MB",
      "softwareVersion": "1.0.0-beta.7",
      "downloadUrl": "https://github.com/raiboyvn/zaloclean-releases/releases/download/v1.0.0-beta.7/Zalo.Clean.Setup.1.0.0-beta.7.exe",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "VND",
        "lowPrice": "29000",
        "highPrice": "145000",
        "offerCount": "3"
      },
      "description": "Tiện ích tối ưu hóa bộ nhớ và dọn dẹp dung lượng Zalo PC trên hệ điều hành Windows, quét và dọn dữ liệu trực tiếp trên máy."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Zalo Clean có gửi dữ liệu lên mạng không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dữ liệu được quét và dọn trực tiếp trên máy, không upload dữ liệu quét lên cloud. Kết nối Internet chỉ được dùng cho license và thanh toán."
          }
        },
        {
          "@type": "Question",
          "name": "Dọn an toàn khác gì với dọn nhanh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dọn nhanh xóa vĩnh viễn ảnh, video và âm thanh đã chọn theo mốc thời gian để giải phóng dung lượng ổ đĩa ngay, không chuyển qua Thùng rác. Dọn an toàn chuyển media đã chọn vào Thùng rác Windows để bạn có thể khôi phục trước khi làm trống Thùng rác; dung lượng ổ đĩa chỉ được giải phóng khi Thùng rác được làm trống."
          }
        },
        {
          "@type": "Question",
          "name": "License có cần gia hạn không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Không. License trọn đời theo gói 1, 3 hoặc 5 thiết bị bạn chọn khi mua."
          }
        },
        {
          "@type": "Question",
          "name": "Sau khi kích hoạt có dùng offline được không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Có. Sau khi kích hoạt thành công, Zalo Clean có thể tiếp tục dùng offline."
          }
        },
        {
          "@type": "Question",
          "name": "Mua license ở đâu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mua và kích hoạt trực tiếp trong ứng dụng. Tải Zalo Clean, mở mục kích hoạt, chọn Mua license, rồi chọn gói thiết bị và làm theo hướng dẫn thanh toán."
          }
        },
        {
          "@type": "Question",
          "name": "Không thấy email license thì làm gì?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kiểm tra Thư rác / Spam / Quảng cáo / Promotions và đánh dấu Không phải thư rác nếu cần. Nếu đã thanh toán nhưng kích hoạt chưa hoàn tất, chọn Thử kích hoạt lại trong ứng dụng."
          }
        }
      ]
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
