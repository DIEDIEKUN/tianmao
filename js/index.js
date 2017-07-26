function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
function show() {
    var menu= document.getElementsByClassName("eachMenu")[0];
    var recom = document.getElementsByClassName("recommend")[0];
    menu.onmouseenter = function () {
        recom.style.visibility = "visible";
    }
    menu.onmouseleave=function(){
        recom.style.visibility = "hidden";
    }
}
addLoadEvent(show);
