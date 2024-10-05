import mongoose from "mongoose";

const SignUpSchema = new mongoose.Schema({
   gmail : {type : String , require : true},
   password : {type : String , require : true}
});

const SignUp = mongoose.model('SignUp', SignUpSchema);

export default SignUp;