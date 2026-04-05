const slide=document.getElementsByClassName("slide");
const arrowLeft=document.getElementById("arrow-left");
const arrowRight=document.getElementById("arrow-right");
current=0;
//
function reset(){
    for(let i=0; i< slide.length;i++){
    slide[i].style.display="none";
}
}
//
function startSlide(){
    reset();
    slide[0].style.display="block";
}
//
function slideLeft(){
    reset();
    slide[current -1].style.display="block";
    current--;

}
//
function slideRight(){
    reset();
        slide[current +1].style.display="block";
        current++;
    }
    //
    arrowLeft.addEventListener("click",function(){
        if(current===0){
            current=slide.length;
        }
            slideLeft();
    });
    //
    arrowRight.addEventListener("click",function(){
        if(current===slide.length-1){
            current=-1;
        }
        slideRight();
    });
    slideStart();
