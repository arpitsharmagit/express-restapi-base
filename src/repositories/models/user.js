const mongoose = requrie('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    }
}, {
    toJSON: {
        virtual: true,
    },
    toObject: {
        virtual: true,
    },
    timestamp: true
});

userSchema.index({
    userId: 1
});

module.exports = mongoose.model("User", userSchema);