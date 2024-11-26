const uyeButon=document.getElementById("uyeol");
const girisButon=document.getElementById("girisyap");
const container=document.getElementById("container");

uyeButon.addEventListener("click",()=>{
    container.classList.add("sag-panel-aktif");
})
girisButon.addEventListener("click",()=>{
    container.classList.remove("sag-panel-aktif");
});