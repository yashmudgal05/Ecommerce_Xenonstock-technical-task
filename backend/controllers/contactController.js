const Contact = require('../models/contactModel');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.sendMessage = catchAsyncErrors(async (req, res, next) => {

    console.log(req.body);
    const { name, email, number, message } = req.body;
  
    const msg = await Contact.create({
      name,
      email,
      number, 
      message
    });

    res.status(200).json({success: true});
});