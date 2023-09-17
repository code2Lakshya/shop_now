import { useContext, useEffect, useState } from 'react';
import './Search.css';
import SearchItem from './SeachItem/SearchItem';
import { SlClose } from 'react-icons/sl';
import { AppContext } from '../../../utils/AppContext';


const Search = ({ setSearchBar }) => {
    const [searchValue, setSearchValue] = useState('');
    const { fetchDataFromApi } = useContext(AppContext);
    const [data,setData]=useState([]);
    useEffect(() => {
        if(searchValue.length>0)
        fetchDataFromApi(`/api/products?populate=*&filters[title][$contains]=${searchValue}`)
            .then(res => {
                setData(res.data)
            })
    },[searchValue])
    function searchHandler(e) {
        setSearchValue(e.target.value);
    }
    function clickHandler() {
        setSearchBar(false);
    }
    return (<div className='search-wrapper'>
        <div className='search-container'>
            <div className='search-box-wrapper'>
                <div className='search-box'>
                    <input
                        type='text'
                        name='search'
                        value={searchValue}
                        placeholder='Search for products'
                        onChange={searchHandler}
                    />
                    <span onClick={clickHandler}><SlClose /></span>
                </div>
            </div>
            <div className='search-results-container'>
                {data.length ?
                    (
                        <div className='search-result'>
                             {
                                data.map((elem)=><SearchItem item={elem} key={elem.id} search={setSearchBar}/>)
                             }
                        </div>
                    ) :
                    (<div className='search-caption'>Music Now provides you with the best products around Globe</div>)
                }
            </div>
        </div>
    </div>);
}
export default Search;