import client from '../database';


// create product type
export type Product = {
  id: number;
  name: string;
  price: string;
};

export class ProductsModel {

   // show all products 
  async show(): Promise<Product[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM products';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Failed to get the products, ERROR: ${error}`
      );
    }
  }
 
  // show specific product
  async showProduct(id: number): Promise<Product> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to get the product, ERROR: ${error}`
      );
    }
  }
  // create new product
  async create(name: string, price: string): Promise<Product> {
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO products (name,price) VALUES($1, $2) RETURNING *';
      const result = await connection.query(sql, [name, price]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add the product, ERROR: ${error}`
      );
    }
  } 

  // delete product 
  async delete(id: number): Promise<Product> {
    try {
      const connection = await client.connect();
      const sql = 'DELETE FROM products WHERE id=($1) RETURNING *';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to delete product,ERROR: ${error}`
      );
    }
  } 

  //update product

  async update(id: number, name: string, price: string): Promise<Product> {
    try {
      const connection = await client.connect();
      const sql =
        'UPDATE products SET name=($2), price=($3) WHERE id=($1) RETURNING *';
      const result = await connection.query(sql, [id, name, price]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update product, ERROR: ${error}`
      );
    }
  }

  
}
