var radius = document.querySelector("#radius");
var calc = document.querySelector("#start");

calc.addEventListener("click",function(){
    round = parseInt(radius.value)*(Math.floor(Math.PI * 2));
    area = parseInt(radius.value)*parseInt(radius.value)*Math.floor(Math.PI);
    document.querySelector("#round").value = round;
    document.querySelector("#area").value = area;
});



