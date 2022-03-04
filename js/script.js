const container=document.querySelector('.container');
function createGrid(){
    for (let i=0;i<(16*16);i++){
        const div=document.createElement('div');
        div.className="item";
    
        container.appendChild(div);

    }
    console.log(container);


}
container.style.gridTemplateColumns="repeat(16,1fr)";