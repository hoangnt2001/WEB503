import mongoose , {Schema,ObjectId} from "mongoose" ;
 const CategorySchema = new Schema({
     name:{
    type: String,  
     require:true,
     trim:true,
    },
    slug: {
        type : String,
        minLength:5,
        lowercase:true,
        unique:true,
        index:true,
    },
 })
 export default mongoose.model("Category",CategorySchema);