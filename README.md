# Simple-Crud-App Backend

## Overview
Simple-Crud-App is a backend project built using **Node.js**, **Express**, and **MongoDB**. It provides a clean and efficient way to perform CRUD (Create, Read, Update, Delete) operations with a structured routing approach for maintainable code.

## Features
- **RESTful API** for CRUD operations
- **MongoDB** as the database
- **Express.js** as the web framework
- **Routes** for clean and organized code
- **Error handling and validation** for robustness

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose ODM)

## Installation

### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed on your machine.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Simple-Crud-App.git
   cd Simple-Crud-App
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run at `http://localhost:5000` (or the port specified in `.env`).

## API Routes
### Base URL: `http://localhost:5000/api`

| Method | Endpoint           | Description                |
|--------|-------------------|----------------------------|
| GET    | `/products`        | Get all products          |
| GET    | `/products/:id`    | Get a product by ID       |
| POST   | `/products`        | Create a new product      |
| PUT    | `/products/:id`    | Update a product by ID    |
| DELETE | `/products/:id`    | Delete a product by ID    |

## Project Structure
```
Simple-Crud-App/
│── routes/
│   ├── product.routes.js
│── models/
│   ├── product.model.js
│── controllers/
│   ├── productController.js
│── config/
│   ├── db.js
│── server.js
│── package.json
```

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the **MIT License**.

