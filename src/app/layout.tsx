import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zalo Clean — Dọn Zalo PC gọn hơn, an toàn hơn",
  description: "Quét, xem trước và dọn dữ liệu Zalo PC ngay trên máy tính Windows của bạn.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
