const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        maxLength: [40, "This cannot be exceeded than 40 characters"]
    },
    name: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        maxLength: [20, "This cannot be exceeded than 40 characters"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
    },
    type: {
        type: String
    },
    dob: {
        type: Date
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SAMPLEUsers'
    },
    mobile: {
        type: String
    },
    gender: {
        type: String
    },
    status: {
        type: String
    },
},
    { timestamps: true })

let SAMPLEUsers;

try {
    SAMPLEUsers = mongoose.model("SAMPLEUsers");
} catch (err) {
    SAMPLEUsers = mongoose.model('SAMPLEUsers', userSchema);
}

module.exports = SAMPLEUsers;