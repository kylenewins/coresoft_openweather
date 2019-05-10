$(document).ready(function(){
    console.log("fiveDay.js linked")

    // const axios = require('axios')

    const API_KEY = "9a0bdff0024086732f9ae7a001e24a22"
    const queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Belmar,us&mode=json&appid=" + API_KEY
    const data = {}


    $.get(queryUrl).then(function(result){
        console.log(result)

        for(var i = 0; i<5; i ++){
            var day = $("<div></div>")
            day.attr("id", "dayDiv")

            var temp = result.list[i].main.temp
            var desc = result.list[i].weather.main

        }

    })
    

    $("#saveFive").on("click", function(event){
        event.preventDefault()

    })
   
})