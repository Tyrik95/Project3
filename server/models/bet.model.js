const mongoose = require('mongoose');

const BetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title is required"],
        minlength: [3, "A setup must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "A price is required"],
        min: [0, "Price must be positive int"]
    },
    description: {
        type: String,
        required: [true, "A description is required"],
        minlength: [3, "A description must be at least 3 characters long"]
    }
}, {timestamps: true});

const Bet = mongoose.model('Bet', BetSchema);

module.exports = Bet;