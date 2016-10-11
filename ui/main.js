console.log('Loaded!');
var e=document.getElementById('mn');
e.innerHTML="Web Application-1";

var im=document.getElementById('img');
var m=0;
var p=0;
im.onclick= function(){
    var interval=setInterval(function(){
      p++;
      m=m+10;    
      im.style.marginRight=m+"px";
      if(p==6){
         clearInterval(interval);
      }
    });
};
