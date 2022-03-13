import mongoose  from "mongoose";

const aboutSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    title:{
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    createdDate: {
        type: Date
    },
},{
    timestamps: true
})

const About = mongoose.model('About', aboutSchema)
export default About