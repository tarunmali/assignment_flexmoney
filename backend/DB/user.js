const mongoose= require('mongoose');
const bcrypt=require('bcrypt');

const UserSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],

    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },

    age : {
        type: Number,
        required: [true, 'Age is required'],

    },

    phone : {
        type: String,
        required: [true, 'Phone is required'],

    },

    password: {
        type: String,
        required: [true, 'Password is required'],

    },
    confirmpassword: {
        type: String,
        required: [true, 'Confirm Password is required'],

    },


},{ collection: 'User' })



UserSchema.pre('save',async function(next){
    if(this.isModified('password')) {
        this.password=await bcrypt.hash(this.password,12);
        this.confirmpassword=await bcrypt.hash(this.confirmpassword,12);
    }
    next();

});


module.exports= mongoose.model('user', UserSchema);