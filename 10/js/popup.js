window.onload = openPop;  //실행되자마자 불러와야하기 떄문에 onload를 씀

function openPop(){
    var newWin = window.open("popup.html","","width=400,height=400");
    if(newWin == null){ //팝업이 차단되어있다면 window.open()은 null을 반환
        alert("팝업이 차단되어있습니다. 팝업 차단을 해제하고 새로고침해 주세요");
    }
}