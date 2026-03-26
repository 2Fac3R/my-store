# GEMINI.md - Project Context

## Project Overview
**My Store** is a Node.js/Express CRUD API designed as an e-commerce platform back-end. It features products, categories, and users management, with data persistence options for both local (in-memory) and MongoDB Cloud (Atlas).

- **Primary Technologies:** Node.js, Express, MongoDB
- **Validation:** Joi (schema-based data validation)
- **Error Handling:** @hapi/boom (structured HTTP errors)
- **Development Tools:** Nodemon, ESLint, Prettier, Faker (mock data generation)
- **Architecture:** Layered design following the pattern: `Router -> Middleware -> Service -> Data Layer`.

## Building and Running

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB account (optional if using local service)

### Commands
- **Install dependencies:** `npm install`
- **Development mode:** `npm run dev` (uses `nodemon` for auto-restarts)
- **Production mode:** `npm run start`
- **Linting:** `npm run lint`

### Configuration
1. Copy `.env.example` to `.env`.
2. Configure `MONGO_URI` in `.env` if using MongoDB.
3. To switch between local storage and MongoDB, modify the service import in the respective router (e.g., `routes/products.router.js`):
   ```javascript
   const ProductsService = require('../services/local.product.service'); // Local (Array)
   // const ProductsService = require('../services/product.service'); // MongoDB
   ```

## Project Structure
- `index.js`: Main entry point. Configures Express, global middlewares, and routes.
- `routes/`: Express routers organized by resource (products, categories, users). Includes an `index.js` for versioned routing (`/api/v1`).
- `services/`: Business logic and data access. Provides alternative implementations for persistence.
- `schemas/`: Joi validation schemas for request data (body, params).
- `middlewares/`: Custom Express middlewares:
  - `validator.handler.js`: Generic Joi schema validator.
  - `error.handler.js`: Global error handling for Boom and standard errors.
- `config/`: Database connection setup.

## Development Conventions
- **Routing:** All API endpoints are prefixed with `/api/v1` via `routes/index.js`.
- **Validation:** Every request that modifies data should be validated using `validatorHandler` middleware with a Joi schema from `schemas/`.
- **Errors:** Use `@hapi/boom` in services to throw semantic HTTP errors. These are automatically caught and formatted by `boomErrorHandler` in `middlewares/error.handler.js`.
- **Mocking:** Use the `generate()` method in services (powered by `faker`) to seed data for testing.
- **Code Style:** Adheres to ESLint and Prettier configurations defined in the project root.

## Current Limitations / TODOs
- [ ] API Documentation (e.g., Swagger/OpenAPI)
- [ ] Automated Tests (Jest/Mocha/Supertest)
- [ ] Authentication and Authorization logic (only `isBlock` example field exists currently)
