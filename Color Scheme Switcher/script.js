const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(el){
        console.log(el);
        console.log(el.target.id);
        if(el.target.id==="grey"){
            body.style.backgroundColor="gray";
        }
        if(el.target.id==="white"){
            body.style.backgroundColor="white";
        }
        if(el.target.id==="blue"){
            body.style.backgroundColor="blue";
        }
        if(el.target.id==="yellow"){
            body.style.backgroundColor="yellow";
        }
    })
})