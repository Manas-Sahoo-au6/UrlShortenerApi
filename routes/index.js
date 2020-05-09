const express = require('express');
const router = express.Router()

const Url = require('../model')


router.get('/:code',async(req,res)=> {
    try{

        const url = await Url.findOne({urlCode: req.params.urlCode})
        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(404).json('no url found')
        }
    }catch(err){
        res.status(500).json('server error')



    }
})

module.exports= router