const express = require('express')

const router = express.Router();
const {BlogPageController} = require('../../controllers/index')
// router.use((req,res,next) => {
//     console.log('Time', Date.now())
//     next();
// })

router.get('/blog', BlogPageController.blogPage)

module.exports = router