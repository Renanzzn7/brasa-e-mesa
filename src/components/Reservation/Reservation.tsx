import "./Reservation.css";

function Reservation() {
  return (
    <section className="reservation" id="reserva">
      <div className="reservationContent">
        <p className="reservationSubtitle">RESERVE SUA MESA</p>

        <h2>
          Seu próximo momento
          <span> começa aqui.</span>
        </h2>

        <p className="reservationDescription">
          Escolha a data, o horário e a quantidade de pessoas.
          Nós cuidamos do resto para você aproveitar a experiência.
        </p>

        <form className="reservationForm">
          <div className="formGroup">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Seu nome"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="people">Pessoas</label>
            <select id="people">
              <option value="">Quantidade</option>
              <option value="1">1 pessoa</option>
              <option value="2">2 pessoas</option>
              <option value="3">3 pessoas</option>
              <option value="4">4 pessoas</option>
              <option value="5">5 pessoas</option>
              <option value="6">6 pessoas</option>
              <option value="7">7 pessoas</option>
              <option value="8">8 pessoas</option>
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="date">Data</label>
            <input type="date" id="date" />
          </div>

          <div className="formGroup">
            <label htmlFor="time">Horário</label>
            <input type="time" id="time" />
          </div>

          <button type="submit">
            Solicitar reserva
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;