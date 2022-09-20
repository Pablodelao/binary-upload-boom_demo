
const comment = require("../models/comment");

module.exports = {

  createComment: async (req, res) => {
    try {
        // const commentUser = await User.findById(req.user.id);
      await comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        createdBy: req.user.userName ,
        createdById: req.user.id ,
      });
      console.log("comment has be added has been added!");
      res.redirect("/post/"+req.params.id );
    } catch (err) {
      console.log(err);
    }
  },

  deleteComments: async (req, res) => {

    try {
        await comment.deleteOne({_id: req.params.commentid })
        res.redirect("/post/"+req.params.postid );
    } catch (err) {
        console.log(err)
    }

  }

};
