//countdown script
//programmed to December 10th - 21h GMT-3 
var countdownDate = new Date("Dec 10, 2020 21:00:00").getTime();

//update countdown every secoand
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/1000);

    //display
    document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    //when the countdown ends
    if (distance < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "LANÇOU!!!"
    }
    },1000
);