let bodyElement=document.body;
console.log(bodyElement)


function click(){
    //range of hexidecimal 
    const range="E89A3401265F"
    let collor=""
    for(let i=0;i<6;i++){
        collor+=range[Math.round(Math.random()*(range.length-1))];
    }
    bodyElement.style.backgroundColor=`#${collor}`;
}

click();
document.getElementsByClassName("multi_collor_button")[0].addEventListener("click",()=>{
    const range="E89A3401265F"
    let collor=""
    for(let i=0;i<6;i++){
        collor+=range[Math.round(Math.random()*(range.length-1))];
    }
    bodyElement.style.backgroundColor=`#${collor}`;
})