
// const Data = require('../models/Model')
const bcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

exports.userSignUp = async (req, res, next) => {
//  bcypt.hash(req.body.password, 10);
 
    try {
        const hash = await  bcypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password:hash,
            role: req.body.role
        });
      // Fetch sales data from the database
      const result =  await user.save();
      res.status(201).json({
        message: 'User Created',
        result: result
      }) 

    } catch (err) {
      // Handle errors and send an error response
      console.error('Error User Not Cretaed:', err);
      res.status(500).json({
        message: "Server error while Creating Users "
      });
    }
  };

  exports.login = async (req, res, next) => {
    //  bcypt.hash(req.body.password, 10);
     
        try {
            // const hash = await  bcypt.hash(req.body.password, 10);
    
            const user = await User.findOne({emai: req.body.email});
            if(!user) {
              return res.status(404).json({
                message: "No user found with this email"
              });
            }

            const isPasswordValid = await bcypt.compare(req.body.password, user.password);

            if(!isPasswordValid){
              return res.status(401).json({
                message: "Wrong Password enterd"
              });
            }


            
          // Genrate JWT
           const token = jwt.sign(
            {email: user.email, userId: user._id},
           )
            res.status(200).json({
              token : token,
              userId :user._id,
              role: user.role
            })
    
        } catch (err) {
          // Handle errors and send an error response
          console.error('Error User Not Cretaed:', err);
          res.status(401).json({
            error: err,
            message: "Auth failed "
          });
        }
      };
      
  