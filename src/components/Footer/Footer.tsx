import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footerMain">
        <div className="footerBrand">
          <div className="footerLogo">
            <span>BRASA</span> & MESA
          </div>

          <p>
            Sabor, qualidade e bons momentos em um só lugar.
          </p>
        </div>

        <div className="footerColumn">
          <h3>Contato</h3>

          <p>Rua das Palmeiras, 120</p>
          <p>Sertãozinho - SP</p>
          <p>(16) 99999-9999</p>
          <p>contato@brasaemesa.com</p>
        </div>

        <div className="footerColumn">
          <h3>Horário</h3>

          <p>Terça a Quinta</p>
          <p>18:00 às 23:00</p>

          <br />

          <p>Sexta a Domingo</p>
          <p>18:00 às 00:00</p>
        </div>

        <div className="footerColumn">
          <h3>Navegação</h3>

          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#reserva">Reservar mesa</a>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 Brasa & Mesa. Todos os direitos reservados.</p>

        <p>Feito com React + TypeScript</p>
      </div>
    </footer>
  );
}

export default Footer;