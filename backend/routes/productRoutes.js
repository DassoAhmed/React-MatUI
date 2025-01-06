import {
    addNewProduct,
    getProducts,
    getProductWithId,
    updateProduct,
    deleteProduct
} from '../controllers/productControllers'

const routes = (app) => {
    app.route('/shop')
    .get(getProducts) // get endpoints
    .post(addNewProduct)// pOST endpoint

     app.route('/product/:ProductId') 
     .get(getProductWithId)//Get Specific product
     .put(updateProduct) // update a specific product
     .delete(deleteProduct)// delete a specific Product

}

export default routes