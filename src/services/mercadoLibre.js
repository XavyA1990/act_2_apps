import { api } from "../utils/api";

export const getProducts = async (query, setProducts) => {
  api
    .get(`/sites/MLA/search?q=${query}`)
    .then((response) => {
      const { results } = response.data;

      setProducts(results);
    })
    .catch((error) => {
      console.error(error);
      setProducts([]);
    });
};
