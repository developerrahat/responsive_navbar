var bars = document.getElementById("bars");
bars.addEventListener("click",function(){
    document.getElementById("main-nav").style.left= 0;
})
document.getElementById("close-bar").addEventListener("click",function(){
    document.getElementById("main-nav").style.left= "-320px";

})