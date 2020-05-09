const express = require('express');
const router = express.Router()

const validUrl = require('valid-url')

const shortid = require('shortid')


const Url = require('../model')


router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = 'http://localhost:3000'




    //chck base url 

    if (!validUrl.isUri(baseUrl)) {
        return res.status(403).json('inavlid base url')
    }


    //generating url code 
    const urlCode = shortid.generate();
    //check long url 
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({
                longUrl
            })

            if (url) {
                res.json(url)
            } else {
                const shortUrl = baseUrl + '/' + urlCode;
                url = new Url({
                    longUrl,
                    urlCode,
                    shortUrl,
                    date: new Date()

                });
                await url.save();
                res.json(url)

            }

        } catch (err) {
            console.log(err.message)
            res.status(500).send('server error ')

        }
    }else{
        res.sendStatus('inavlid long url')

    }



});



module.exports = router