import { UsersModel } from '../Models/users';
import app from '../server';
import jwt from 'jsonwebtoken';
import supertest from 'supertest'; 

const user= new UsersModel(); 
const request = supertest(app);

const newUser = {
    firstName:'nesren',
    lastName : 'samir',
    passord:'nesrensamir'
} 


const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string); 

describe('Testing User Methods', () => {
    
    it(' Create a new user', () => {
        expect(user.create).toBeDefined();
      });
    
      it(' Get all users', () => {
        expect(user.show).toBeDefined();
      });
    
      it(' Get a specific user', () => {
        expect(user.show).toBeDefined();
      }); 

      it(' Update data of a user', () => {
        expect(user.update).toBeDefined();
      });
      it(' Delete a user', () => {
        expect(user.delete).toBeDefined();
      });

}); 

describe('Testing Users Endpoints.', () => {
  
  
  it('GET /users ', async () => {
    const response = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

 

  it('GET /user/:id ', async () => {
    const response = await request
      .get('/user/1')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('POST /user', async () => {
    const response = await request.post('/user').send({
      firstName: 'first',
      lastName: 'last',
      password: 'pass123',
    });
    expect(response.status).toBe(200);
  });

  

  it('PUT /user ', async () => {
    const response = await request
      .put('/user')
      .send({
        id: 1,
        firstName: 'update',
        lastName: 'update',
        password: 'update',
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
})

