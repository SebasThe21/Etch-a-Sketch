const mainContainer=document.querySelector(".container");
const btn=document.querySelector(".btn-delete");
const btn1=document.querySelector(".btn-user");
let grid=16;
showgrid(grid);

btn1.addEventListener('click',()=>{
    let userInput=prompt("Insert the number of divs, maximum 100")


    grid=parseInt(userInput);

    if (isNaN(grid) || grid <= 0 || grid > 100) {
        alert("Please enter a valid number.");
        return;  
    }
    console.log(grid)
    showgrid(grid);

})
console.log(grid)
function showgrid(grid){
    mainContainer.innerHTML = '';
    for(let i=1;i<=grid*grid;i++){
        
        const div=document.createElement("div");
       
        div.classList.add('item')
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor=getRandomColor()
            div.classList.add('active');
        })
       div.style.flex=`1 1 calc(100% /${grid})`;
        mainContainer.appendChild(div);

     
    }
   
}
function getRandomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`
}
btn.addEventListener('click', () => {
    const divs = mainContainer.querySelectorAll('.item');

    divs.forEach(div => {
        div.style.backgroundColor = ''; 
       
    });
});
 



