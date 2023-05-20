const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv')
dotenv.config()

// Configuration 
cloudinary.config({
  cloud_name: "dmoyxxrbl",
  api_key: "466757883822795",
  api_secret: "l2scmRMKc99EuA9jG2p1ZD7vh7k"
});


module.exports = cloudinary;