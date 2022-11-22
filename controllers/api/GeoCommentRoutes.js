const router = require('express').Router();
const { GeoComment } = require('../../models');
// const withAuth = require('../../utils/auth');


//get all comments
//realtive path = api/GeoComment/
router.get("/", (req, res) => {
    GeoComment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get all comments
//realtive path = api/GeoComment/
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        GeoComment.create({
                geo_comment_text: req.body.geo_comment_text,
                geo_post_id: req.body.geo_post_id,
                user_id: req.session.user_id
            })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

module.exports = router;