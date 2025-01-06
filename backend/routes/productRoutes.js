import {
    addNewProduct
} from '../controllers/productControllers'

const routes = (app) => {
    app.route('/shop')
    .post(addNewProduct)
}

export default routes