import { useState } from "react";
import "./Header.css";
import { useCart } from "../Context/CartContext";
import Cart from "../Cart/Cart";

function Header() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header className="header">
        <div className="logo">
          <span>BRASA</span> & MESA
        </div>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="headerActions">
          <button
            className="cartButton"
            onClick={() => setIsCartOpen(true)}
          >
            🛒
            <span>{cartQuantity}</span>
          </button>

          <a href="#reserva" className="reservationButton">
            Reservar mesa
          </a>
        </div>
      </header>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default Header;