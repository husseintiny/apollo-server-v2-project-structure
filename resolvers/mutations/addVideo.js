module.exports = async (_, args, {models}) => {
    let newVideo =await models.videofile.video.create({
        uid: args.uid,
        title: args.title,
        description: args.description,
        videoLinks: args.videoLinks,
        season:args.season
    })
    return newVideo;

}
