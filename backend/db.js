const mongoose = require("mongoose");
const mongoURI ="mongodb+srv://Rahul:Bhole123@mernstack.owqoabl.mongodb.net/MernStack?retryWrites=true&w=majority";
const connectToMongo = () => {
  mongoose.connect(mongoURI, (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  });
};
module.exports = connectToMongo;
