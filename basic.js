function handleClick(){
    const title=document.getElementsByClassName("one")[0];
   title.innerHTML="I am a good developer";
}
function changeStyle(){
    const content=document.getElementsByClassName("four")[0];
    content.style.backgroundColor="red";
    content.style.color="white";
}
function addElement(){
    const container=document.getElementsByTagName("ol")[0];
const newElement=document.createElement("li");
newElement.textContent="Gomathi";
container.appendChild(newElement);

}
function removeElement(){
    const build=document.getElementsByTagName("ul")[0];
    if(build.lastElementChild){
        build.removeChild(build.lastElementChild);
    }
}
function toggleHighlight(){
    const high=document.getElementsByClassName("three")[0];
    high.classList.toggle("highlight");
}
function changeImage(){
    const image=document.getElementsByTagName("img")[0];
    image.src="nilla2.jpg";

}
function updateParagraph(){
    const input=document.getElementsByTagName("input")[0].value;
    const link=document.getElementById("display")
    link.textContent=input;
}
let count=0;
function countClick(){
    count++;
    const counter=document.getElementById("counter");
    counter.textContent=`Clicks:${count}`;
}
function toggleText(){
    const text=document.getElementById("text");
    if(text.style.display==="none"){
        text.style.display="block";
    }
    else{
         text.style.display="none";
    }
}
function backgroundColor(){
    const colors=["red","blue","yellow","pink","white"];
    const random=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[random];
}

const box=document.getElementById("box");
box.addEventListener("mouseover",()=>box.style.backgroundColor="green");
box.addEventListener("mouseout",()=>box.style.backgroundColor="red");

function copyText(){
    const input1=document.getElementById("input1").value;
        const input2=document.getElementById("input2").value=input1;
}
function checkInput(){
const input=document.getElementById("input").value;
document.getElementById("btn").disabled=input.trim()==="";
}