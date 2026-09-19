import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="heroContent">
        <p className="heroSubtitle">EXPERIÊNCIA GASTRONÔMICA</p>

        <h1>
          Sabor que fica
          <span> na memória.</span>
        </h1>

        <p className="heroDescription">
          Uma experiência gastronômica feita para quem valoriza
          bons momentos, bons pratos e sabores marcantes.
        </p>

        <div className="heroButtons">
          <a href="#cardapio" className="primaryButton">
            Ver cardápio
          </a>

          <a href="#sobre" className="secondaryButton">
            Conheça o restaurante
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;