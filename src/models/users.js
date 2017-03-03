// grab the things we need
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

const User = mongoose.model('users', userSchema);

export default User;
