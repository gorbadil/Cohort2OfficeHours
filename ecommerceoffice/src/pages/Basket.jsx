// import { useContext } from "react";
// import { BasketContext } from "../context/BasketContext";
import { useBasket } from "../context/BasketContext";
import ProductCard from "../components/Card";

function Basket() {
  //   const data = useContext(BasketContext);
  const { basket } = useBasket();

  return (
    <div className="product-div">
      {basket?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Basket;
