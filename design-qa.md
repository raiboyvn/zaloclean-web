# Design QA — ảnh Zalo Clean beta.3 trong hero

## Bằng chứng

- Source visual truth: `C:\Users\Hi\Documents\zaloclean-web\public\images\zalo-clean-beta3.png`
- Source: 1086 × 713 px, ảnh chụp trực tiếp theo Windows visible frame bounds, không có desktop hoặc PowerShell.
- Implementation desktop: `C:\Users\Hi\AppData\Local\Temp\zaloclean-web-beta3-desktop.png`
- Implementation mobile: `C:\Users\Hi\AppData\Local\Temp\zaloclean-web-beta3-mobile.png`
- Viewport yêu cầu: 1440 × 1000 và 390 × 844 CSS px; ảnh browser thực tế: 1418 × 990 và 375 × 812 px do phần chrome/scrollbar của in-app browser.
- Device scale factor: 1; không cần density normalization.
- State: homepage hero, ảnh beta.3 đã tải xong.

## So sánh

- Full view: screenshot thật giữ nguyên nội dung, tỉ lệ 1086:713 và Windows chrome; khung web chỉ thêm viền, bo góc và shadow nhẹ.
- Focused region: title bar, menu Windows, logo, CTA “Quét Zalo” và artwork phía phải đều rõ, không bị crop hoặc kéo giãn.
- Desktop: ảnh hiển thị trong khung tối đa 980 px, giữ đúng tỉ lệ.
- Mobile: ảnh co theo container còn 329 × 213 CSS px; `scrollWidth` bằng `clientWidth`, không tràn ngang.
- Typography, spacing, colors và copy ngoài vùng preview không thay đổi.
- Image quality: đúng asset beta.3, PNG sạch, `object-fit: contain`; không có placeholder hoặc mockup HTML còn lại.

## Kiểm tra

- Điều hướng trang và hai CTA hero vẫn giữ nguyên.
- Ảnh hoàn tất tải (`complete: true`) và có kích thước tự nhiên hợp lệ.
- Không có lỗi render được ghi nhận khi mở desktop/mobile.
- Lint: passed.
- Production build: passed.

## Findings

- Không có lỗi P0, P1 hoặc P2.
- Không cần focused crop bổ sung vì toàn bộ giao diện app đọc được trong source gốc và khung desktop; bản mobile chủ ý thu nhỏ toàn ảnh để không cắt mất nội dung.

## Comparison history

- Lần đầu: ảnh chụp theo `GetWindowRect` còn lộ viền desktop vài pixel ở mép trái/dưới.
- Fix: chụp lại theo `DWMWA_EXTENDED_FRAME_BOUNDS` thành ảnh 1086 × 713 px sạch.
- Post-fix: desktop và mobile đều giữ đúng toàn bộ khung app, không crop, không méo, không overflow.

final result: passed
