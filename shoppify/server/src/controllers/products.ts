import { Request, Response } from "express";
import {
  createProductsService,
  getProductsService,
  searchProductsService,
} from "../services/products";

const getProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await getProductsService(id);
    res.send(response)
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// const createProducts = async (req: Request, res: Response) => {
//   try {
//     const response = await createProductsService();
//     console.log(response);
//     res.send(response);
//   } catch (error) {
//     console.error(error);
//   }
// };

const searchProducts = async (req: Request, res: Response) => {
  const { q } = req.query;
  try {
    const response = await searchProductsService(q as string);
    console.log(q);
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export { getProducts, searchProducts };
