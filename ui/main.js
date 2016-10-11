console.log('Loaded!');
var e=document.getElementById('mn');
e.innerHTML="Web Application-1";

var im=document.getElementById('img');
m=0;

var moveright=function(){
   m=m+10;    
   im.style.marginRight=m+"px";
};
im.onclick=function(){
  var interval=setInterval(moveright,20);
};
