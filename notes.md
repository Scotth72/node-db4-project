Comands to run & steps to follow  
1. npm init -y
2. npm i express 
3. npm i -D nodemon
4. npm i sqlite3 
5. npm i knex
6. npm i knex-cleaner 
set up your data folder, set up your dbConfig.js get your knexfile set up make sure you add useNullAsDefault and add the pool and change your paths and database name
7. knex migrate:make <tablename> you can do this all in one or do one for each table (one for each table makes it easier to find where an error is)
8. set up your tables 
9. knex migrate: latest (this will create your db3 file to directory you set up in your knexfile)
10. then knex seed:make 01_<first table name> ect. 
11. after seed data has been added to seed files you can now run knex seed: run
12. set up your server and index.js 
13. set up your routes folder - add your start and server scripts to package.json
14. Create your models for each route
15. create your endpoints for each route (test as you go in postman or insomnia)