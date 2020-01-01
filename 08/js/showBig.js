var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");//노드 리스트로 작은 이미지를 가져옴
/*
for(var i=0;i<smallPics.length;i++){
    smallPics[i].onclick = showBig; //요소를 누르면 showBig()함수 실행
}

function showBig(){
    var newPic = this.src; //클릭이벤트가 발생한 대상의 src속성을 가져옴
    bigPic.setAttribute("src",newPic);
}
*/

for(var i=0;i<smallPics.length;i++){
    smallPics[i].onclick = function(event){
        bigPic.src = this.src;
    }
}