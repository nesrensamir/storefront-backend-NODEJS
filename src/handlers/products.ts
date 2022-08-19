import { ProductsModel } from '../Models/products';
import { Application, Request, Response } from 'express';
import { verifyToken } from '../middleware/verify';

const products = new ProductsModel();

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const getProducts = await products.show();
    res.send(getProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const product = await products.showProduct(id);
    res.send(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    const newProduct = await products.create(name, price);
    res.send(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id, name, price } = req.body;
    const updatedProduct = await products.update(id, name, price);
    res.send(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const deletedProduct = await products.delete(id);
    res.send(deletedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const products_routes = (app: Application) => {
  app.get('/products', getAllProducts);
  app.get('/product/:id', getProduct);
  app.post('/product', verifyToken, createProduct);
  app.put('/product', verifyToken, updateProduct);
  app.delete('/product', verifyToken, deleteProduct);
};

export default products_routes;