//banner 轮播图
{
	let imgs=document.querySelectorAll('.img-box li')
	let pagers=document.querySelectorAll('.xiaoyuan li')
	let banner=document.querySelector(".banner")
	let xiayi=document.querySelector(".jty")
	let shangyi=document.querySelector(".jtz")
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
    let n=0
	function bannerFn(dir){
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
	let st=setInterval(bannerFn,2000)
	banner.onmouseover=function(){
		clearInterval(st)
	}
	banner.onmouseout=function(){
		st=setInterval(bannerFn,2000)
	}
	xiayi.onclick=function(){
		bannerFn()
	}
	shangyi.onclick=function(){
		bannerFn()
	}
	let flat=true
	xiayi.onclick=function(){
		if(flat){
			flat=false
			bannerFn()
		}
	}
	shangyi.onclick=function(){
		if(flat){
			flat=false
			bannerFn(1)
		}
	}
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flat=true
		})
	})
}

//{
//	let imgs=document.querySelectorAll('.img-box li')
//	let pagers=document.querySelectorAll('.xiaoyuan li')
//  let banner=document.querySelector(".banner")
// 	let zjt=document.querySelector(".jtz")
// 	let yjt=document.querySelector(".jty")
//
//
//	pagers.forEach(function(ele,index){
//		ele.onclick=function(){
//			for(let i=0;i<imgs.length;i++){
//				pagers[i].classList.remove('active');
//				imgs[i].classList.remove('active')
//			}
//			this.classList.add('active');
//			imgs[index].classList.add('active')
//			n=index
//		}
//	})
//	let n=0;
//	function fn(dir){
//		if(dir){
//			n--
//		}else{
//		n++;
//		}
//		if(n===-1){
//			n=imgs.length-1
//		}
//		
//		if(n===imgs.length){
//			n=0
//		}
//		for(let i=0;i<imgs.length;i++){
//			imgs[i].classList.remove('active')
//			pagers[i].classList.remove('active');
//		}
//		pagers[n].classList.add('active');
//	    imgs[n].classList.add('active')
//	}
//	let st=setInterval(fn,3000)
//	banner.onmouseover=function(){
//		clearInterval(st)
//	}
//	banner.onmouseout=function(){
//		st=setInterval(fn,3000)
//	}
//	
//	let flag=true
//	yjt.onclick=function(){
//		if(flag){
//			flag=false
//			fn()
//		}
//	}
//	zjt.onclick=function(){
//		if(flag){
//			flag=false
//			fn(1)
//		}
//	}
//	imgs.forEach(function(ele){
//		ele.addEventListener("transitionend",function(){
//  		flag=true;
//  	})
//		
//	})
//}

//楼层跳转
{
	let topbar=document.querySelector(".d")	

	let leftbar=document.querySelector(".cedh")
	let floor=document.querySelectorAll(".xyhbox")
	let btn=document.querySelectorAll(".btn")
	let cd=document.querySelectorAll(".cedh ul li span")
    var flag=true;

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
                for(let i=0;i<btn.length;i++){
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

	let btns=document.querySelectorAll(".btn")

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
	let imgs=document.querySelectorAll(".asdbv")
	console.log(imgs)
	let yuandian=document.querySelectorAll(".mgbox3-top .cricle .cricle1 .cricle2")
	console.log(yuandian)
	let mg=document.querySelector(".mgbox3-top")
	yuandian.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<btns.length;i++){
				yuandian[i].classList.remove("active")
				imgs[i].classList.remove("active")
			}
			yuandian[index].classList.add('active')
			imgs[index].classList.add('active')
			n=index
		}
	})
	let n=0;
	function stafn(){
		n++;
		if(n === imgs.length) {
			n = 0
		}
			for(let i=0;i<imgs.length;i++){
				yuandian[i].classList.remove("active")
				imgs[i].classList.remove("active")
			}
			yuandian[n].classList.add("active")
			imgs[n].classList.add("active")
//			n=index
	}
	let st=setInterval(stafn,1000)
	mg.onmouseover=function(){
		clearInterval(st)
	}
	mg.onmouseout=function(){
	 st=setInterval(stafn,1000)
	
	}

}

