const Data = require('../models/salesModel')

exports.getAllSales = async (req, res) => {
    try {
      // Fetch sales data from the database
      const data =  Data.Sales; // Adjust this according to your actual data fetching method
      
      // Send a successful response
      res.status(200).json({
        message: "Sales data fetched successfully",
        sales: data
      });
    } catch (err) {
      // Handle errors and send an error response
      console.error('Error fetching sales data:', err); // Optional: Log the error for debugging
      res.status(500).json({
        message: "Server error while fetching sales data"
      });
    }
  };
  