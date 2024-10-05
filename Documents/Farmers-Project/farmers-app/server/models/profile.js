import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
   gmail : {type : String, require : true},
   MobNum : {type : String , require : true},
   DOB : {type : String , require : true},
   Address : {type : String , require : true}
});
const profile = mongoose.model('Profile', ProfileSchema);


export default profile