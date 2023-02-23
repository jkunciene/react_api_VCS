import { useState, useEffect } from 'react';
import { getSpecific } from '../../services/ProductsService';

const SearchProducts = () => {
    // 1-as state reikalingas uzsaugoti reiksme is input lauko, ko vartotojas iesko
    const [searchValue, setsearchValue] = useState('');
    //2-as state reikalingas issaugoti duomenis is API responso
    const [searchResult, setsearchResult] = useState([]);

    const handleSubmit = (e) =>{
        //form nori perkrauti puslapi, tada dingtu ivesta reiksme
        e.preventDefault();
        //tikrinti ar gaunu input reiksme
    }

    //funkcija, kuri kreipsis i servisus, kad gautu duomenis
    const getProductsFromApi = (item) => {
        getSpecific(item).then((response) => {
            //gautus duomenis uzsaugos i state
            setsearchResult([...response])
        })
    }
    //stebes , kada pasikeicia input reiksme state, tik tada iskvies duomenu gavimo funkcija
    useEffect(() => {
        getProductsFromApi(searchValue);
    }, [searchValue])

    return (
        <div className='container'>
            <h3 className='text-center my-3 text-secondary'>Find Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        className='form-control'
                        type="text"
                        placeholder='enter product name...'
                        name='searchValue'
                        value={searchValue}
                        onChange={(e)=>setsearchValue(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchProducts
