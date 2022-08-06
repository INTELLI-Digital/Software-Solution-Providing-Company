var lastScrollTop = 0;
let move = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function() { 
var st = window.pageYOffset || document.documentElement.scrollTop; 
if (st > lastScrollTop){
   move = move + 10;
   $(".chorki").css({
    "transform": "rotate("+move+"deg)"
   })
     
} else {
move = move - 10;
$(".chorki").css({
    "transform": "rotate("+move+"deg)"
   })
}
lastScrollTop = st;
}, false);