# Rest Api Url Shortening Application Description
***
## All Documentation and Routes and Deploy Link Is here 
***

> I have used here api based application u can test by using postman for sending the long Url and u got all the Responses in Json Data Only 
## Heroku Deployed Link
[Heroku deployed Link is here](https://manas-url-shortener.herokuapp.com )

***
## Routes for sending Long Url to Get short URL
___

POST https://manas-url-shortener.herokuapp.com/api/url/shorten
Content-Type: : application/json

{
    "longUrl":"https://www.youtube.com/hhhhhhhZ57566JBaZQ&t=645s"

}
***
## Routes to get the data of short url by get Methode from data base


https://manas-url-shortener.herokuapp.com/:code

> here you have to pass the Code of that shortenurl in params 



