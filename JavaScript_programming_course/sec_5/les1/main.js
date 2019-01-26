// tutaj rozwiązanie

let btn = document.querySelector("button");
let list = document.querySelectorAll("li");
let i;
let a=10;

// LOOP

// btn.addEventListener("click", function(){
//     a++;
//     for (i=0; i<list.length; i++) {
//     list[i].style.display="block";
//     list[i].style.fontSize=a+"px";
    
// }

// });

// FREACH

btn.addEventListener("click", ()=>{
    
    list.forEach((list)=>{
        list.style.display="block";
        list.style.fontSize=a+"px";  
    })
    a++;
})