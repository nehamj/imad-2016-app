console.log('Loaded!');
var e=document.getElementById('mn');
e.innerHTML="Web Application-1";

var im=document.getElementById('img');
m=0;
p=0;
var moveright=function(){
   m=m+10;    
   im.style.marginRight=m+"px";
};
im.onclick= function(){
    p++;
  if(p==6){
      clearInterval(interval);
  }
  var interval=setInterval(moveright,20);
};
