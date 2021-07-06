import {useState} from "react";
import StoreService from "../../../services/store/StoreService";

const useStore = () => {
  const [searchType, setSearchType] = useState('BY_NAME');
  const [identifier, setIdentifier] = useState('');
  const [stores, setStores] = useState([]);

  const handleIdentifierChange = (event) => {
    setIdentifier(event.target.value);
  }

  const handleSearchTypeChange = (event) => {
    const type = event.target.value;
    setSearchType(type);

    if (type === 'ALL' || type === 'ALL_ORDERED') {
      setIdentifier('');
    }
  }

  const search = (event) => {
    event.preventDefault();

    StoreService.findByIdentifier(identifier, searchType).then(
      response => {
        setStores(response.data);
      }
    );
  }

  return [{searchType, identifier, stores}, search, handleIdentifierChange, handleSearchTypeChange];
}

export default useStore;
