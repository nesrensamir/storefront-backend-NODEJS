import client from '../database'; 


//create order type 

export type Order = {
    id: number;
    status: string;
    userId: number;
  }; 

export class OrdersModel {


  // show all orders

  async show(): Promise<Order[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Failed to get the orders, ERROR: ${error}`
      );
    }
  }  

  // show specific order 

  async showOrdrer(userId: number): Promise<Order[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM orders WHERE userId=($1)';
      const result = await connection.query(sql, [userId]);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Failed to get the order, ERROR: ${error}`
      );
    }
  }


  //create order  

  async create(status: string, userId: number): Promise<Order> {
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO orders (status,userId) VALUES($1, $2) RETURNING *';
      const result = await connection.query(sql, [status, userId]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add the order, ERROR: ${error}`
      );
    }
  }
  
  //delete order 

  async delete(id: number): Promise<Order> {
    try {
      const connection = await client.connect();
      const sql = 'DELETE FROM orders WHERE id=($1) RETURNING *';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to delete order, ERROR: ${error}`
      );
    }
  } 

  //update order 

  async update(id: number, status: string): Promise<Order> {
    try {
      const connection = await client.connect();
      const sql = 'UPDATE orders SET status=($2) WHERE id=($1) RETURNING *';
      const result = await connection.query(sql, [id, status]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update order, ERROR: ${error}`
      );
    }
  }



  //add products to order dy 'orders-products'

  async addProduct(
    quantity: number,
    orderId: string,
    productId: string
  ): Promise<Order> {
    try {
      const sql =
        'INSERT INTO orders_products (quantity, orderId, productId) VALUES($1, $2, $3) RETURNING *';
      const connection = await client.connect();
      const result = await connection.query(sql, [
        quantity,
        orderId,
        productId,
      ]);
      const order = result.rows[0];
      connection.release();
      return order;
    } catch (err) {
      throw new Error(
        `Could not add product ${productId} to order ${orderId}, ERROR: ${err}`
      );
    }
  }


}