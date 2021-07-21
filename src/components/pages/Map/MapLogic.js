import {useState, useEffect} from "react";
import StoreService from "../../../services/store/StoreService";
import ProductService from "../../../services/product/ProductService";
import ClientService from "../../../services/client/ClientService";

const useMap = () => {
    const searchType = 'ALL_ORDERED';
    const [stores, setStores] = useState([]);
    const [storeName, setStoreName] = useState('');
    const [preferences, setPreferences] = useState([]);

    useEffect(() => {

        const currentUser = ClientService.getCurrentUser()
        
        StoreService.findByIdentifier('', searchType).then(
            response => {
                setStores(response.data)
                setStoreName(response.data[0].name)
            }
        )
        if(currentUser){
            ProductService.findAllUserPreferences(currentUser.email).then(
                response => {
                    setPreferences(response.data)
                }
            )
        }    
    }, [])

    const handleStoreNameChange = (event) => {
        setStoreName(event.target.value);
    }

    return [{stores, storeName, preferences}, handleStoreNameChange];
}

export default useMap;
