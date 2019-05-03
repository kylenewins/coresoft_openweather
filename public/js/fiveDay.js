$(document).ready(function(){
    console.log("fiveDay.js linked")

    // const axios = require('axios')

    const API_KEY = "9a0bdff0024086732f9ae7a001e24a22"
    const queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Belmar,us&mode=json&appid=" + API_KEY

    $.ajax({
        URL: queryUrl,
        METHOD: "GET"
    }).then(function(res){
        console.log(queryUrl)
    })
    
})