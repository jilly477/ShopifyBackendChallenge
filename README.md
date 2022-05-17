# Shopify-Backend-Challenge
This is a basic inventory tracking web application with basic CRUD functionalities. It is built using the PERN stack (PostgresSQL, Express, React, Node) and ensures all items in inventory are assigned to valid locations the that the user specifies. 

Demo:


https://user-images.githubusercontent.com/67667948/168732712-7a6a45bc-3bba-47b7-8241-513b4c2c44ac.mp4

# How to Run
1. Make sure NodeJS and npm and PostgreSQL are installed
2. Clone the repository, create the database, and initiate the database
```bash
git clone https://github.com/jilly477/ShopifyBackendChallenge.git
cd ShopifyBackendChallenge
psql -U postgres < server/database.sql
cd server
npm i
node index
```
3. Change directory into the client folder and run the following commands in the Terminal:
```bash
cd ..
cd client
npm run build
npm i
npm start
```
4. When finished, hit Ctrl+C on both Terminals to stop both the database server and the react server
