import mongoose , {Schema} from "mongoose" ;
const ProductSchema = new Schema({
    name :{
        type : "string",
        minLength :5,
        require:true,
    },
    price:{
        type : "number",
        require:true,
    }
},{timestamps:true});
export default mongoose.model("Product",ProductSchema);