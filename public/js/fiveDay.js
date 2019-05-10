$(document).ready(function(){
    console.log("fiveDay.js linked")

    // const axios = require('axios')

    const API_KEY = "9a0bdff0024086732f9ae7a001e24a22"
    const queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=asbury%20park,us&mode=json&appid=" + API_KEY + "&units=imperial"
    const data = []


    $.get(queryUrl).then(function(result){
        console.log(result)

        for(var i = 0; i<5; i ++){
            var day = $("<div></div>")
            day.attr("id", "dayDiv")

            var convertedDate = moment().add(i, "days").format("MM/DD/YYYY")

            var date = $("<h5></h5>")
            date.text(convertedDate)

            var temp = $("<h6></h6>")
            temp.text("Low: " + result.list[i].main.temp_min + " High: " + result.list[i].main.temp_max)

            var desc = $("<h6></h6>")
            desc.text(result.list[i].weather[0].description)

            var iconcode = result.list[i].weather[0].icon
            var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
            var icon = $("<img></img")
            icon.attr("class", "center-block")
            icon.attr("src", iconurl)
            icon.attr("alt", "Weather Icon")

            var singleData = {
                temperature: temp,
                description: desc,
                icon: iconcode
            }

            data.push(singleData)

            date.appendTo(day)
            desc.appendTo(day)
            icon.appendTo(day)
            temp.appendTo(day)
            $("<hr>").appendTo(day)

            day.appendTo($("#fiveDayData"))
        }

    })
    

    $("#saveFive").on("click", function(event){
        event.preventDefault()

    })
   
})