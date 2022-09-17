
const comment = require("../models/comment");

module.exports = {

  createComment: async (req, res) => {
    try {
      await comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      });
      console.log("comment has be added has been added!");
      res.redirect("/post/"+req.params.id );
    } catch (err) {
      console.log(err);
    }
  },
};
