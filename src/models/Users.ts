import mongoose, {Schema} from "mongoose";

export interface UserInterface{
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    cpf: String
}

const userSchema = new Schema({
    name: String,
    email: String,
    cpf: String
}, {
    timestamps: true
})

export default User = mongoose.model('User', userSchema, 'users')