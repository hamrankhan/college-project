const beginnerbtn = document.getElementById('btn1');
const advancebtn = document.getElementById('btn2');

const beginnerBodyMap = document.querySelector('#beginner-body-map');
const advanceBodyMap = document.querySelector('#advanced-body-map');

beginnerbtn.addEventListener("click", () => {
    beginnerBodyMap.style.display = "block";
    advanceBodyMap.style.display = "none";
})

advancebtn.addEventListener("click", () => {
    beginnerBodyMap.style.display = "none";
    advanceBodyMap.style.display = "block";
})