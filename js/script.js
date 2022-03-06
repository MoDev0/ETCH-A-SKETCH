const container=document.querySelector('.container');
let size=16;

const inputColor=document.getElementById("favcolor");
let color="blue";
//color : stores user's entered color

inputColor.addEventListener('input',function(){
    color=inputColor.value;    
    
    });

let sizeBtn=document.getElementById("sizeBtn");
sizeBtn.addEventListener('click',function(){
    size=prompt("please enter grid size, maximum is 100 ");

    if(size===null)// in case user canceled the 
        size=16;
    


    clearGrid();

});

function createGrid(size){
    if(size>100)return;
for (let i=0;i<(size*size);i++){
    const div=document.createElement('div');
    div.className="item";
    // div.addEventListener('mouseover',function(){div.style.backgroundColor=color;})
    div.addEventListener('mouseover',changeColor);
    div.addEventListener('mousedown',changeColor);



    container.appendChild(div);

}

container.style.gridTemplateColumns=`repeat(${size},1fr)`;
}


let eraseBtn=document.getElementById("btn");
eraseBtn.addEventListener('click',clearGrid);


function clearGrid(){
    container.innerHTML='';
    createGrid(size); 

}


let mouseDown=false;
document.body.onmousedown=()=>{mouseDown=true};
document.body.onmouseup=()=>{mouseDown=false};

function changeColor(e){
    if(e.type==='mouseover'&&!mouseDown) return; //change color when mouseover&&mousedown or mousedown only
        e.target.style.backgroundColor=color;



}




window.onload=()=>{
    createGrid(size);



}
    
       
    