{
	let next = document.querySelector(".yhbtny");
	let prev = document.querySelector(".yhbtnz");
	let danping = document.querySelector(".youhuiyoubig");
	let box=document.querySelector(".youhuiyou")
	let n=4
	let flag=true
	let dir="right"
	let st=setInterval(moveFu,2000)
	function moveFu(){
		if(dir==="right"){
			n++
		}else{
			n--
		}
		danping.style.marginLeft=-n*241+"px"
		danping.style.transition="all 1s"
	}
	danping.addEventListener("transitionend",function(){
		flag=true
		if(n===11){
			n=4
			danping.style.transition="none"
			danping.style.marginLeft="-964px"
		}
		if(n===0){
			n=7
			danping.style.transition="none"
			danping.style.marginLeft="-1687px"
		}
	})
	window.onblur=box.onmouseover=function(){
		clearInterval(st);
		}
	window.onfocus=box.onmouseout=function(){
		st=setInterval(moveFu,2000)
	}
        next.onclick=function(){
        	   if(flag){
        	   	dir="right"
        	   	flag=false
        	   	moveFu();
        	   }
        }
         prev.onclick=function(){
         	if(flag){
         		dir="left"
         		flag=false
         		moveFu();
         	}
         }
}
//优惠专区
//{
//	let inner=document.querySelector(".youhuiyoubig")
//	let yhx=document.querySelectorAll(".yhsamll")
//	let yh=document.querySelector(".youhuiyou")
//	let l=document.querySelectorAll(".yhsamll").length
//	let zyh=document.querySelector(".yhbtnz")
//	let yyh=document.querySelector(".yhbtny")
//	let num=4;
//	let dir="right"
//	let flag=true
//	function move(){
//		if(dir==="right"){
//			num++
//		}else{
//			num--
//		}
//
//		inner.style.transition="all 1s";
//		inner.style.marginLeft=-(num*241)+"px";
//	}
//	let st=setInterval(move,3000);
//	yh.onmouseover=function(){
//		clearInterval(st)
//
//	}
//	yh.onmouseout=function(){
//		st=setInterval(move,3000)
//		
//	}
//	
//	inner.addEventListener('transitionend',function(){
//
//		flag=true;
//		if(num>=7){
//
//			inner.style.transition="none";
//			inner.style.marginLeft="1687px";		
//			num=0;
//		}
//		if(num===0){
////			alert(1)
//			inner.style.transition="none";
//			inner.style.marginLeft="-1687px";
//			num=7
//		}   
//	});
//	zyh.onclick=function(){
//
//		if(flag){
//		dir="left"
//		flag=false;
//		move()
//		}
//	}
//	yyh.onclick=function(){
//		if(flag){
//			dir="right";
//			flag=false;
//			move()
//		}
//	}
//	
//}
//搜索框流量				
{
	//获取焦点onfcous
	let con=document.querySelector(".sousuokuang")
	con.onfocus=function(){
			if(con.value="流量"){
				con.value=""
			}
		}
	//失去焦点onblur;
		con.onblur=function(){
			if(con.value=="")
				con.value="流量"   
		} 
}
//咪咕娱乐		
{
	let yjt=document.querySelectorAll(".mgbox3-bottom h4 span img")
	
	let tu=document.querySelectorAll(".mgbox3-juti")
//	console.log(yjt)
//	console.log(tu)
	yjt.forEach(function(ele,index){
		ele.onmouseover=function(){
			 for(let i=0;i<yjt.length;i++){
//              ywz[i].classList.remove("active");
                tu[i].classList.remove("active");
            }
//			 this.classList.add("active");
            tu[index].classList.add("active");
		}
	})
}
//侧导航开始
{
	let cenav=document.querySelectorAll(".aside ul li")
	console.log(cenav)
	let navbox=document.querySelectorAll(".navbox")
	console.log(navbox)
	let banner=document.querySelector(".banner")
	cenav.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<cenav.length;i++){
				cenav[i].classList.remove("active")
				navbox[i].classList.remove("active")
			}

			cenav[index].classList.add("active")
			navbox[index].classList.add("active")
			
		}
//		navbox[index].onmouseleave=ele.onmouseleave=function(){
//      	for(let i=0;i<navbox.length;i++){
//          	 navbox[i].classList.remove("active")
//     		}
//      }
	})
	 banner.onmouseleave=function(){
	 	for(let i=0;i<navbox.length;i++){
            	 navbox[i].classList.remove("active")
       		}
	 }
}
{
	//获取焦点onfcous
	let con=document.querySelector(".kuang")
	con.onfocus=function(){
			if(con.value="请输入手机号"){
				con.value=""
			}
		}
	//失去焦点onblur;
		con.onblur=function(){
			if(con.value=="")
				con.value="请输入手机号"   
		} 
}

{
	let topinput=document.querySelector(".head2_search .sousuo")
	//获取焦点onfcous

	topinput.onfocus=function(){
			if(topinput.value="流量"){
				topinput.value=""
			}
		}
	//失去焦点onblur;
		topinput.onblur=function(){
			if(topinput.value=="")
				topinput.value="流量"   
		} 
}
