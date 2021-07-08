import {useState} from "react";
import ProductService from "../../../services/product/ProductService";

const useProduct = () => {
  const [searchType, setSearchType] = useState('BY_CATEGORY');
  const [identifier, setIdentifier] = useState('');
  const [products, setProducts] = useState([]);

  const handleIdentifierChange = (event) => {
    setIdentifier(event.target.value);
  }

  const handleSearchTypeChange = (event) => {
    const type = event.target.value;
    setSearchType(type);

    if (type === 'ALL') {
      setIdentifier('');
    }
  }

  const search = (event) => {
    event.preventDefault();

    ProductService.findByIdentifier(identifier, searchType).then(
      response => {
        setProducts(response.data);
      }
    );
  }

  return [{searchType, identifier, products}, search, handleIdentifierChange, handleSearchTypeChange];
}

export default useProduct;

