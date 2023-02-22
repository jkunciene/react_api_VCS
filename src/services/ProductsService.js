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
export default getAllProducts;
