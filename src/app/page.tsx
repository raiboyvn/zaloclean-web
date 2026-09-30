import Image from "next/image";

const downloadHref = "https://github.com/raiboyvn/zaloclean-releases/releases/download/v1.0.0-beta.4/Zalo.Clean.Setup.1.0.0-beta.4.exe";

const benefits = [
  ["Quét nhanh", "Nhanh chóng tìm ra dữ liệu Zalo PC đang chiếm nhiều dung lượng."],
  ["Xem trước trước khi dọn", "Bạn luôn biết rõ từng nhóm dữ liệu trước khi quyết định dọn."],
  ["Chủ động cách dọn", "Chọn dọn nhanh hoặc đưa tệp vào Thùng rác để dễ dàng khôi phục."],
];

const prices = [
  { devices: "1 thiết bị", price: "29.000đ" },
  { devices: "3 thiết bị", price: "87.000đ", featured: true },
  { devices: "5 thiết bị", price: "145.000đ" },
];

const faqs = [
  ["Zalo Clean có gửi dữ liệu của tôi lên mạng không?", "Không. Dữ liệu được quét và xử lý ngay trên máy tính Windows của bạn. Zalo Clean không tải tệp cá nhân lên cloud."],
  ["Dọn an toàn khác gì với dọn nhanh?", "Dọn an toàn chuyển tệp vào Thùng rác để bạn có thể khôi phục. Dọn nhanh xóa trực tiếp dữ liệu đã chọn để giải phóng dung lượng ngay."],
  ["License có cần gia hạn không?", "Không. Đây là license trọn đời theo số lượng thiết bị bạn chọn."],
  ["Sau khi kích hoạt có dùng offline được không?", "Có. Sau khi kích hoạt thành công, Zalo Clean có thể tiếp tục dùng offline."],
];

function Button({ children, href, secondary = false }: { children: React.ReactNode; href: string; secondary?: boolean }) {
  const className = secondary ? "button button-secondary" : "button";
  return <a className={className} href={href}>{children}</a>;
}

