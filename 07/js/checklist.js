var itemList = [];
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click",addList); //addBtn을 클릭하면 addList함수 실행
function addList(){
    var item = document.querySelector("#item").value;
    if(item!=null){
        itemList.push(item);
        document.querySelector("#item").value=""; //id="item"인 요소 값을 지움
        document.querySelector("#item").focus(); //텍스트필드에 focus()함수 적용
    }
    showList();
}
function showList(){
    var list = "<ul>"; //목록을 시작하는 <ul> 태그 작성
    for(var i=0;i<itemList.length;i++){
        list+="<li>"+itemList[i]+"<span class='close' id="+i+">X</span></li>";
    }
    list+="</ul>";

    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close"); //삭제 버튼을 변수로 저장, 배열형태가 됨
    for(var i=0;i<remove.length;i++){
        remove[i].addEventListener("click",removeList);
    }
}

function removeList(){
    var id = this.getAttribute("id");//this를 사용하면 이벤트가 발생한 객체가 무엇인지 알 수 있다.
    itemList.splice(id,1);
    showList();
}