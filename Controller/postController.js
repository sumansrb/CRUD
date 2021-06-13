const post = require("../Models/postModel");

const addPost = async(req, res) => {
    try {
        console.log(req.body)
        const posts = new post(req.body)
        await posts.save()
            .then((posts) => {
                return res.status(200).json({
                    message: "success",
                    data: posts
                })
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error.message
        })
    }
}

//either params 
// or body
//http://something/Lid
//body:JSON.stringify({id})

const deletePost = async(req, res) => {
    await post.findByIdAndDelete({ _id: req.params.postId }).then(resp => {
        console.log(resp);
        return res.json({
            message: 'deleted successfully!'
        })
    })
}

const updatePost = async(req, res) => {
    await post.findByIdAndUpdate({ _id: req.params.postId }, req.body, { new: true }).exec((err, result) => {
        if (err) throw err;
        res.json({
            message: "updated succesfully!"
        })
        console.log(result);
    })
}

// const editPost = async(req, res) => {
//     await post.findById
// }

module.exports = {
    addPost,
    deletePost,
    updatePost
}