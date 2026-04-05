document.addEventListener('DOMContentLoaded',()=>{
    const taskInput=document.getElementById("task-input");
    const addTaskBtn=document.getElementById("add-task-btn");
    const taskList =document.getElementById("task-list");
    const addTask=(event)=>{
        const taskText=taskInput.ariaValueMax.trim();
        if(!taskText){
            return;
        }
        const li=document.getElementById("li");
        li.textContent=taskText;
        taskList.appendChild
0
        
    }
    
})