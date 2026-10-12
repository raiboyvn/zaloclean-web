import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/30 text-on-surface-variant">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 pb-8 border-b border-outline-variant/30">
          {/* Cột 1: Bảo mật & Pháp lý (Mép trái) */}
          <div className="text-left">
            <div className="text-xs font-bold text-on-surface uppercase tracking-wider mb-4">
              Bảo mật &amp; Pháp lý
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-left">
              <li>
                <Link className="hover:text-primary transition-colors" href="/privacy">
                  Chính sách quyền riêng tư
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/terms">
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/disclaimer">
                  Tuyên bố miễn trừ
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 2: Hỗ trợ khách hàng (Mép phải) */}
          <div className="text-left">
            <div className="text-xs font-bold text-on-surface uppercase tracking-wider mb-4">
              Hỗ trợ khách hàng
            </div>
            <div className="text-xs sm:text-sm text-left">
              <a
                className="font-semibold text-primary hover:underline break-all inline-flex items-center gap-1.5"
                href="mailto:contact@zaloclean.com"
                dangerouslySetInnerHTML={{
                  __html: `<span class="material-symbols-outlined text-[16px]">mail</span><!--email_off-->contact@zaloclean.com<!--/email_off-->`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 text-center text-xs sm:text-sm text-outline">
          © 2026 Zalo Clean. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
