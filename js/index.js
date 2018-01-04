//banner 轮播图
{
	let imgs=document.querySelectorAll('.img-box li')
	let pagers=document.querySelectorAll('.xiaoyuan li')
    let banner=document.querySelector(".banner")
 	let zjt=document.querySelector(".jtz")
 	let yjt=document.querySelector(".jty")
	console.log(imgs)
	console.log(zjt)
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				pagers[i].classList.remove('active');
				imgs[i].classList.remove('active')
			}
			this.classList.add('active');
			imgs[index].classList.add('active')
			n=index
		}
	})
	let n=0;
	function fn(dir){
		if(dir){
			n--
		}else{
		n++;
		}
		if(n===-1){
			n=imgs.length-1
		}
		
		if(n===imgs.length){
			n=0
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove('active')
			pagers[i].classList.remove('active');
		}
		pagers[n].classList.add('active');
	    imgs[n].classList.add('active')
	}
	let st=setInterval(fn,3000)
	banner.onmouseover=function(){
		clearInterval(st)
	}
	banner.onmouseout=function(){
		st=setInterval(fn,3000)
	}
	zjt.onclick=function(){
		fn()
	}
	yjt.onclick=function(){
		fn()
	}
	let flat=true
	yjt.onclick=function(){
		if(flat){
			flat=false
			fn()
		}
	}
	zjt.onclick=function(){
		if(flat){
			flat=false
			fn(1)
		}
	}
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flat=true
		})
	})
}


{
	let topbar=document.querySelector(".d")	
	console.log(topbar)
	let leftbar=document.querySelector(".cedh")
	let floor=document.querySelectorAll(".xyhbox")
	let btn=document.querySelectorAll(".btn")
	let cd=document.querySelectorAll(".cedh ul li span")
    var flag=true;
	console.log(cd)
	window.onscroll=function(){
		if(flag){
		let st=document.documentElement.scrollTop
		if(st>600){
			topbar.style.display="block"
		}else{
			topbar.style.display="none"
		}
		if(st>600){
			leftbar.style.display="block"
		}else{
			leftbar.style.display="none"
		}
		 floor.forEach(function(ele,index){
            if(st>=ele.offsetTop-80){
                for(let i=0;i<btns.length;i++){
                    btn[i].classList.remove("active");
//                  cd[i].classList.remove("active")
                }
                btn[index].classList.add("active");
//              cd[index].classList.add("active")
            }
			


        });
       }
	}
	
//楼层跳转		
	let floors=document.querySelectorAll(".xyhbox")
	console.log(floors)
	let btns=document.querySelectorAll(".btn")
	console.log(btns)
	 btns.forEach(function(ele,index){
        ele.onclick=function(){
            flag=false;
         
            let ot=floors[index].offsetTop-60;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)*30/300;
            let time=0;
            let t=setInterval(function(){
                now+=speed;
                time+=30;
                if(time==300){
                    clearInterval(t);
                    now=ot;
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },30)
        }

    })
	 
//	返回顶部
   let toptop=document.querySelector(".cedh .back")
   console.log(toptop)
   toptop.onclick=function(){
        let st=document.documentElement.scrollTop;
        let speed=st*30/500;
        let t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }
	 

}
//咪咕娱乐轮播图
{
	let imgs=document.querySelectorAll(".mgbox3-top .mgimg li")
	console.log(imgs)
	let btns=document.querySelectorAll(".mgbox3-top .cricle .cricle1 .cricle2")
	console.log(btns)
	btns.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				btns[i].classList.remove("active");
				imgs[i].classList.remove("active")
			}
			btns.classList.add('active')
			imgs.classList.add('active')
			n=index
		}
	})
	
}
