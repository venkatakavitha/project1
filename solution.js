
var stat =document.querySelector("h5");
var addFriend =document.querySelector("#add");
var unFriend =document.querySelector("#remove");



addFriend.addEventListener("click",function(){
    stat.innerHTML="Friends";
    stat.style.color="green"
});
unFriend.addEventListener("click",function(){
    stat.innerHTML="Stranger";
    stat.style.color="red"

});
