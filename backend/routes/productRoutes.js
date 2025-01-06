import {
    addNewProduct,
    getProducts,
    getProductWithId
} from '../controllers/productControllers'

const routes = (app) => {
    app.route('/shop')
    .get(getProducts) // get endpoints
    .post(addNewProduct)// pOST endpoint

     app.route('/shop/:ProductId') 
     .get(getProductWithId)//Get Specific product
}

export default routes