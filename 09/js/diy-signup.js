//아이디
var userId = document.querySelector("#user-id");
userId.onchange = checkId;

function checkId(){
    if(userId.value.length<4||userId.value.length>15){
        alert("4~15자리의 영문과 숫자로 입력하세요");
        userId.select();
    }
}

//비밀번호 자리
var pw1 = document.querySelector("#user-pw1")
pw1.onchange = checkPw1;

function checkPw1(){
    if(pw1.value.length<8){
        alert("8자리 이상 입력하세요");
        pw1.value="";
        pw1.focus();
    }
}
//비밀번호 확인
var pw2 = document.querySelector("#user-pw2");
pw2.onchange = comparePw;

function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 동일하지 않습니다.");
        pw2.value="";
        pw2.focus();
    }
}