function AppPreview() {
  return (
    <figure className="app-preview">
      <Image
        className="app-screenshot"
        src="/images/zalo-clean-beta3.png"
        alt="Giao diện thật của Zalo Clean beta.4 trên Windows"
        width={1086}
        height={713}
        priority
        sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1100px) calc(100vw - 64px), 980px"
      />
    </figure>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#dau-trang" aria-label="Zalo Clean - đầu trang">Zalo Clean</a>
        <nav aria-label="Điều hướng chính"><a href="#bang-gia">Bảng giá</a><a href="#an-toan">An toàn</a><a href="#hoi-dap">Hỏi đáp</a></nav>
        <Button href={downloadHref}>Tải ứng dụng</Button>
      </header>

      <section className="hero" id="dau-trang">
        <div className="hero-glow" />
        <p className="eyebrow">ZALO CLEAN DÀNH CHO WINDOWS</p>
        <h1>Dọn Zalo PC gọn hơn.<br />An toàn hơn.</h1>
        <p className="lead">Quét, xem trước và dọn dữ liệu Zalo PC chỉ trong vài phút.</p>
        <div className="button-row"><Button href={downloadHref}>Tải Zalo Clean</Button><Button href="#bang-gia" secondary>Xem bảng giá</Button></div>
        <p className="windows-note">Dành cho Windows</p>
        <p className="download-meta">Phiên bản: 1.0.0-beta.4 <span>•</span> Windows x64 <span>•</span> ~112 MB</p>
        <AppPreview />
      </section>

      <section className="section benefits" aria-labelledby="loi-ich-title">
        <div className="section-heading centered"><h2 id="loi-ich-title">Dọn dẹp rõ ràng, không gây lo lắng.</h2></div>
        <div className="three-grid">{benefits.map(([title, body]) => <article className="soft-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section workflow" aria-labelledby="quy-trinh-title">
        <div className="workflow-copy"><p className="eyebrow">QUY TRÌNH RÕ RÀNG</p><h2 id="quy-trinh-title">Quét → Xem trước → Dọn</h2><p>Mọi bước đều đơn giản và có thể xem lại trước khi bạn quyết định dọn.</p>
          <ol><li><b>01</b> Quét dung lượng đang chiếm</li><li><b>02</b> Xem trước theo từng nhóm dữ liệu</li><li><b>03</b> Chọn dọn nhanh hoặc dọn an toàn</li></ol>
        </div>
        <div className="workflow-panel"><div><strong>Đang quét dữ liệu Zalo</strong><b>100%</b></div><div><strong>2,4 GB đã sẵn sàng để xem trước</strong><span>Ảnh, video, tệp tạm và cache</span></div></div>
      </section>

      <section className="section compare" aria-labelledby="compare-title">
        <div className="section-heading centered"><h2 id="compare-title">Bạn chọn cách dọn phù hợp với mình.</h2><p>Cả hai lựa chọn đều minh bạch về những dữ liệu được dọn.</p></div>
        <div className="two-grid">
          <article className="mode-card"><span className="mode-label">NHANH GỌN</span><h3>Dọn nhanh</h3><p>Xóa trực tiếp dữ liệu bạn đã chọn để giải phóng dung lượng ngay.</p><strong>Phù hợp khi bạn chắc chắn về lựa chọn của mình.</strong></article>
          <article className="mode-card recommended"><span className="mode-label">KHUYẾN NGHỊ</span><h3>Dọn an toàn</h3><p>Chuyển tệp vào Thùng rác để bạn vẫn có thể khôi phục khi cần.</p><strong>Lựa chọn phù hợp cho lần dọn đầu tiên.</strong></article>
        </div>
      </section>

      <section className="section pricing" id="bang-gia" aria-labelledby="pricing-title">
        <div className="section-heading centered"><p className="eyebrow">LICENSE TRỌN ĐỜI</p><h2 id="pricing-title">Một lần mua. Dùng mãi mãi.</h2><p>Kích hoạt một lần và sử dụng offline sau đó.</p></div>
        <div className="pricing-grid">{prices.map((item) => <article className={item.featured ? "price-card featured" : "price-card"} key={item.devices}>{item.featured && <span className="popular">Phổ biến nhất</span>}<h3>{item.devices}</h3><p className="price">{item.price}</p><p>License trọn đời</p><a href="#thanh-toan">Chọn gói {item.devices.replace(" thiết bị", "")}</a></article>)}</div>
        <p className="payment-note" id="thanh-toan">Thanh toán trực tuyến đang được hoàn thiện.</p>
      </section>

      <section className="section trust" id="an-toan" aria-labelledby="trust-title">
        <div className="section-heading centered inverse"><p className="eyebrow">RIÊNG TƯ LÀ MẶC ĐỊNH</p><h2 id="trust-title">Dữ liệu Zalo của bạn luôn ở lại trên máy tính.</h2><span className="pill">Dành cho Windows</span></div>
        <div className="three-grid">
          <article className="trust-card"><span>01</span><h3>Dữ liệu xử lý trên máy</h3><p>Zalo Clean xử lý dữ liệu ngay trên Windows của bạn.</p></article>
          <article className="trust-card"><span>02</span><h3>Không tải file lên cloud</h3><p>Không có bản sao dữ liệu quét nào được gửi ra ngoài.</p></article>
          <article className="trust-card"><span>03</span><h3>License dùng offline sau kích hoạt</h3><p>Sau khi kích hoạt, license vẫn có thể dùng khi không có mạng.</p></article>
        </div>
      </section>

      <section className="section guide" id="huong-dan" aria-labelledby="guide-title">
        <div className="section-heading centered"><h2 id="guide-title">Bắt đầu chỉ với 3 bước.</h2></div>
        <div className="three-grid steps"><article><span>01</span><h3>Tải xuống</h3><p>Tải ứng dụng và cài đặt trong vài phút.</p></article><article><span>02</span><h3>Quét</h3><p>Quét nhanh để xem dữ liệu nào đang chiếm dung lượng.</p></article><article><span>03</span><h3>Dọn</h3><p>Chọn dọn nhanh hoặc dọn an toàn theo nhu cầu.</p></article></div>
      </section>

      <section className="section faq" id="hoi-dap" aria-labelledby="faq-title">
        <div className="section-heading centered"><h2 id="faq-title">Câu hỏi thường gặp</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="section final-cta">
        <p className="eyebrow">SẴN SÀNG CHO MỘT CHIẾC MÁY GỌN HƠN?</p><h2>Dọn Zalo PC nhẹ nhàng hơn,<br />ngay hôm nay.</h2><p>Quét trước, xem trước, rồi mới dọn — theo cách bạn thấy yên tâm.</p><div className="button-row"><Button href={downloadHref}>Tải Zalo Clean</Button><Button href="#bang-gia" secondary>Mua license</Button></div>
      </section>

      <footer><div><a className="brand footer-brand" href="#dau-trang">Zalo Clean</a><p>Tiện ích dọn dữ liệu Zalo PC đơn giản, riêng tư.</p></div><div className="footer-links"><a href={downloadHref}>Tải xuống</a><a href="#bang-gia">Bảng giá</a><a href="#huong-dan">Hướng dẫn</a><a href="#an-toan">Quyền riêng tư</a><a href="#hoi-dap">Hỗ trợ</a></div><p className="copyright">© 2026 Zalo Clean. Mọi quyền được bảo lưu.</p></footer>
    </main>
  );
}
