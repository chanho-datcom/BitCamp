import axios from 'axios'; //1.

//2.
const PRODUCT_API_BASE_URL = "/api/product";

class ProductService {
    //3.
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL+"/list");
    }
    getSellerProducts(product){
        return axios.post(PRODUCT_API_BASE_URL+"/sellerList", product);
    }
    getProductOne(product){
        return axios.post(PRODUCT_API_BASE_URL+"/selectOne", product);
    }
    registerProduct(product){
        return axios.post(PRODUCT_API_BASE_URL+"/register", product);
    }
}
export default new ProductService();
