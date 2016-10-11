console.log('Loaded!');
var e=document.getElementById('mn');
e.innerHTML="Web Application-1";

var im=document.getElementById('img');
marginRight=0;
var moveright=function(){
    marginRight=marginRight+1;
    im.style.marginRight=marginRight+"px";
};
im.onclick=function(){
  var interval=setInterval(moveright,20);
};
