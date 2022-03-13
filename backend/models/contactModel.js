import mongoose  from "mongoose";

const contactSchema = mongoose.Schema({
    
    name:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        require: true,
    },
    text_message: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date
    },
},{
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema)
export default Contact