const Url = require('../models/url')

const getUrl = async (req, res) => {
    
    let shortUrl = req.params.shortUrl

    console.log(req)
    
    try{
        let url = await Url.findOne({ shortUrl })

        if(!url){
            return res.status(404).json("Error not found")
        }

        res.redirect(url.longUrl)
    }

    catch(e){
        return res.status(500).json("Internal Error")
    }
}

module.exports = {
    getUrl
}