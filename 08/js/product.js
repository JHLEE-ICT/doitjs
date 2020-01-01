		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  
		var view = document.querySelector("#view");
		var isOpen = false //화면에 표시된 상태인지 아니면 감춰진 상태인지 저장할 변수, 처음에는 감춰진 상태이므로 false
		view.addEventListener("click",function(){
			if(isOpen == false){
				document.querySelector('#detail').style.display = 'block';
				view.innerText = "상세 설명 닫기"
				isOpen = true;
			}	
			else{
				document.querySelector("#detail").style.display = 'none';
				view.innerText = "상세 설명 보기"
				isOpen = false;
			}
		});

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		