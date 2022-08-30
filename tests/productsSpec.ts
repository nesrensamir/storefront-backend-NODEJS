import { ProductsModel } from '../Models/products';
import app from '../server';
import supertest from 'supertest';
import jwt from 'jsonwebtoken'; 

const product = new ProductsModel () ;
 


const request = supertest(app);

const newUser = {
  firstName: 'first',
  lastName: 'last',
  password: '12345678',
};

const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string);

describe('Testing Prodcuts Methods', () => {
    it(' Get all products', () => {
      expect(product.show).toBeDefined();
    });
  
    it(' GET a specific product', () => {
      expect(product.showProduct).toBeDefined();
    });
  
    it(' Create a new product', () => {
      expect(product.create).toBeDefined();
    });
    it(' Update data of a product', () => {
      expect(product.update).toBeDefined();
    });
    it(' Delete a product', () => {
      expect(product.delete).toBeDefined();
    });
  }); 




describe('Testing products Endpoints.', () => {
  it('GET /products', async () => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
  });

  it('GET /product/:id ', async () => {
    const response = await request.get('/product/1');
    expect(response.status).toBe(200);
  });

  
  it('POST /product', async () => {
    const response = await request
      .post('/product')
      .send({
        name: 'test',
        price: 123,
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });


  it('PUT /product ', async () => {
    const response = await request
      .put('/product')
      .send({
        id: 1,
        name: 'update',
        price: 321,
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
  
  it('DELETE /product ', async () => {
    const response = await request
      .delete('/product')
      .send({
        id: 1,
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});