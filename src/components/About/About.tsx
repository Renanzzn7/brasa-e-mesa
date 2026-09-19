import "./About.css";

function About() {
  return (
    <section className="about" id="sobre">
      <div className="aboutImage">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80"
          alt="Ambiente do restaurante Brasa & Mesa"
        />
      </div>

      <div className="aboutContent">
        <p className="aboutSubtitle">SOBRE O BRASA & MESA</p>

        <h2>
          Mais que uma refeição.
          <span> Uma experiência.</span>
        </h2>

        <p>
          No Brasa & Mesa, acreditamos que uma boa refeição vai muito além
          do prato. É sobre reunir pessoas, compartilhar histórias e criar
          momentos que ficam na memória.
        </p>

        <p>
          Nossa cozinha combina ingredientes selecionados, técnicas
          artesanais e o sabor marcante da brasa para criar uma experiência
          única em cada visita.
        </p>

        <div className="aboutStats">
          <div>
            <strong>10+</strong>
            <span>Anos de experiência</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>Pratos no cardápio</span>
          </div>

          <div>
            <strong>5k+</strong>
            <span>Clientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;