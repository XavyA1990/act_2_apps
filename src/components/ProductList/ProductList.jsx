/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard/ProductCard";
import { ListContainer } from "./ProductList.style";

const ProductList = ({ products }) => {
  return (
    <ListContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.thumbnail}
          href={product.permalink}
        />
      ))}
    </ListContainer>
  );
};

export default ProductList;
