const BFcontainer = document.getElementById("hiddenFB")
const BBcontainer = document.getElementById("hiddenBB")
const Acontainer = document.getElementById("AB")
const Abtn = document.getElementById("Abtn")
const Bbtn = document.getElementById("Bbtn")

Abtn.addEventListener("click",()=>{
    BFcontainer.style.visibility = "hidden";
    BBcontainer.style.visibility = "hidden";
    Acontainer.style.visibility = "visible";
})
