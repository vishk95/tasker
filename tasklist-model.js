const mongoose = require('mongoose');

const tasklistSchema = new mongoose.Schema({
    taskname: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    }, 
});

const List = mongoose.model("List", tasklistSchema);
module.exports = List; 