const a=()=>{console.log("Funkcja a")};

// console.log('Hello!')

setTimeout(
    ()=>{
        const text = "done";
        console.log(text);
    }, 0
)
console.log('Koniec!');

a();