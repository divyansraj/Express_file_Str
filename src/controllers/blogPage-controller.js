const blogPage= (req,res) =>{
    return res.json({
        sucess: "true",
        message: "OK GET",
        type : "API request",
        error: {},
        data : {},
    })
}

module.exports = {
    blogPage
}