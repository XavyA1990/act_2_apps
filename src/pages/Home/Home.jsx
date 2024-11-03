import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getProducts } from "../../services/mercadoLibre";
import ProductList from "../../components/ProductList/ProductList";
import { ContainerFlex } from "./Home.style";

const Home = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ Home ~ products:", products);

  const handleFetchProducts = async () => {
    if (!query) return;
    await getProducts(query, setProducts);
  };

  useEffect(() => {
    setTimeout(() => {
      handleFetchProducts();
    }, 1000);
  }, [query]);

  return (
    <ContainerFlex>
      <SearchBar setQuery={setQuery} />
      {products && <ProductList products={products} />}
    </ContainerFlex>
  );
};

export default Home;
