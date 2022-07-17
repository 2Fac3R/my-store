require('dotenv').config()

const database = require('../config/db_connection');
const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor() {
    this.db = database;
    this.collection = this.db.collection("products");
  }

  async generate() {
    const products = [];
    const limit = 20;
    for (let index = 0; index < limit; index++) {
      products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
    // It prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const results = await this.collection.insertMany(products, options);
    return results;
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    const product = await this.collection.insertOne(newProduct);
    return product;
  }

  async find() {
    const products = await this.collection.find({}).toArray();
    return products;
  }

  async findOne(id) {
    const product = await this.collection.find({ id: id }).toArray();
    if (product.length === 0) {
      throw boom.notFound("Not found.");
    }
    if (product[0].isBlock) {
      throw boom.forbidden('You do not have permission to perform this action.');
    }
    return product;
  }

  async update(id, changes) {
    const updateProduct = {
      $set: {
        ...changes
      },
    };
    const result = await this.collection.updateOne({ id: id }, updateProduct);
    if (result.modifiedCount === 1) {
      return result;
    } else {
      throw boom.notFound("No documents matched the query. Updated 0 documents.");
    }
  }

  async delete(id) {
    const result = await this.collection.deleteOne({ id: id });
    if (result.deletedCount === 1) {
      return result;
    } else {
      throw boom.notFound("No documents matched the query. Deleted 0 documents.");
    }
  }

}

module.exports = ProductsService;
