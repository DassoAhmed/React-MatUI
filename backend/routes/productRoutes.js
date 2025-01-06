import {
    addNewProduct,
    getProducts
} from '../controllers/productControllers'

const routes = (app) => {
    app.route('/shop')
    .get(getProducts) // get endpoints
    .post(addNewProduct)// pOST endpoint
}

export default routes