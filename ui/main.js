console.log('Loaded!');
var e=document.getElementById('mn');
e.innerHTML="Web Application-1";

var im=document.getElementById('img');

var moveright=function(){
   im.style.marginRight="1px";
};
im.onclick=function(){
  var interval=setInterval(moveright,20);
};
