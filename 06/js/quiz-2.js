var r = prompt("원의 반지름은? (cm)");
	function Circle(r){
        this.r = r;
        //toFixed = 소수점 몇째자리까지 표현 할 것인지
		this.circumference = function(){
            return Math.floor(this.r*2*Math.PI);
        }
        this.area = function(){
            return Math.floor(Math.pow(this.r,2)*Math.PI);
        }
	}
	circle = new Circle(r);
	document.write("반지름이 "+circle.r+"cm일 때 <br>원의 둘레 : 약"+circle.circumference()+"cm<br>원의 넓이 : 약"+circle.area()+"cm<sup>2</sup>");