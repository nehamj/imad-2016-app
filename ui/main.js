console.log('Loaded!');
var e=document.getElementById('mn');
e.innerHTML="Web Application-1";

var im=document.getElementById('img');
var m=0;
var p=0;
var moveright=function(){
   m=m+10;    
   im.style.marginRight=m+"px";
};
im.onclick= function(){
    p++;
  var interval=setInterval(moveright);
  if(p==6){
      clearInterval(interval);
  }
};
