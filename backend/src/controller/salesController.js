// const Sales = require("../models/Sales.model.js");

// // Create and Save a new Sales
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   // Create a Sales
//   const Sales = new Sales({
//     title: req.body.title,
//     description: req.body.description,
//     published: req.body.published || false
//   });

//   // Save Sales in the database
//   Sales.create(Sales, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Sales."
//       });
//     else res.send(data);
//   });
// };

// // Retrieve all Saless from the database (with condition).
// exports.findAll = (req, res) => {
//   const title = req.query.title;

//   Sales.getAll(title, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Saless."
//       });
//     else res.send(data);
//   });
// };

// // Find a single Sales by Id
// exports.findOne = (req, res) => {
//   Sales.findById(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Sales with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Sales with id " + req.params.id
//         });
//       }
//     } else res.send(data);
//   });
// };

// // find all published Saless
// exports.findAllPublished = (req, res) => {
//   Sales.getAllPublished((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Saless."
//       });
//     else res.send(data);
//   });
// };

// // Update a Sales identified by the id in the request
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   console.log(req.body);

//   Sales.updateById(
//     req.params.id,
//     new Sales(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Sales with id ${req.params.id}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating Sales with id " + req.params.id
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// // Delete a Sales with the specified id in the request
// exports.delete = (req, res) => {
//   Sales.remove(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Sales with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete Sales with id " + req.params.id
//         });
//       }
//     } else res.send({ message: `Sales was deleted successfully!` });
//   });
// };

// // Delete all Saless from the database.
// exports.deleteAll = (req, res) => {
//   Sales.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all Saless."
//       });
//     else res.send({ message: `All Saless were deleted successfully!` });
//   });
// };