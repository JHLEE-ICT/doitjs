window.onload = onPopup;

function onPopup(){
    var newWindow = window.open("current.html","","width=300,height=50");

    if(newWindow == null){
        alert("알림창 팝업 차단상태입니다. 팝업 차단을 해제해 주세요");
    }
}