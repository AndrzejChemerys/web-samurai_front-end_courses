document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello world!');

    const rootElement=document.querySelector('#root');
    const sections = document.querySelectorAll('sections');

    document.addEventListener('mousewheel', function(event){
        console.log(event.whellDelta)
    })
})