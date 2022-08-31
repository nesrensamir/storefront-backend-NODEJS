API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

# API Endpoints
* Users

* showall
Method - GET
Authorization required - Bearer
Parameters - none
Usage - list all users
http://localhost:3000/users

* show

Method - GET
Authorization required - Bearer
Parameters - id
Usage - list a specific User
http://localhost:3000/user/:id

* Create

Method - POST
Authorization required - No
Parameters - firstName, lastName, password
Usage - create a new User
http://localhost:3000/user

* Update

Method - PUT
Authorization required - Bearer
Parameters - id, firstName, lastName, password
Usage - edit an exciting User
http://localhost:3000/user

*Delete

Method - DELETE
Authorization required - Bearer
Parameters - id
Usage - Delete an exciting User
http://localhost:3000/user
# Products

* showAll

Method - GET
Authorization required -No
Parameters - none
Usage - list all products
http://localhost:3000/products

* Show

Method - GET
Authorization required - No
Parameters - id
Usage - list a specific product
http://localhost:3000/product/:id

* Create

Method - POST
Authorization required - Bearer
Parameters - name, price
Usage - create a new product
http://localhost:3000/product

* Update

Method - PUT
Authorization required - Bearer
Parameters - id, name, price
Usage - edit an exciting product
http://localhost:3000/product

* Delete

Method - DELETE
Authorization required - Bearer
Parameters - id
Usage - Delete an exciting product
http://localhost:3000/product
# Orders
* showAlll

Method - GET
Authorization required - Bearer
Parameters - none
Usage - list all orders
http://localhost:3000/orders

* Show

Method - GET
Authorization required - Bearer
Parameters - id
Usage - list a specific order
http://localhost:3000/order/:id

* Create

Method - POST
Authorization required - Bearer
Parameters - status, userId
Usage - create a new order
http://localhost:3000/order

* Update

Method - PUT
Authorization required - Bearer
Parameters - id, status
Usage - edit an exciting order
http://localhost:3000/order
* Delete

Method - DELETE
Authorization required - Bearer
Parameters - id
Usage - Delete an exciting order
http://localhost:3000/order
# addProduct

Method - POST
Authorization required - Bearer
Parameters - orderId, productId, quantity
Usage - Add products to an existing order
http://localhost:3000/orders/:id/products 


# Database 

* users Table 

![users](https://user-images.githubusercontent.com/86182948/187678369-f893556c-6986-4498-b6a9-3fb82c2cb70f.PNG)

* orders 
![orders](https://user-images.githubusercontent.com/86182948/187678616-76a3164f-27c6-42d4-b6ed-2eda6ca56f14.PNG)

* products 
![products](https://user-images.githubusercontent.com/86182948/187678703-4b3c5eac-af43-4ea3-aab0-a03f77782d1e.PNG)

