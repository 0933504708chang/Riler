import axios from "axios";
import AppUrl from "../component/api/AppUrl";

class ProductService {
    async productBySubCategory(catName) {
        const url = `${AppUrl.ProductsBySubCategory}/${catName}`;
        console.log(url)
        console.log(catName)
        return axios.get(url).then(response => response.data);
    }
    async product(id) {
        const url = `${AppUrl.ProductsByCategory}/${id}`;
        console.log(url)
        return axios.get(url).then(response => response.data);
    }
}
export default ProductService;
