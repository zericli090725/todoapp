const mongoose = require('mongoose')
const { Schema } = mongoose

const toDoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    description: {
        type: String,
        required: true,
    },
    // assignedTo: {
    //     type: [mongoose.Types.ObjectId]
    // }
})

module.exports = mongoose.model('Todo', toDoSchema)