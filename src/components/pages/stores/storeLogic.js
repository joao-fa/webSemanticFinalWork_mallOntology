import {useState} from "react";
import StoreService from "../../../services/store/StoreService";

const useStore = () => {
  const [searchType, setSearchType] = useState('BY_NAME');
  const [identifier, setIdentifier] = useState('');
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    StoreService.findByIdentifier(identifier, searchType).then(
      response => {
        setLoading(false);
        setStores(response.data);
      },
      () => {
        setLoading(false);
      }
    );
  }

  return [{searchType, identifier, loading, stores}, search, handleIdentifierChange, handleSearchTypeChange];
}

export default useStore;
