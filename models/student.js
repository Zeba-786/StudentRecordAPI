
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name must contain at least 2 characters"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please enter a valid email address"
        ]
    },

    course: {
        type: String,
        required: [true, "Course is required"],
        trim: true
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [1, "Age must be at least 1"],
        max: [100, "Age cannot exceed 100"],
        validate: {
            validator: Number.isInteger,
            message: "Age must be a whole number"
        }
    }

});

module.exports = mongoose.model("Student", studentSchema);
