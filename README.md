# My Store API 🛒

A robust Node.js and Express-based CRUD API for an e-commerce platform. This project demonstrates best practices in building scalable back-end services, including schema-based validation, structured error handling, and multiple data persistence strategies.

## ✨ Features

- **Full CRUD Support:** Complete implementation for managing product resources.
- **Dual Persistence Layers:** Seamlessly switch between in-memory arrays and MongoDB Cloud (Atlas).
- **Data Validation:** Rigorous schema validation using **Joi** to ensure data integrity.
- **Structured Error Handling:** Integrated with **Boom** for consistent and meaningful HTTP error responses.
- **Mock Data Generation:** Built-in capability to generate large volumes of fake data for testing using **Faker**.
- **RESTful Architecture:** Versioned API endpoints following standard REST principles.

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) (with MongoDB Driver)
- **Validation:** [Joi](https://joi.dev/)
- **Error Handling:** [@hapi/boom](https://github.com/hapijs/boom)
- **Utilities:** [Faker](https://github.com/Marak/faker.js), [dotenv](https://github.com/motdotla/dotenv)
- **Development Tools:** [Nodemon](https://nodemon.io/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/)
- A MongoDB Atlas account (optional, for cloud persistence)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/my-store.git
   cd my-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Copy the example environment file and update it with your settings:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and provide your `MONGO_URI` if you plan to use MongoDB.

### Running the Application

- **Development mode (with auto-reload):**
  ```bash
  npm run dev
  ```
- **Standard start:**
  ```bash
  npm run start
  ```
The server will be available at `http://localhost:3000`.

## 📂 Project Structure

```text
my-store/
├── config/             # Database connection setup
├── middlewares/        # Custom Express middlewares (errors, validation)
├── routes/             # Versioned API routes (v1)
├── schemas/            # Joi validation schemas
├── services/           # Business logic and data access (Local & MongoDB)
├── index.js            # Application entry point
└── README.md           # Project documentation
```

## 🔌 API Endpoints (v1)

Base URL: `http://localhost:3000/api/v1`

### Products
- `GET /products` - Retrieve all products.
- `GET /products/:id` - Retrieve a specific product by ID.
- `POST /products` - Create a new product.
- `PUT /products/:id` - Full update of a product.
- `PATCH /products/:id` - Partial update of a product.
- `DELETE /products/:id` - Remove a product.
- `GET /products/generate` - Generate mock product data.

### Categories (WIP)
- `GET /categories/:categoryId/products/:productId` - Retrieve a product within a category.

### Users (WIP)
- `GET /users` - List users (supports `limit` and `offset` query params).

## ⚙️ Configuration Notes

### Switching Persistence Layers
By default, the project is configured to use the local in-memory service for products. To switch to MongoDB, update the import in `routes/products.router.js`:

```javascript
// const ProductsService = require('../services/local.product.service'); // ❌ Local
const ProductsService = require('../services/product.service');       // ✅ MongoDB
```

### Authorization Example
The project includes an `isBlock` field in the product model. If a product has `isBlock: true`, the API will return a `403 Forbidden` error when trying to access it, demonstrating basic authorization logic.

## 📝 License

This project is licensed under the **ISC License**.

---
*Created by [Gustavo Navarro](https://github.com/genr1818)*
