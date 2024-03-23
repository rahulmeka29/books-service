
module.exports = app => {
    const books = require("../controllers/book.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    
  
    // Retrieve all books
    router.get("/", books.findAll);
    router.get("/book", books.findBook);
    app.use("/api/books", router);
  };
  