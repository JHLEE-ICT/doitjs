var price = 24000;

var checkList = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
total.value = price+"원";

for(var i=0; i<checkList.length; i++){
    checkList[i].onClick = function(){
        if(this.checked == true){
            price += parseInt(this.value);
        }
        else{
            price -= parseInt(this.value);
        }
        total.value = price+"원";
    }
}



