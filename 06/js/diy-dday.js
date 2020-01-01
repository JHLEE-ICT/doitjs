var now = new Date();
var firstDay = new Date("2018-12-25");

var toNow = now.getTime();
var toFirst = firstDay.getTime();
//지금까지의 일 수 계산
var passedTime = toNow - toFirst; 
var passedDay = Math.round(passedTime /(24*60*60*1000));

document.querySelector("#accent").innerText = passedDay+"일";

function calcDate(days){
    var future = toFirst + days * (24*1000*60*60);
    /*연도, 월, 일 정보를 꺼내기 위해
    연도에서 future정보를 가진 새 Date객체를 만듬*/
    var someday=new Date(future);
    year = someday.getFullYear();
    month = someday.getMonth();
    date = someday.getDate();
    document.querySelector('#date'+days).innerText = year + "년 "+month+"월 "+date+"일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
