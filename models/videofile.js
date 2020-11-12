const mongoose= require('mongoose');
const {Schema}=mongoose;


const userSchema= new Schema({
    uid: String,
    title: String,
    description: String,
    videoLinks: String,
    season: String,

});

const video= mongoose.model('videos', userSchema);

module.exports={
    video
}
