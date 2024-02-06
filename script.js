const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addItem(){
    if(inputBox.value.length>0){
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        inputBox.value="";

        let cross=document.createElement("span");
        cross.innerHTML=""
        li.appendChild(cross)
        saveData();
    }
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();