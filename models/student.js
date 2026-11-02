
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: 2
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Enter a valid email"]
    },

    course: {
        type: String,
        required: [true, "Course is required"],
        trim: true
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
        min: 1,
        max: 100
    }
});

module.exports = mongoose.model("Student", studentSchema);
