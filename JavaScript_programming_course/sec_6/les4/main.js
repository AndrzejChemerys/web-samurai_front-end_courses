// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener("click", function(){
    let x = event.clientX+1;
    let y = event.clientY+1;
    console.log(`asd ${x} --- ${y}`);

    if ((x%2==0)&&(y%2==0)){
        console.log(`x parzyste`)
        document.body.style.backgroundColor = "red";
    } else if (!(x%2==0)&&!(y%2==0)){
        console.log(`nieparzyste`)
        document.body.style.backgroundColor = "blue";
    } else {
        console.log(`rozne`)
        document.body.style.backgroundColor = "green";
    }
    
})