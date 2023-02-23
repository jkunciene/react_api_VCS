import { useState, useEffect } from 'react';
import { getSpecific } from '../../services/ProductsService';

const SearchProducts = () => {
    // 1-as state reikalingas uzsaugoti reiksme is input lauko, ko vartotojas iesko
    const [searchValue, setsearchValue] = useState('');
    //2-as state reikalingas issaugoti duomenis is API responso
    const [searchResult, setsearchResult] = useState([]);

    const handleChange = (e) =>{
        //form nori perkrauti puslapi, tada dingtu ivesta reiksme
        e.preventDefault();
        //tikrinti ar gaunu input reiksme
        console.log(searchValue);
        setsearchValue(e.target.value)
    }

    //funkcija, kuri kreipsis i servisus, kad gautu duomenis
    const getProductsFromApi = (item) => {
        getSpecific(item).then((response) => {
            //gautus duomenis uzsaugos i state
            setsearchResult([...response.products])
        })
    }
    //stebes , kada pasikeicia input reiksme state, tik tada iskvies duomenu gavimo funkcija
    useEffect(() => {
        getProductsFromApi(searchValue);
    }, [searchValue])
console.log(searchResult);

    return (
        <div className='container'>
            <h3 className='text-center my-3 text-secondary'>Find Product</h3>
           
                <div className="mb-3">
                    <input
                        className='form-control'
                        type="text"
                        placeholder='enter product name...'
                        name='searchValue'
                        value={searchValue}
                        onChange={handleChange}
                    />
                </div>
                {
                 searchResult ? searchResult.map((item, index)=>(
                    <div key={index}>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                  )) : <p>Nerasta</p>
                }
        </div>
    )
}

export default SearchProducts
