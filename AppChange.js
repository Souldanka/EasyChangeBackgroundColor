var button = document.querySelector("button");

var isBackgroundApplied = false;

button.addEventListener("click", function(){
    if(isBackgroundApplied === false){
        document.querySelector("body").style.background = "green";
        isBackgroundApplied = true;
    } else {
        document.querySelector("body").style.background = "white";
        isBackgroundApplied = false;
    }
})