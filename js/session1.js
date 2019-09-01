

var imgList=document.querySelectorAll(".img-item");
var lightBoxContainer=document.querySelector(".lightBox-container");
var close=document.getElementById("close");
var lightBox=document.querySelector(".lightBox");
var imgArry=[];
var currentIndex=0;
var next=document.getElementById("next");
var prev=document.getElementById("prev");
for(var i=0; i<imgList.length;i++){
    imgArry.push(imgList[i]);
    imgList[i].addEventListener("click",function(ev){
    currentIndex=imgArry.indexOf(ev.target);

        var imgPath=ev.target.src;
        lightBox.style.backgroundImage="URL('"+imgPath+"')";
        lightBoxContainer.classList.add("show")
    })
}
close.addEventListener("click",function(){
    lightBoxContainer.classList.remove("show");
})

next.addEventListener("click",function(){
    currentIndex=currentIndex+1;
    if(currentIndex>=imgList.length){
        currentIndex=0;
    }
    var nextImgPath =imgList[currentIndex].src;
    lightBox.style.backgroundImage="URL('"+nextImgPath+"')";
    
})
prev.addEventListener("click",function(){
    currentIndex=currentIndex-1;
    if(currentIndex<0){
        currentIndex=imgList.length-1;
    }
    var nextImgPath =imgList[currentIndex].src;
    lightBox.style.backgroundImage="URL('"+nextImgPath+"')";
    
})
//for right key
document.addEventListener("keydown",function(ev){
if(ev.keyCode==39)
{
    currentIndex=currentIndex+1;
    if(currentIndex>=imgList.length){
        currentIndex=0;
    }
    var nextImgPath =imgList[currentIndex].src;
    lightBox.style.backgroundImage="URL('"+nextImgPath+"')";
    
}
else if(ev.keyCode==37)
{
    currentIndex=currentIndex-1;
    if(currentIndex<0){
        currentIndex=imgList.length-1;
    }
    var nextImgPath =imgList[currentIndex].src;
    lightBox.style.backgroundImage="URL('"+nextImgPath+"')";
    
}else if(ev.keyCode==27)
{
    lightBoxContainer.classList.remove("show");
}
})