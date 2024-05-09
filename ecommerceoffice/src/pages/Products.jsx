import SkeletonComp from "../components/SkeletonComp";
import ProductCard from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="skeleton">
        <SkeletonComp />
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="product-div">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
