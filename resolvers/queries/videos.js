module.exports= async (_,__,{models})=>{
    let videos= await models.videofile.video.find();
    return videos;
}
