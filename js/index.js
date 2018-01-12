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
	
	let flat=true
	yjt.onclick=function(){
		if(flat){
			
			alert(1)
			flat=false
			fn()
		}
	}
	zjt.onclick=function(){
		if(flat){
			alert(1)
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

//楼层跳转
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
	let mg=document.querySelector(".mgbox3-top")
	btns.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				btns[i].classList.remove("active");
				imgs[i].classList.remove("active")
			}
			btns[index].classList.add('active')
			imgs[index].classList.add('active')
			n=index
		}
	})
	let n=0;
	function stafn(){
		n++;
		if(n===imgs.length){
			n=0
		}
		for(let i=0;i<imgs.length;i++){
		
				btns[i].classList.remove("active");
				imgs[i].classList.remove("active")
			}
			btns[n].classList.add('active')
			imgs[n].classList.add('active')
//			n=index
	}
	let st=setInterval(stafn,2000)
	mg.onmouseover=function(){
		clearInterval(st)
	}
	mg.onmouseout=function(){
	 st=setInterval(stafn,2000)
	
	}

}
//优惠专区
{
	let inner=document.querySelector(".youhuiyoubig")
	let yhx=document.querySelectorAll(".yhsamll")
	let yh=document.querySelector(".youhuiyou")
	let l=document.querySelectorAll(".yhsamll").length
	let zyh=document.querySelector(".yhbtnz")
	let yyh=document.querySelector(".yhbtny")
	let num=4;
	let dir="right"
	let flag=true
	function move(){
		if(dir==="right"){
			num++
		}else{
			num--
		}

		inner.style.transition="all 1s";
		inner.style.marginLeft=-(num*241)+"px";
	}
	let st=setInterval(move,2000);
	yh.onmouseover=function(){
		clearInterval(st)

	}
	yh.onmouseout=function(){
		st=setInterval(move,2000)
		
	}
	
	inner.addEventListener('transitionend',function(){
		console.log(1);
		flag=true;
		if(num>=7){
			inner.style.transition="none";
			inner.style.marginLeft=0;		
			num=0;
		}
//		if(num==0){
////			alert(1)
//			inner.style.transition="none";
//			inner.style.marginLeft="-1687px";
//			num=7
//		}   
	});
	zyh.onclick=function(){

		if(flag){
		dir="left"
		flag=false;
		move()
		}
	}
	yyh.onclick=function(){
		if(flag){
			dir="right";
			flag=false;
			move()
		}
	}
	
}
//搜索框流量				
//获取焦点onfcous
{
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
	console.log(yjt)
	console.log(tu)
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
//选项卡
//{
//	let zi=document.querySelectorAll(".xyhbox .one  .titleright li")
//	let xyh=document.querySelectorAll(".xyhb  .xyhbottom")
//	let zi1=document.querySelectorAll(".xyhbox .yw  .titleright li")
//	let zi2=document.querySelectorAll(".xyhbox .phone  .titleright li")
//	console.log(zi1)
//	console.log(zi2)
//	console.log(zi)
//	console.log(xyh)
//	zi.forEach(function(ele,index){
//		ele.onmouseover=function(){
//			 for(let i=0;i<zi.length;i++){
////             zi[i].classList.remove("active");
//             xyh[i].classList.remove("active");
//          }
////			 this.classList.add("active");
//          xyh[index].classList.add("active");
//		}
//	})
//}
