/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  Card,
  ProductPrice,
  ProductTitle,
  Thumbnail,
} from "./ProductCard.style";

const ProductCard = ({ title, price, image, href }) => {
  return (
    <Card>
      <Link to={href} target="_blank">
        <Thumbnail src={image} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
      </Link>
    </Card>
  );
};

export default ProductCard;
