import express, { Request, Response } from 'express';
import users_routes from './handlers/users';
import products_routes from './handlers/products';
import orders_routes from './handlers/orders';
const app = express(); 
const port = 3000; 


app.get('/', async(_req: Request, res: Response) : Promise<void> =>{
        res.send('Storefront backend APIs');
    });
  

users_routes(app);
products_routes(app);
orders_routes(app);


app.listen(port, ()=> {
 console.log(`server started at localhost:${port}`)
}); 



export default app ;

