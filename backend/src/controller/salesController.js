const Data = require('../models/Model')

exports.getAllSales = async (req, res) => {
    try {
      // Fetch sales data from the database
      const data =  Data.Sales;
      
      // Send a successful response
      res.status(200).json({
        message: "Sales data fetched successfully",
        data: data
      });
    } catch (err) {
      // Handle errors and send an error response
      console.error('Error fetching sales data:', err);
      res.status(500).json({
        message: "Server error while fetching sales data"
      });
    }
  };
  