import { OrdersModel } from '../Models/orders';
import app from '../server';
import supertest from 'supertest';
import jwt from 'jsonwebtoken'; 

const order = new OrdersModel(); 

const request = supertest(app);

const newUser = {
  firstName: 'first',
  lastName: 'last',
  password: '12345678',
};

const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string);


describe('Testing Orders Methods', () => {
    it(' Get all orders', () => {
      expect(order.show).toBeDefined();
    });
  
    it(' Get a specific order', () => {
      expect(order.showOrdrer).toBeDefined();
    });
  
    it(' Create a new order', () => {
      expect(order.create).toBeDefined();
    });
    it(' Update data of an order', () => {
      expect(order.update).toBeDefined();
    });
    it(' Delete an order', () => {
      expect(order.delete).toBeDefined();
    });
  });



  describe('Testing orders Endpoints.', () => {
  
    it('GET /orders ', async () => {
      const response = await request
        .get('/orders')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
    });
  
   
    it('GET /order/:id ', async () => {
      const response = await request
        .get('/order/1')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
    });
  
    it('POST /order ', async () => {
      const response = await request
        .post('/order')
        .send({
          status: 'test',
          userId: 1,
        })
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
    });
  
  
  
    it('PUT /order', async () => {
      const response = await request
        .put('/order')
        .send({
          id: 1,
          status: 'update',
          userId: 1,
        })
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
    });
    
    it('DELETE /order ', async () => {
      const response = await request
        .delete('/order')
        .send({
          id: 1,
        })
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
    });
  });