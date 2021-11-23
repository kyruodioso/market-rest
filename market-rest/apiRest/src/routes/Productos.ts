import {Schema,model} from 'mongoose'

const productSchema = new Schema({
    title:{
        type:String,
        require:true,
        trim: true
    },
    description:{
        type:String,
        trim:true
    },
    image:{
         type:String,
         required:true,
         trim:true
    },
    price:{
        type: String,
        required:true,
        trim:true
    }
},{
    versionKey:false
});

export default model('Productos', productSchema)