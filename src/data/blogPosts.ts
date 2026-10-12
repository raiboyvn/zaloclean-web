export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
      list?: string[];
      callout?: {
        type: "tip" | "warning" | "note";
        text: string;
      };
    }[];
  };
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "zalo-pc-day-bo-nho-nguyen-nhan-cach-don-an-toan",
    title: "Zalo PC đầy bộ nhớ: nguyên nhân và cách dọn an toàn",
    description:
      "Tìm hiểu nguyên nhân khiến Zalo PC chiếm hàng chục GB ổ đĩa C và hướng dẫn cách quét, xem trước dữ liệu media để dọn dẹp an toàn trên máy tính Windows.",
    publishedAt: "2026-10-12",
    readingTime: "4 phút",
    category: "Tối ưu dung lượng",
    content: {
      lead:
        "Nếu bạn sử dụng Zalo PC hàng ngày cho công việc, ổ đĩa C của máy tính rất dễ bị đầy dần mà không rõ lý do. Nhiều máy tính sau 6 tháng đến 1 năm làm việc ghi nhận Zalo chiếm từ vài GB đến hàng chục GB dung lượng.",
      sections: [
        {
          heading: "1. Vì sao Zalo PC chiếm nhiều dung lượng ổ đĩa?",
          paragraphs: [
            "Khác với Zalo trên điện thoại thường lưu trữ trên máy chủ hoặc thẻ nhớ, phiên bản Zalo PC trên hệ điều hành Windows mặc định tải và lưu cục bộ rất nhiều dữ liệu đa phương tiện trong quá trình trò chuyện.",
            "Các thành phần chính gây đầy ổ đĩa bao gồm:",
          ],
          list: [
            "Hình ảnh gửi và nhận trong các hội thoại cá nhân và nhóm làm việc.",
            "Video và tin nhắn thoại (âm thanh) được tải tự động hoặc thủ công.",
            "Bộ nhớ đệm (cache) phát sinh trong quá trình hiển thị ứng dụng.",
          ],
        },
        {
          heading: "2. Những rủi ro khi tự xóa thủ công trong thư mục Windows",
          paragraphs: [
            "Nhiều người dùng tìm kiếm thư mục dữ liệu của Zalo trong AppData để xóa hàng loạt. Tuy nhiên, việc tự ý can thiệp vào các thư mục cấu trúc hệ thống của Zalo có thể dẫn đến lỗi khởi động ứng dụng hoặc mất mát dữ liệu ngoài ý muốn.",
            "Thay vì can thiệp thủ công thiếu kiểm soát, bạn nên sử dụng công cụ chuyên dụng quét và phân loại rõ ràng từng nhóm dữ liệu trước khi quyết định.",
          ],
          callout: {
            type: "warning",
            text:
              "Lưu ý: Không tự ý xóa các tệp cơ sở dữ liệu hệ thống trong AppData vì có thể làm hỏng phiên đăng nhập Zalo PC.",
          },
        },
        {
          heading: "3. Cách kiểm tra và dọn dẹp an toàn với Zalo Clean",
          paragraphs: [
            "Ứng dụng Zalo Clean trên Windows được thiết kế để xử lý dữ liệu media trực tiếp trên máy tính mà không can thiệp vào nội dung tin nhắn hay đăng nhập tài khoản.",
            "Quy trình xử lý an toàn gồm 3 bước minh bạch:",
          ],
          list: [
            "Bước 1: Quét kiểm tra dung lượng media (ảnh, video, âm thanh) và kiểm tra dung lượng bộ nhớ cache trên máy.",
            "Bước 2: Xem trước kết quả theo nhóm dữ liệu và chọn mốc thời gian giữ lại (ví dụ: giữ lại 90 ngày, 6 tháng hay 1 năm gần nhất).",
            "Bước 3: Chọn phương thức xử lý phù hợp với nhu cầu sử dụng.",
          ],
        },
        {
          heading: "4. Lựa chọn giữa Dọn nhanh và Dọn an toàn",
          paragraphs: [
            "Zalo Clean cung cấp hai phương thức dọn media rõ ràng:",
            "Phương thức 1 — Dọn nhanh (Khuyên dùng): Xóa vĩnh viễn các tệp ảnh, video, âm thanh đã chọn ngoài mốc thời gian giữ lại, giải phóng dung lượng ổ C ngay lập tức.",
            "Phương thức 2 — Dọn an toàn: Chuyển các tệp media đã chọn vào Thùng rác (Recycle Bin) của Windows, giúp bạn có cơ hội kiểm tra lại và khôi phục khi cần thiết.",
          ],
          callout: {
            type: "tip",
            text:
              "Mẹo: Bạn nên tải bản Zalo Clean để quét và xem trước dung lượng miễn phí trước khi quyết định dọn dẹp.",
          },
        },
      ],
    },
    relatedSlugs: [
      "cache-zalo-pc-la-gi-co-nen-xoa-khong",
      "don-nhanh-va-don-an-toan-khac-nhau-the-nao",
    ],
  },
  {
    slug: "cache-zalo-pc-la-gi-co-nen-xoa-khong",
    title: "Cache Zalo PC là gì? Có nên xóa không?",
    description:
      "Giải thích bản chất bộ nhớ đệm (cache) Zalo PC, sự khác biệt giữa cache và media đã tải về máy, và cách kiểm tra dung lượng cache an toàn.",
    publishedAt: "2026-10-12",
    readingTime: "3 phút",
    category: "Kiến thức kỹ thuật",
    content: {
      lead:
        "Khi tìm hiểu về cách giải phóng dung lượng cho máy tính Windows, người dùng thường nghe nhắc đến thuật ngữ 'Cache Zalo'. Vậy cache thực chất là gì, và nó khác gì với ảnh hay video bạn nhận được?",
      sections: [
        {
          heading: "1. Bộ nhớ cache Zalo PC là gì?",
          paragraphs: [
            "Cache (bộ nhớ đệm) là tập hợp các tệp tạm thời mà ứng dụng Zalo PC lưu trữ cục bộ trên máy tính. Mục đích của cache là giúp ứng dụng tải giao diện nhanh hơn, giảm thời gian nạp lại các tài nguyên tĩnh mỗi khi bạn chuyển đổi giữa các màn hình.",
            "Cache khác hoàn toàn với các tệp media nguyên bản (hình ảnh, video chất lượng gốc, âm thanh) mà bạn tải về lưu trữ trong máy.",
          ],
        },
        {
          heading: "2. Có nên tìm cách can thiệp vào cache không?",
          paragraphs: [
            "Trên hệ điều hành Windows, cache sẽ tự động tái tạo khi bạn tiếp tục sử dụng ứng dụng. Việc người dùng cố gắng tìm cách can thiệp thủ công vào các tệp cache phức tạp thường không đem lại hiệu quả lâu dài bằng việc xử lý các tệp media cũ có dung lượng lớn.",
            "Phần lớn dung lượng ổ C bị chiếm dụng thực chất đến từ kho ảnh, video và tệp âm thanh tích lũy qua nhiều tháng làm việc.",
          ],
          callout: {
            type: "note",
            text:
              "Khả năng hiện tại: Zalo Clean hỗ trợ kiểm tra dung lượng cache trên máy tính để bạn nắm rõ tổng quan, đồng thời tập trung quét và dọn các nhóm media (ảnh, video, âm thanh) theo mốc thời gian chọn lọc.",
          },
        },
        {
          heading: "3. Giải pháp tối ưu dung lượng thực tế",
          paragraphs: [
            "Để giải phóng dung lượng đĩa thực chất, cách tiếp cận an toàn nhất là:",
          ],
          list: [
            "Kiểm tra tổng quan dung lượng media và cache hiện có trên máy.",
            "Đặt mốc thời gian giữ lại media quan trọng gần đây (ví dụ: 6 tháng hoặc 1 năm).",
            "Dọn dẹp các tệp media cũ không còn nhu cầu sử dụng thông qua chế độ Dọn nhanh hoặc Dọn an toàn.",
          ],
        },
      ],
    },
    relatedSlugs: [
      "zalo-pc-day-bo-nho-nguyen-nhan-cach-don-an-toan",
      "don-nhanh-va-don-an-toan-khac-nhau-the-nao",
    ],
  },
  {
    slug: "smartscreen-la-gi-cach-xu-ly-khi-tai-zalo-clean",
    title: "SmartScreen là gì? Cách xử lý khi tải Zalo Clean",
    description:
      "Hiểu đúng về cảnh báo Microsoft Defender SmartScreen khi tải ứng dụng Windows chưa có chữ ký số và 3 bước xử lý an toàn từ zaloclean.com.",
    publishedAt: "2026-10-12",
    readingTime: "4 phút",
    category: "Bảo mật & Cài đặt",
    content: {
      lead:
        "Khi tải bộ cài đặt Zalo Clean trên Windows 10 hoặc Windows 11, bạn có thể bắt gặp màn hình màu xanh với thông báo 'Windows protected your PC'. Đây là cơ chế bảo vệ quen thuộc của hệ điều hành Windows.",
      sections: [
        {
          heading: "1. Microsoft Defender SmartScreen là gì?",
          paragraphs: [
            "Microsoft Defender SmartScreen là tính năng bảo mật tích hợp sẵn trong Windows nhằm ngăn chặn các tệp thực thi chưa rõ nguồn gốc hoặc chưa có đủ độ uy tín (reputation) tải xuống trên hệ thống của Microsoft.",
            "Hiện tại, Zalo Clean đang ở phiên bản beta và chưa trang bị chứng chỉ chữ ký số doanh nghiệp (EV Code Signing). Do đó, Windows sẽ hiển thị cảnh báo để nhắc nhở người dùng tự kiểm tra nguồn gốc trước khi chạy.",
          ],
          callout: {
            type: "note",
            text:
              "Lưu ý: Cảnh báo SmartScreen không đồng nghĩa với việc ứng dụng có mã độc, mà là thông báo ứng dụng chưa được nhận diện chữ ký số thương mại.",
          },
        },
        {
          heading: "2. Ba bước xử lý an toàn khi gặp cảnh báo",
          paragraphs: [
            "Để đảm bảo an toàn tuyệt đối cho máy tính của bạn, hãy tuân thủ 3 bước tiêu chuẩn:",
          ],
          list: [
            "Bước 1: Đảm bảo bạn tải ứng dụng từ website chính thức zaloclean.com, trỏ tới kho phát hành chính thức của dự án.",
            "Bước 2: Nếu tin tưởng nguồn tải, bấm vào dòng chữ 'More info' (Thông tin thêm), sau đó chọn nút 'Run anyway' (Vẫn chạy) khi Windows hiển thị tùy chọn này.",
            "Bước 3: Nếu Windows hoặc phần mềm diệt virus trên máy cảnh báo phát hiện mã độc cụ thể, tuyệt đối không tiếp tục cài đặt.",
          ],
        },
        {
          heading: "3. Nguyên tắc an toàn: Không tắt Windows Defender",
          paragraphs: [
            "Bạn không bao giờ cần phải tắt Windows Defender hay vô hiệu hóa SmartScreen trong cài đặt hệ thống để cài đặt Zalo Clean.",
            "SmartScreen là lớp bảo vệ hữu ích của Windows. Việc chỉ cho phép chạy từng ứng dụng cụ thể khi đã xác minh nguồn gốc giúp máy tính của bạn luôn duy trì trạng thái an toàn tối đa.",
          ],
          callout: {
            type: "warning",
            text:
              "Không tìm cách can thiệp sâu vào hệ thống hay vô hiệu hóa tính năng bảo mật của Windows nếu hệ thống chặn hoàn toàn mà không cung cấp tùy chọn Run anyway.",
          },
        },
      ],
    },
    relatedSlugs: [
      "zalo-pc-day-bo-nho-nguyen-nhan-cach-don-an-toan",
      "don-nhanh-va-don-an-toan-khac-nhau-the-nao",
    ],
  },
  {
    slug: "don-nhanh-va-don-an-toan-khac-nhau-the-nao",
    title: "Dọn nhanh và Dọn an toàn trong Zalo Clean khác nhau thế nào?",
    description:
      "So sánh chi tiết 2 phương thức dọn media trong Zalo Clean: Dọn nhanh (xóa vĩnh viễn, khuyên dùng) và Dọn an toàn (chuyển vào Thùng rác Windows).",
    publishedAt: "2026-10-12",
    readingTime: "4 phút",
    category: "Tính năng sản phẩm",
    content: {
      lead:
        "Khi thực hiện dọn dẹp dữ liệu media Zalo PC trên Zalo Clean, ứng dụng cung cấp hai phương thức xử lý riêng biệt: Dọn nhanh và Dọn an toàn. Hiểu rõ sự khác biệt giữa hai chế độ này giúp bạn lựa chọn phương án tối ưu nhất.",
      sections: [
        {
          heading: "1. Phương thức 1: Dọn nhanh (Khuyên dùng)",
          paragraphs: [
            "Dọn nhanh là chế độ mặc định và được khuyên dùng trong Zalo Clean dành cho những trường hợp bạn đã xem trước và chắc chắn không cần giữ lại các tệp media cũ.",
            "Đặc điểm chính của Dọn nhanh:",
          ],
          list: [
            "Cơ chế: Xóa trực tiếp các tệp hình ảnh, video và âm thanh đã chọn theo mốc thời gian lọc.",
            "Tác động dung lượng: Giải phóng dung lượng ổ cứng ngay lập tức sau khi hoàn tất.",
            "Khả năng khôi phục: Tệp không chuyển qua Thùng rác Windows, do đó không thể phục hồi từ Thùng rác sau khi đã dọn.",
          ],
        },
        {
          heading: "2. Phương thức 2: Dọn an toàn (Có thể khôi phục)",
          paragraphs: [
            "Dọn an toàn là lựa chọn thận trọng dành cho người dùng muốn có thêm cơ hội kiểm tra lại các tệp sau khi dọn.",
            "Đặc điểm chính của Dọn an toàn:",
          ],
          list: [
            "Cơ chế: Chuyển các tệp media đã chọn vào Thùng rác (Recycle Bin) của hệ điều hành Windows thay vì xóa vĩnh viễn.",
            "Tác động dung lượng: Dung lượng ổ cứng chưa được giải phóng ngay; dung lượng chỉ thực sự được giải phóng khi bạn làm trống Thùng rác.",
            "Khả năng khôi phục: Bạn có thể mở Thùng rác và khôi phục lại bất kỳ tệp nào trước khi thực hiện dọn dẹp Thùng rác.",
          ],
          callout: {
            type: "tip",
            text:
              "Tóm tắt: Chọn Dọn nhanh khi bạn cần lấy lại dung lượng ổ C ngay lập tức; chọn Dọn an toàn khi bạn muốn giữ bước kiểm tra dự phòng trong Thùng rác.",
          },
        },
        {
          heading: "3. Điểm chung của cả hai phương thức",
          paragraphs: [
            "Dù chọn Dọn nhanh hay Dọn an toàn, Zalo Clean đều tuân thủ các nguyên tắc bảo vệ dữ liệu nghiêm ngặt:",
          ],
          list: [
            "Chỉ tác động lên các nhóm media (ảnh, video, âm thanh) và mốc thời gian bạn đã chủ động tích chọn.",
            "Quá trình quét và dọn diễn ra 100% cục bộ trên máy tính, không gửi dữ liệu lên máy chủ.",
            "Không đọc nội dung tin nhắn văn bản, danh bạ hay can thiệp vào tài khoản Zalo của bạn.",
          ],
        },
      ],
    },
    relatedSlugs: [
      "zalo-pc-day-bo-nho-nguyen-nhan-cach-don-an-toan",
      "cache-zalo-pc-la-gi-co-nen-xoa-khong",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
