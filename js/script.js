const container=document.querySelector('.container');

const inputColor=document.getElementById("favcolor");
let color="blue";
//color : stores user's entered color

inputColor.addEventListener('input',function(){
    color=inputColor.value;    
    
    });

function createGrid(){
for (let i=0;i<(16*16);i++){
    const div=document.createElement('div');
    div.className="item";
    div.addEventListener('mouseover',function(){div.style.backgroundColor=color;})


    container.appendChild(div);

}

container.style.gridTemplateColumns="repeat(16,1fr)";
}


let eraseBtn=document.getElementById("btn");
eraseBtn.addEventListener('click',function(){

   container.innerHTML='';
   createGrid();


 
});







window.onload=()=>{
    createGrid();


}
    
       
    