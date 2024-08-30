// const sql = require("./db.js");

// // constructor
// const Sales = function(Sales) {
//   this.title = Sales.title;
//   this.description = Sales.description;
//   this.published = Sales.published;
// };

// Sales.create = (newSales, result) => {
//   sql.query("INSERT INTO Saless SET ?", newSales, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created Sales: ", { id: res.insertId, ...newSales });
//     result(null, { id: res.insertId, ...newSales });
//   });
// };

// Sales.findById = (id, result) => {
//   sql.query(`SELECT * FROM Saless WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found Sales: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found Sales with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// Sales.getAll = (title, result) => {
//   let query = "SELECT * FROM Sales";

//   if (title) {
//     query += ` WHERE title LIKE '%${title}%'`;
//   }

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("Sales: ", res);
//     result(null, res);
//   });
// };

// // Sales.getAllPublished = result => {
// //   sql.query("SELECT * FROM Saless WHERE published=true", (err, res) => {
// //     if (err) {
// //       console.log("error: ", err);
// //       result(null, err);
// //       return;
// //     }

// //     console.log("Saless: ", res);
// //     result(null, res);
// //   });
// // };

// Sales.updateById = (id, Sales, result) => {
//   sql.query(
//     "UPDATE Saless SET title = ?, description = ?, published = ? WHERE id = ?",
//     [Sales.title, Sales.description, Sales.published, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found Sales with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated Sales: ", { id: id, ...Sales });
//       result(null, { id: id, ...Sales });
//     }
//   );
// };

// Sales.remove = (id, result) => {
//   sql.query("DELETE FROM Saless WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found Sales with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted Sales with id: ", id);
//     result(null, res);
//   });
// };

// Sales.removeAll = result => {
//   sql.query("DELETE FROM Saless", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} Sales`);
//     result(null, res);
//   });
// };

// module.exports = Sales;