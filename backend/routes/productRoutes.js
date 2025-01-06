import {
    addNewProduct
} from '../controllers/productController'

const routes = (app) => {
    app.route('/products')
    .post(addNewProduct)
}

export default routes