import mongoose , {Schema,ObjectId} from "mongoose" ;
const ProductSchema = new Schema({
    name :{
        type : "String",
        minLength :5,
        require:true,
    },
    description : {
        type : "String",
        minLength :5,
    },
    
    price:{
        type : "Number",
    },
    slug: {
        type : String,
        minLength:5,
        lowercase:true,
        unique:true,
        index:true,
    },
    category:{
        type : ObjectId,
        ref: "Category"
    }
},{timestamps:true});
// - name: string
//  - slug: string
//  - description : string
//  - price: number
//  - category
//  - shipping
export default mongoose.model("Product",ProductSchema);