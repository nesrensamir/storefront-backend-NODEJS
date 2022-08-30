# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 


###Database Creation
* create user
CREATE USER <username> WITH PASSWORD <password>;

* create Database
CREATE DATABASE storefront; CREATE DATABASE <Data base name>;

* grant all databases to the user
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <username>; 
GRANT ALL PRIVILEGES ON DATABASE <testing database name> TO <username>;

### Database Migrations
* to create the same data schema run this command to create all tables 
db-migrate up
* to drop the data schema tables run this command to drop each table separately
db-migrate down
* to reset the data schema tables run this command
db-migrate reset
* Migrations used in this repo
db-migrate create add-users-table --sql-file
db-migrate create add-products-table --sql-file
db-migrate create add-orders-table --sql-file
db-migrate create add-orders-products-table --sql-file


### Environmental Variables (.env file contents)
  * to connect with the database use the following environmental variables
  * PORT ---> the server running on the port of 3000
  * POSTGRES_HOST ---> the host (127.0.0.1)
  * POSTGRES_DB ---> name of the database 
  * POSTGRES_DB_TEST ---> name of the test database 
  * POSTGRES_USER ---> the user name or the owner of the database(username)
  * POSTGRES_PASSWORD ---> password of the database
  * ENV ---> dev (default)
  * BCRYPT_PASSWORD ---> pepper text to hash the password
  * SALT_ROUNDS ---> how many round for salting the password (10)
  * TOKEN_SECRET ---> secret text for token 

#### Required Technologies

The application must make use of the following libraries:

* Postgres for the database
* Node/Express for the application logic
* dotenv from npm for managing environment variables
* db-migrate from npm for migrations
* jsonwebtoken from npm for working with JWTs
