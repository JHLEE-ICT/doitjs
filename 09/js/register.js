//아이디
var userId = document.querySelector("#user-id");
//change이벤트는 텍스트필드 값의 내용이 바뀌었을 떄(필드를 빠져 나왔을 때) 발생하는 이벤트
userId.onchange = checkedId;

function checkedId(){
    if(userId.value.length<4||userId.value.length>15){
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userId.select(); //텍스트 필드에 입력한 내용을 선택
    }
}
//비밀번호
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

pw1.onchange = checkPw;

function checkPw(){
    if(pw1.value.length<8){
        alert("비밀번호는 8자리 이상이여야 합니다.");
        pw1.value="";
        pw1.focus(); //focus함수는 해당 텍스트안에 커서를 가져다 놓음
    }
}

pw2.onchange = comparePw;

function comparePw(){
    if(pw1.value != pw2.value){
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value = "";
        pw2.focus();
    }
}
