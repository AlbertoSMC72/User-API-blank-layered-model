import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        match: [/.+\@.+\..+/, "Please fill a valid email address"] 
    },
    password: {
        type: String,
        required: true,
        minlength: 6 
    }
});

const User = mongoose.model('User', userSchema);

export default User;
