import "./Menu.css";
import { useCart } from "../Context/CartContext";

const dishes = [
  {
    name: "Prime Rib na Brasa",
    description:
      "Corte premium grelhado na brasa, servido com batatas rústicas.",
    price: 89.9,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Risoto de Parmesão",
    description:
      "Risoto cremoso de parmesão finalizado com ervas frescas.",
    price: 54.9,
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Picanha na Brasa",
    description:
      "Picanha suculenta acompanhada de arroz, farofa e vinagrete.",
    price: 69.9,
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pasta da Casa",
    description:
      "Massa artesanal ao molho cremoso com parmesão e ervas.",
    price: 49.9,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hambúrguer Brasa",
    description:
      "Blend artesanal, queijo, cebola caramelizada e molho da casa.",
    price: 42.9,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sobremesa da Casa",
    description:
      "Chocolate, caramelo e sorvete em uma combinação especial.",
    price: 29.9,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
  },
];

function Menu() {
  const { addToCart } = useCart();

  return (
    <section className="menu" id="cardapio">
      <div className="menuHeader">
        <p>O NOSSO CARDÁPIO</p>

        <h2>
          Sabores feitos para
          <span> impressionar.</span>
        </h2>

        <span className="menuLine"></span>
      </div>

      <div className="menuGrid">
        {dishes.map((dish) => (
          <article className="dishCard" key={dish.name}>
            <div className="dishImage">
              <img src={dish.image} alt={dish.name} />
            </div>

            <div className="dishInfo">
              <h3>{dish.name}</h3>

              <p>{dish.description}</p>

              <div className="dishFooter">
                <strong>
                  R$ {dish.price.toFixed(2).replace(".", ",")}
                </strong>

                <button onClick={() => addToCart(dish.name, dish.price)}>
                  Adicionar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Menu;