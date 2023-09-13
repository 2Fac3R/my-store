# My Store

This project is a products store e-commerce platform, serving as an example of a CRUD API implemented in Node.js with Express. It establishes a connection to a NoSQL collection on MongoDB Cloud.

## Config

Edit and rename .env.example with your own settings
    
    MONGO_URI='<mongo-uri>'

If you do not have a mongodb cloud account or just want to test the api locally, make sure you have enabled it in *services/products.router.js* file:

```js
const ProductsService = require('../services/local.product.service');  // local, with arrays
// const ProductsService = require('../services/product.service');  // connects to mongodb cloud
```

## Usage

Install and run dev

    npm install
    npm run dev

Now you can use all endpoints for api testing at localhost:3000/api/v1/

**Notes**:

- There is an extra '/*generate*' endpoint to create fake data.
- I added an extra field '*isBlock*' to represent an example of how authorization works, for testing purposes.

**Dependencies**:

- *Faker*: used to generate fake data.
- *@hapi/boom*: used for error handling.
- *joi*: used for schema description and data validation.

**Improvements / TO DO:**

- API Documentation
- Tests 
