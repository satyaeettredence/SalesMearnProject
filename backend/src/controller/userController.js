const Data = require('../models/Model')

exports.getAllUsers = async (req, res) => {
    try {
      // Fetch sales data from the database
      const data =  Data.User; 
      // Send a successful response
      res.status(200).json({
        message: "Users data fetched successfully",
        data: data
      });
    } catch (err) {
      // Handle errors and send an error response
      console.error('Error fetching Users data:', err);
      res.status(500).json({
        message: "Server error while fetching Users data"
      });
    }
  };
  