const API_URL = 'https://dummyjson.com/products';

const getAllProducts = async () => {
    try {
        const response = await fetch(API_URL)
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }

}

//https://dummyjson.com/products/search?q=phone

const getSpecific = async (product) => {
    try {
        const response = await fetch(`${API_URL}/search?q=${product}`)
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export { getAllProducts, getSpecific} 
