const container=document.querySelector('.container');
// function createGrid(){
//     for (let i=0;i<(16*16);i++){
//         const div=document.createElement('div');
//         div.className="item";
    
//         container.appendChild(div);

//     }
//     console.log(container);

//     container.style.gridTemplateColumns="repeat(16,1fr)";

// }

for (let i=0;i<(16*16);i++){
    const div=document.createElement('div');
    div.className="item";

    container.appendChild(div);

}
console.log(container);

container.style.gridTemplateColumns="repeat(16,1fr)";






const items=document.querySelectorAll('div.item');
items.forEach(item => {
item.addEventListener('mouseover',function(){item.style.backgroundColor="black";


});
    
});