import mongoose , {Schema} from "mongoose" ;
const ProductSchema = new Schema({
    name :{
        type : "String",
        minLength :5,
        require:true,
    },
    price:{
        type : "Number",
        require:true,
    }
},{timestamps:true});
export default mongoose.model("Product",ProductSchema);