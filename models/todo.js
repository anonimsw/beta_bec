const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        desc: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            unique: true,
        },
        count: {
            type: Number,
            required: false,
            default: 1,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
        },
        brend: {
            type: String,
        }
    },
    { timestamps: true }
); //qacon sozdat qilinga date ni korsatadi

module.exports = mongoose.model("Todo", todoSchema);