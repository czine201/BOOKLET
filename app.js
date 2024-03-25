const arrow = document.querySelectorAll(".arrow");
const bookletLists = document.querySelectorAll(".booklet-list");

arrow.forEach((arrow, i)=>{
arrow.addEventListener("click", ()=>{
console.log("you clicked to: " +i)
})
})
