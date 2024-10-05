import mongoose from "mongoose";

const AddSchema = new mongoose.Schema({
   src : {type : String , require : true},
   Name : {type : String , require : true},
   Price : {type : String , require : true}
});

const Added = mongoose.model('CartItem', AddSchema);

export default Added;