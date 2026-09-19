import "./Cart.css";
import { useCart } from "../Context/CartContext";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

function Cart({ isOpen, onClose }: CartProps) {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function goToCheckout() {
    onClose();

    document.getElementById("checkout")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      {isOpen && (
        <div className="cartOverlay" onClick={onClose}></div>
      )}

      <aside className={`cart ${isOpen ? "cartOpen" : ""}`}>
        <div className="cartHeader">
          <div>
            <p>SEU PEDIDO</p>
            <h2>Meu carrinho</h2>
          </div>

          <button className="closeCart" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cartContent">
          {cart.length === 0 ? (
            <div className="emptyCart">
              <span>🛒</span>

              <h3>Seu carrinho está vazio</h3>

              <p>
                Adicione alguns pratos deliciosos ao seu pedido.
              </p>
            </div>
          ) : (
            <>
              <div className="cartItems">
                {cart.map((item) => {
                  const subtotal = item.price * item.quantity;

                  return (
                    <div className="cartItem" key={item.name}>
                      <div className="cartItemInfo">
                        <h3>{item.name}</h3>

                        <p>
                          R$ {item.price.toFixed(2).replace(".", ",")} cada
                        </p>

                        <div className="quantityControl">
                          <button
                            onClick={() =>
                              removeFromCart(item.name)
                            }
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              addToCart(item.name, item.price)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <strong>
                        R$ {subtotal.toFixed(2).replace(".", ",")}
                      </strong>
                    </div>
                  );
                })}
              </div>

              <button
                className="clearCart"
                onClick={clearCart}
              >
                Limpar carrinho
              </button>
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cartFooter">
            <div className="cartTotal">
              <span>Total</span>

              <strong>
                R$ {total.toFixed(2).replace(".", ",")}
              </strong>
            </div>

            <button
              className="checkoutButton"
              onClick={goToCheckout}
            >
              Finalizar pedido
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default Cart;