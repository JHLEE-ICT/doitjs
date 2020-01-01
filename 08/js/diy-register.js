function Resgister(){
    var addBtn = document.createElement("p");
    var userName = document.querySelector("#userName");
    var textNd = document.createTextNode(userName.value);
    addBtn.appendChild(textNd);

    var delBtn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBtn.setAttribute("class","del");
    delBtn.appendChild(delText);
    addBtn.appendChild(delBtn);



    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(addBtn, nameList.childNodes[0]);
    userName.value="";

    var removeBttns = document.querySelecotr(".del");


    for(var i=0; i<removeBttns.length;i++){
        removeBttns[i].addEventListener("click",function(){
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        })
    }
}

