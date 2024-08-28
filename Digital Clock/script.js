const clock = document.querySelector("#clock");

// used setInterval to repeatedly call the function  after 1sec to get the updated value.

setInterval(function(){
    let date = new Date;
    clock.innerHTML = date.toLocaleTimeString();
},1000)