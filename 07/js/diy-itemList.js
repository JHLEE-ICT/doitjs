itemList = [];
addBtn = document.querySelector("#add");
addBtn.addEventListener("click",addList);

//추가함수 addList()
function addList(){
    var item = document.querySelector("#item").value;

    if(item!=null){
        itemList.push(item);
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

//보여주는 함수
function showList(){
    var list = "<ul>"
    for(var i=0;i<itemList.length;i++){
        list+="<li>"+itemList[i]+"<span class='close' id="+i+">X</span></li>";
    }
    list+="</ul>";

    document.querySelector('#itemList').innerHTML = list;

    remove = document.querySelectorAll(".close"); //배열의 형태로 저장됨

    for(var i=0;i<remove.length;i++){
        remove[i].addEventListener("click",removeList);
    }
}


//삭제함수
function removeList(){
    var id =  this.getAttribute("id");
    itemList.splice(id,1);
    showList();
}
