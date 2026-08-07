import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import "./style.css";

// Estruturas de dados centralizadas para renderização dinâmica
const footerNavSections = [
  {
    title: "Institucional",
    links: [
      { label: "Sobre nós", href: "#" },
      { label: "Trabalhe Conosco", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Imprensa", href: "#" },
      { label: "Sustentabilidade", href: "#" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Central de ajuda", href: "#" },
      { label: "Meus pedidos", href: "#" },
      { label: "Devoluções", href: "#" },
      { label: "Fale Conosco", href: "#" },
      { label: "Reclamações", href: "#" },
    ],
  },
  {
    title: "Políticas",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Segurança", href: "#" },
      { label: "Acessibilidade", href: "#" },
    ],
  },
];

const paymentMethods = ["Visa", "Master", "Elo", "PIX", "Boleto", "AmEx"];
const certificates = ["SSL", "PCI DSS", "Reclame Aqui"];

export default function Footer() {
  return (
    <footer>
      <article className="footer-article">
        <section className="content">
          <div className="content-title">
            <h3>ShopTech</h3>
            <p>
              Sua loja favorita para encontrar as melhores ofertas do Brasil.
            </p>
            <div className="links-title-footer">
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsYoutube />
              </a>
            </div>
          </div>

          {/* Renderização dinâmica dos blocos de links */}
          {footerNavSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="list-links">
              <h4>{section.title}</h4>
              {section.links.map((link, linkIdx) => (
                <a key={linkIdx} href={link.href} className="link-footer">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </section>
        <hr />
        <section className="payment-certificates">
          <div className="payment">
            <h4>Formas de pagamento</h4>
            {paymentMethods.map((method, idx) => (
              <span key={idx} className="methods">{method}</span>
            ))}
          </div>

          <div className="certificates">
            <h4>Certificados</h4>
            {certificates.map((cert, idx) => (
              <span key={idx} className="cert">{cert}</span>
            ))}
          </div>
        </section>
        <hr />
        <section className="all-rights-reserved">
          <div>
            <p>
              © 2025 ShopBR. Todos os direitos reservados. CNPJ
              00.000.000/0001-00
            </p>
          </div>
          <div>
            <p>ShopBR Comércio Digital Ltda. — São Paulo, SP</p>
          </div>
        </section>
      </article>
    </footer>
  );
}
