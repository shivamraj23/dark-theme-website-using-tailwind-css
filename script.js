let inputbox=document.getElementById("searchinput");

inputbox.addEventListener('keydown',checkkey);
function checkkey(event){
    console.log(event.key);
}