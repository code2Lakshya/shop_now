import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { toast } from "react-hot-toast";



const useCounter = (product) => {
    const { setCartList, cartList } = useContext(AppContext);
    function checkItem(item) {
        return (cartList.findIndex(elem => elem.id === item.id));
    }
    function countHandler(work) {
        if (work) {
            if (checkItem(product) === -1) {
                setCartList(prev => ([...prev, { ...product, count: 1 }]));
                toast.success('Added Item');
            }
            else {
                setCartList(prev => {
                    const find = prev.findIndex(elem => elem.id === product.id);
                    const d = [...(prev.filter(elem => elem.id !== product.id))];
                    d.splice(find, 0, { ...product, count: prev[find].count + 1 });
                    return d;
                })
            }
        }
        else {
            if (checkItem(product) !== -1) {
                if (cartList[cartList.findIndex(elem => elem.id === product.id)].count > 1) {
                    setCartList(prev => {
                        const find = prev.findIndex(elem => elem.id === product.id);
                        const d = [...(prev.filter(elem => elem.id !== product.id))];
                        d.splice(find, 0, { ...product, count: prev[find].count - 1 });
                        return d;
                    })
                }
                else {
                    setCartList(prev => ([...(prev.filter(elem => elem.id !== product.id))]));
                    toast.success('Remved Item')
                }
            }
        }
    }
    return { countHandler, checkItem };
}
export default useCounter;