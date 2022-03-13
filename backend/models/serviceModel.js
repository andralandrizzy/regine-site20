import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    // },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date
    },

}, {
    timestamps: true,
})


const Service = mongoose.model('Service', serviceSchema)

export default Service