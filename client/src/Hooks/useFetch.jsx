import { useContext } from 'react';
import { AppContext } from '../utils/AppContext';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';


export const useFetch = () => {
    const { setCategories, setProducts, setProduct, fetchDataFromApi, setLoader } = useContext(AppContext);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.split('/').at(-2) === 'category') {
            setLoader(true);
            fetchDataFromApi(`/api/products?populate=*&[filters][categories][id]=${location.pathname.split('/').at(-1)}`)
                .then((res) => {
                    const { data } = res;
                    setProducts(data);
                    setLoader(false);
                })
                .catch((err) => {
                    toast.error('Network Error: Category');
                    setLoader(false);
                })
        }
        else if (location.pathname.split('/').at(-2) === 'product') {
            setLoader(true);
            const productId = location.pathname.split('/').at(-1);
            fetchDataFromApi(`/api/products?populate=*&[filters][id]=${productId}`)
                .then(res => {
                    const { data } = res;
                    setProduct(data[0]);
                    setLoader(false);
                })
                .catch(err => {
                    toast.error('Network Error : Product');
                    setLoader(false);
                })
        }
        else {
            setLoader(true);
            getCategories();
            getProducts();
        }
    }, [location.pathname]);
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*")
            .then(res => {
                const { data } = res;
                setProducts(data);
            })
            .catch((err) => {
                toast.error('Network Error : Products');
            })
    }
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*")
            .then(res => {
                const { data } = res;
                setCategories(data);
                setLoader(false);
            })
            .catch(err=>{
                toast.error('Network Error : Categories');
                setLoader(false);
            })
    }
}