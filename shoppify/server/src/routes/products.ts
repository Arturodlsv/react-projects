import { Router } from "express";
import { getProducts, searchProducts } from "../controllers/products";
const router = Router();

router.get("/products?", searchProducts);
router.get("/products/:id", getProducts);
export default router;
