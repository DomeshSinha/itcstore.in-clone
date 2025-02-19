const mongoose = require("mongoose");

const cartSchema = new mongoose.schema(
    {
        userId={
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
        items:[{
            image:String,
            name:String,
            price:Number,
            quant:Number
        }]
    },

    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports = mongoose.model("cart", cartSchema);