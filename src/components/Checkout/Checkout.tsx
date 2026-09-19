import { useState } from "react";
import "./Checkout.css";
import { useCart } from "../Context/CartContext";

function Checkout() {
  const { cart, clearCart } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !paymentMethod
    ) {
      alert("Preencha todos os campos.");
      return;
    }

    if (cart.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    setOrderConfirmed(true);
    clearCart();
  }

  if (orderConfirmed) {
    return (
      <section className="checkout" id="checkout">
        <div className="orderSuccess">
          <div className="successIcon">✓</div>

          <p>PEDIDO CONFIRMADO</p>

          <h2>
            Obrigado,
            <span> {name}!</span>
          </h2>

          <p>
            Seu pedido foi recebido com sucesso.
            <br />
            Em breve começaremos a preparar tudo para você.
          </p>

          <button
            onClick={() => {
              setOrderConfirmed(false);
              setName("");
              setEmail("");
              setPhone("");
              setPaymentMethod("");
            }}
          >
            Fazer outro pedido
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout" id="checkout">
      <div className="checkoutHeader">
        <p>FINALIZE SEU PEDIDO</p>

        <h2>
          Tudo pronto para
          <span> saborear.</span>
        </h2>
      </div>

      <div className="checkoutContainer">
        <form
          className="checkoutForm"
          onSubmit={handleSubmit}
        >
          <h3>Seus dados</h3>

          <div className="checkoutFields">
            <div className="checkoutGroup">
              <label htmlFor="checkoutName">
                Nome completo
              </label>

              <input
                type="text"
                id="checkoutName"
                placeholder="Digite seu nome"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
              />
            </div>

            <div className="checkoutGroup">
              <label htmlFor="checkoutEmail">
                E-mail
              </label>

              <input
                type="email"
                id="checkoutEmail"
                placeholder="seu@email.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </div>

            <div className="checkoutGroup">
              <label htmlFor="checkoutPhone">
                Telefone
              </label>

              <input
                type="tel"
                id="checkoutPhone"
                placeholder="(16) 99999-9999"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
              />
            </div>

            <div className="checkoutGroup">
              <label htmlFor="paymentMethod">
                Forma de pagamento
              </label>

              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(event) =>
                  setPaymentMethod(event.target.value)
                }
              >
                <option value="">Selecione</option>
                <option value="PIX">PIX</option>
                <option value="CARTAO_CREDITO">
                  Cartão de crédito
                </option>
                <option value="CARTAO_DEBITO">
                  Cartão de débito
                </option>
                <option value="DINHEIRO">
                  Dinheiro
                </option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="confirmOrderButton"
          >
            Confirmar pedido
          </button>
        </form>

        <div className="checkoutSummary">
          <h3>Resumo do pedido</h3>

          {cart.length === 0 ? (
            <p className="emptyCheckout">
              Seu carrinho está vazio.
            </p>
          ) : (
            <>
              <div className="checkoutItems">
                {cart.map((item) => {
                  const subtotal =
                    item.price * item.quantity;

                  return (
                    <div
                      className="checkoutItem"
                      key={item.name}
                    >
                      <div>
                        <strong>{item.name}</strong>

                        <span>
                          {item.quantity}x R${" "}
                          {item.price
                            .toFixed(2)
                            .replace(".", ",")}
                        </span>
                      </div>

                      <strong>
                        R${" "}
                        {subtotal
                          .toFixed(2)
                          .replace(".", ",")}
                      </strong>
                    </div>
                  );
                })}
              </div>

              <div className="checkoutTotal">
                <span>Total</span>

                <strong>
                  R${" "}
                  {total
                    .toFixed(2)
                    .replace(".", ",")}
                </strong>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Checkout;