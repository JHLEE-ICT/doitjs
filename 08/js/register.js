function newRegister(){
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);



    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0])
    //  nameList.appendChile(newP);
    userName.value = "" //다음 이름을 입력할 수 있도록 텍스트 필드 비우기

    var removeBttns = document.querySelectorAll(".del");
    for(var i=0;i<removeBttns.length;i++){
        removeBttns[i].addEventListener("click",function(){
            if(this.parentNode.parentNode)//현재노드의 부모의 부모노드가 있을 경우 실행
                this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
}


