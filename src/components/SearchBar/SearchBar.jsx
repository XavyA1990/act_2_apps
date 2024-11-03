import {
  SearchBarContainer,
  SearchBarLabel,
  SearchBarStyled,
} from "./SearchBar.style";
import propTypes from "prop-types";

const SearchBar = ({ setQuery }) => {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };
  return (
    <SearchBarContainer>
      <SearchBarLabel htmlFor="search">Buscar Producto</SearchBarLabel>
      <SearchBarStyled
        type="text"
        placeholder="Buscar..."
        name="search"
        id="search"
        onChange={handleSearch}
      />
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  setQuery: propTypes.func.isRequired,
};

export default SearchBar;
