document.querySelectorAll("[data-coming]").forEach(function(el){
  el.addEventListener("click",function(){
    var toast=document.querySelector(".toast");
    toast.textContent=el.dataset.coming+" — sezione in preparazione";
    toast.classList.add("show");
    window.setTimeout(function(){toast.classList.remove("show")},2400);
  });
});
var toggle=document.querySelector(".menu-toggle");
if(toggle){toggle.addEventListener("click",function(){
  var nav=document.querySelector(".site-nav");
  var open=nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded",String(open));
});}
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener("click",function(){var n=document.querySelector(".site-nav");if(n)n.classList.remove("open")})});