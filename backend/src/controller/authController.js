
const Data = require('../models/Model')
const bcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.userSignUp = async (req, res, next) => {
//  bcypt.hash(req.body.password, 10);
 
    try {
        const hash = await  bcypt.hash(req.body.password, 10);

        const user = {
            name: req.body.name,
            email: req.body.email,
            password:hash,
            role: req.body.role
        }
      // Fetch sales data from the database
      const result =  await user.save();
      res.status(201).json({
        message: 'User Created',
        result: result
      }) 

    } catch (err) {
      // Handle errors and send an error response
      console.error('Error fetching Users data:', err);
      res.status(500).json({
        message: "Server error while fetching Users data"
      });
    }
  };
  