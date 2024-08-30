// module.exports = app => {
//     const sales = require("../controllers/tutorial.controller.js");
  
//     var router = require("express").Router();
  
//     // Create a new Tutorial
//     router.post("/", sales.create);
  
//     // Retrieve all sales
//     router.get("/", sales.findAll);
  
//     // Retrieve all published sales
//     router.get("/published", sales.findAllPublished);
  
//     // Retrieve a single Tutorial with id
//     router.get("/:id", sales.findOne);
  
//     // Update a Tutorial with id
//     router.put("/:id", sales.update);
  
//     // Delete a Tutorial with id
//     router.delete("/:id", sales.delete);
  
//     // Delete all sales
//     router.delete("/", sales.deleteAll);
  
//     app.use('/api/sales', router);
//   };