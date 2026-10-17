import express from 'express';
import { logger } from '../middlewares/logger.js'
import { apiKey } from '../middlewares/apiKey.middleware.js'
import { getProducts, getProduct} from '../controllers/product.controllers.js'
const router = express.Router()

router.get('/products', logger, getProducts)
router.get('/products/:id', apiKey, getProduct)

export default router;