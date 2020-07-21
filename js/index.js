window.onload = function() {

	var logo = document.getElementsByClassName("nav-logo")[0];
	var point = document.getElementsByClassName("a-point");
	var imgs = document.getElementsByClassName("bg-img");
	var prev = document.getElementsByClassName("prev")[0];
	var next = document.getElementsByClassName("next")[0];
	var imgArr = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
	var count = 1;
	var index = 0;
	
	setA();
	//设置MI logo 鼠标移入效果
//	logo.onmouseenter = function() {
//		logo.style.backgroundImage = "url(img/mi-home.png)"
//	}
//
//	logo.onmouseleave = function() {
//		logo.style.backgroundImage = "url(img/mi-logo.png)"
//	}
	//设置点击导航点切换图片
	for(var i=0;i<point.length;i++){
		
		point[i].index = i;
		
		point[i].onclick = function(){
			
			index = this.index;
			count++;
			//将点击的图片层级设为最高
			imgs[index].style.zIndex = count.toString();
			//设置导航点样式
			setA();
			console.log("切换次数 " + (count - 1));
			
		}
		
	}
	
	function setA(){
		
		for(var i=0;i<point.length;i++){
			
			point[i].style.backgroundColor = "rgba(0, 0, 0, .4)";
			point[i].style.borderColor = "hsla(0,0%,100%,.3)";
			
		}
		
		point[index].style.backgroundColor = "rgba(255, 255, 255, .4)";
		point[index].style.borderColor = "rgba(0, 0, 0, .4)";
		
	}
	
	document.onmousemove = function() {
		/*
		 * 消除浏览器拖拽默认行为
		 */
		return false
	}
	
	prev.onclick = function(){
		
		index--;
		count++;
		
		if(index<0){
			index = imgArr.length - 1;
		}
		
		imgs[index].style.zIndex = count.toString();
		imgs[index].src = 'img/' + imgArr[index];
		
		setA();
		
	}
	
	next.onclick = function(){
		
		index++;
		count++;
		
		index = index%imgArr.length;
		
		imgs[index].style.zIndex = count.toString();
		imgs[index].src = 'img/' + imgArr[index];
		
		setA();
		
	}
	
}