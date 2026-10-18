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
      "Tìm hiểu nguyên nhân Zalo PC làm đầy ổ C và hướng dẫn cách quét, xem trước dữ liệu media để dọn dung lượng an toàn trên máy tính Windows.",
    publishedAt: "2026-10-12",
    readingTime: "4 phút",
    category: "Tối ưu dung lượng",
    content: {
      lead:
        "Khi sử dụng Zalo PC hàng ngày cho công việc, ổ đĩa C của máy tính thường bị đầy dần mà người dùng không rõ lý do. Nhiều máy tính sau vài tháng làm việc ghi nhận Zalo chiếm từ vài GB đến hàng chục GB bộ nhớ, khiến hệ điều hành cảnh báo dung lượng thấp và hoạt động chậm chạp.",
      sections: [
        {
          heading: "1. Vì sao Zalo PC chiếm nhiều dung lượng ổ đĩa?",
          paragraphs: [
            "Khác với Zalo trên điện thoại có cơ chế lưu trữ linh hoạt, ứng dụng Zalo PC trên hệ điều hành Windows mặc định tải và lưu trữ dữ liệu cục bộ vào thư mục người dùng trên ổ C (thường nằm trong đường dẫn ẩn AppData). Mỗi bức ảnh, video hay tệp tài liệu được gửi và nhận qua các cuộc trò chuyện đều được lưu trực tiếp xuống máy tính.",
            "Theo thời gian, lượng dữ liệu này tích lũy ngày càng nhiều mà không tự động giải phóng. Để xử lý hiệu quả, người dùng cần phân biệt rõ hai thành phần chính gây tốn bộ nhớ:",
          ],
          list: [
            "Tệp đa phương tiện (Media): Gồm hình ảnh, video và tin nhắn thoại gửi nhận trong các nhóm công việc. Đây là thành phần chiếm phần lớn dung lượng ổ đĩa (thường từ 80% đến hơn 90%).",
            "Bộ nhớ đệm (Cache): Các tệp tạm phát sinh để nạp nhanh giao diện, biểu tượng cảm xúc và ảnh thu nhỏ. Phần này thường chiếm dung lượng nhỏ hơn và tự sinh lại khi sử dụng.",
          ],
        },
        {
          heading: "2. Những rủi ro khi tự xóa thủ công trong thư mục Windows",
          paragraphs: [
            "Nhiều người dùng khi thấy ổ C báo đỏ thường mở hộp thoại Run, tìm đến thư mục ZaloPC trong AppData để xóa toàn bộ tệp bên trong. Tuy nhiên, thao tác thủ công này tiềm ẩn nhiều rủi ro lớn đối với người dùng không chuyên.",
            "Bên trong thư mục ZaloPC không chỉ có ảnh hay video cũ mà còn chứa cơ sở dữ liệu lưu cấu hình, thông tin phiên đăng nhập và các khóa định danh. Nếu xóa nhầm các tệp cơ sở dữ liệu hệ thống, Zalo PC có thể bị lỗi, tự đăng xuất hoặc không thể khởi động bình thường.",
            "Ngược lại, nếu chọn cách dọn dẹp từng cuộc trò chuyện trong phần cài đặt mặc định của Zalo, bạn sẽ phải thao tác thủ công qua từng nhóm và người chat, rất tốn thời gian và khó kiểm soát tệp theo thời gian tạo.",
          ],
          callout: {
            type: "warning",
            text:
              "Cảnh báo: Tuyệt đối không tự ý xóa cả thư mục AppData\\Local\\ZaloPC vì có thể làm hỏng phiên làm việc và lỗi đồng bộ ứng dụng.",
          },
        },
        {
          heading: "3. Cách kiểm tra và dọn dẹp dữ liệu an toàn với Zalo Clean",
          paragraphs: [
            "Để giải quyết bài toán dung lượng mà vẫn đảm bảo an toàn cho máy tính, bạn có thể [tải Zalo Clean cho Windows](/download) để quét và xem trước dữ liệu media hoàn toàn miễn phí.",
            "Zalo Clean hoạt động cục bộ trực tiếp trên máy tính Windows, không can thiệp vào nội dung tin nhắn văn bản hay thông tin tài khoản. Quy trình dọn dẹp diễn ra minh bạch qua các bước:",
          ],
          list: [
            "Bước 1: Quét kiểm tra dung lượng media (ảnh, video, âm thanh) và đo lường dung lượng cache hiện có trên máy tính.",
            "Bước 2: Xem trước danh sách tệp theo từng nhóm và chủ động chọn mốc thời gian giữ lại (ví dụ: giữ lại dữ liệu trong 30 ngày, 90 ngày hoặc 1 năm gần nhất).",
            "Bước 3: Chọn phương thức xử lý phù hợp và xác nhận dọn dẹp.",
          ],
        },
        {
          heading: "4. Lựa chọn giữa Dọn nhanh và Dọn an toàn",
          paragraphs: [
            "Zalo Clean cung cấp hai phương thức dọn dẹp rõ ràng để người dùng lựa chọn tùy theo nhu cầu:",
            "1. Dọn nhanh (Khuyên dùng): Xóa trực tiếp các tệp media đã chọn ngoài mốc thời gian giữ lại, giúp giải phóng dung lượng ổ C ngay lập tức.",
            "2. Dọn an toàn: Chuyển các tệp media đã chọn vào Thùng rác (Recycle Bin) của Windows. Phương thức này giúp bạn có cơ hội kiểm tra lại và khôi phục tệp nếu cần trước khi dọn sạch Thùng rác.",
          ],
          callout: {
            type: "tip",
            text:
              "Bạn có thể truy cập trang [Tải Zalo Clean cho Windows](/download) để trải nghiệm chức năng quét và xem trước dữ liệu media miễn phí trước khi quyết định dọn dẹp.",
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
      "Tìm hiểu bản chất bộ nhớ cache Zalo PC, sự khác biệt giữa cache và media, giải đáp thắc mắc xóa cache có mất tin nhắn không và hướng dẫn dọn dung lượng an toàn.",
    publishedAt: "2026-10-12",
    readingTime: "4 phút",
    category: "Kiến thức kỹ thuật",
    content: {
      lead:
        "Khi tìm cách giải phóng dung lượng ổ C cho máy tính Windows, người dùng thường nghe nhắc đến việc 'xóa cache Zalo PC'. Vậy bộ nhớ cache thực chất là gì, việc xóa cache có làm mất tin nhắn không, và làm thế nào để dọn dẹp dung lượng Zalo một cách an toàn?",
      sections: [
        {
          heading: "1. Bản chất bộ nhớ cache Zalo PC và sự khác biệt với Media",
          paragraphs: [
            "Cache (bộ nhớ đệm) là tập hợp các tệp dữ liệu tạm thời mà Zalo PC tạo ra và lưu trên ổ C. Mục đích của cache là giúp ứng dụng phản hồi nhanh hơn, tải giao diện tức thì và không phải nạp lại các tài nguyên tĩnh mỗi khi bạn chuyển qua lại giữa các màn hình trò chuyện.",
            "Để tránh hiểu nhầm, người dùng cần phân biệt rõ giữa Cache và Media:",
          ],
          list: [
            "Bộ nhớ cache: Bao gồm hình ảnh thu nhỏ (thumbnails), biểu tượng cảm xúc, tệp đệm giao diện và dữ liệu phiên làm việc tạm thời. Kích thước cache thường dao động từ vài trăm MB đến vài GB.",
            "Tệp media gốc: Bao gồm hình ảnh chất lượng cao, video, tệp ghi âm giọng nói và tài liệu đính kèm. Đây mới chính là nguyên nhân lớn nhất khiến ổ C bị đầy sau nhiều tháng làm việc.",
          ],
        },
        {
          heading: "2. Xóa cache Zalo PC có mất tin nhắn không?",
          paragraphs: [
            "Câu trả lời là KHÔNG. Việc xóa bộ nhớ đệm cache thuần túy không làm mất lịch sử tin nhắn văn bản hay danh bạ của bạn, vì các nội dung trò chuyện được lưu trữ trong cơ sở dữ liệu riêng biệt của ứng dụng.",
            "Tuy nhiên, việc can thiệp vào cache thường không mang lại hiệu quả lâu dài. Trên hệ điều hành Windows, cache sẽ tự động tái tạo khi bạn tiếp tục mở ứng dụng và nhắn tin. Vì vậy, chỉ xóa cache sẽ không giải quyết triệt để tình trạng ổ C bị đầy dung lượng.",
          ],
          callout: {
            type: "note",
            text:
              "Lưu ý: Xóa cache không làm mất tin nhắn chữ, nhưng nếu bạn xóa nhầm file cơ sở dữ liệu trong thư mục AppData, phiên đăng nhập có thể bị lỗi.",
          },
        },
        {
          heading: "3. Rủi ro khi tự ý tìm xóa thư mục cache trong Windows",
          paragraphs: [
            "Nhiều bài hướng dẫn trên mạng khuyên người dùng mở hộp thoại Run rồi nhập %localappdata%\\ZaloPC để xóa thủ công. Mặc dù trong thư mục này có chứa cache, nhưng nó cũng chứa các tệp cấu hình quan trọng của tài khoản.",
            "Người dùng phổ thông rất khó phân biệt đâu là tệp cache có thể xóa an toàn và đâu là tệp hệ thống của Zalo. Việc xóa nhầm có thể khiến ứng dụng không mở được, mất trạng thái đăng nhập hoặc lỗi đồng bộ tin nhắn.",
          ],
        },
        {
          heading: "4. Giải pháp tối ưu dung lượng thực tế và an toàn",
          paragraphs: [
            "Để giải phóng dung lượng Zalo PC hiệu quả và bền vững, phương pháp tối ưu là giữ nguyên cơ sở dữ liệu tin nhắn, kiểm tra dung lượng cache để nắm tổng thể, và tập trung lọc dọn kho media cũ theo mốc thời gian.",
            "Ứng dụng Zalo Clean trên Windows được phát triển để thực hiện chính xác quy trình này. Bạn có thể [tải Zalo Clean cho Windows](/download) để kiểm tra dung lượng cache và quét toàn bộ ảnh, video Zalo PC trên máy tính hoàn toàn miễn phí.",
            "Với Zalo Clean, bạn xem trước được dữ liệu, chủ động chọn mốc thời gian muốn giữ lại (30 ngày, 90 ngày, 1 năm...) và chọn giữa Dọn nhanh (xóa trực tiếp giải phóng ổ C) hoặc Dọn an toàn (chuyển vào Thùng rác để kiểm tra lại).",
          ],
          callout: {
            type: "tip",
            text:
              "Bạn có thể truy cập trang [Tải Zalo Clean](/download) để kiểm tra dung lượng media và cache trên máy tính của mình bất cứ lúc nào.",
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
