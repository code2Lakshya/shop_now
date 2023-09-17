import { createContext, useState } from "react";
import axios from 'axios';


export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [cart, setCart] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [product, setProduct] = useState(null);
    const [cartList,setCartList]=useState([]);
    const [relatedProducts,setRelatedProducts]=useState([]);
    const params = {
        headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_KEY,
        },
    };
    const fetchDataFromApi = async (url) => {
        let res;
        try {
            const { data } = await axios.get(process.env.REACT_APP_BASE_URL + url, params);
            res=data;
            return res;
        }
        catch (err) {
            console.log('network Error');
        }
    }
    const value = {
        cart, setCart,
        categories, setCategories,
        products, setProducts,
        loader, setLoader,
        product, setProduct, 
        fetchDataFromApi,cartList,
        setCartList,relatedProducts,
        setRelatedProducts
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}