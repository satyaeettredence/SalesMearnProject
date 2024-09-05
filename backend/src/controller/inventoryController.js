const Data = require('../models/Model')

exports.getAllInventory = async (req, res) => {
    try {
      // Fetch sales data from the database
      const data =  Data.Inventory; 
      
      // Send a successful response
      res.status(200).json({
        message: "Inventory data fetched successfully",
        data: data
      });
    } catch (err) {
      // Handle errors and send an error response
      console.error('Error fetching Inventory data:', err);
      res.status(500).json({
        message: "Server error while fetching Inventory data"
      });
    }
  };
  