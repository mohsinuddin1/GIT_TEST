const title=document.querySelector('.leftPanel');
const content=document.querySelector('.content');
const container=document.querySelector('.container');
const header=document.querySelector('.header');
const but=document.getElementById('mode');
const body = document.body;
but.addEventListener('click',(e)=>{
   container.classList.toggle("dark");
   body.classList.toggle("dark-mode");
   header.classList.toggle("dark-mode");
});

const addbtn=document.querySelector('.addbtn');
const inputBox=document.getElementById('input-box');
const list=document.querySelector('.list');
function createtask(text){
    const li=document.createElement('li');
    const temp=document.createElement('p');
    temp.classList.add('list-details');
    const cross=document.createElement('div');
    cross.classList.add("cross");
    const checkbox=document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type='checkbox';
    temp.textContent=text;
    

    li.appendChild(checkbox);
  
    list.appendChild(li);
    li.appendChild(temp);
    li.appendChild(cross);
}

addbtn.addEventListener('click',(e)=>{
    if(inputBox.value=="")
        alert("please enter the text");
    else{
        createtask(inputBox.value);
    }
    inputBox.value="";
    saveData(); 
})
list.addEventListener('click',(e)=>{
    if(e.target.matches(".checkbox")){
        let uncheckedNode = e.target;
        let taskTile = e.target.closest("li");
        let listDetails = taskTile.querySelector(".list-details");
        listDetails.classList.toggle("lineThrough");
        listDetails.classList.toggle("fade");
        uncheckedNode.classList.toggle("checked");
    }
    saveData();
})

list.addEventListener('click',(e)=>{
    if(e.target.matches(".cross")){
        let uncheckedNode = e.target;
        let childToRemove = e.target.closest("li");
     
       const parentElement=document.querySelector('.list');
       
       if (childToRemove && parentElement.contains(childToRemove)) {
        parentElement.removeChild(childToRemove);
      }
      saveData();
    }
})

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();