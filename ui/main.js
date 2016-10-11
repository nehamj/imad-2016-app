console.log('Loaded!');
var e=document.getElementById('mn');
e.innerHTML="Web Application-1";

var im=document.getElementById('img');
var moveright=function(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+"px";
};
im.onclick=function(){
  var interval=setInterval(moveright,20);
};
