document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello world!');

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('sections');
    let currentSectionIndex = 0;

    document.addEventListener('mousewheel', function (event) {
        const direction = event.wheelDelta < 0 ? 1 : -1;
        if (direction === 1) {
            const isLastection = currentSectionIndex === sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }
        currentSectionIndex = currentSectionIndex + direction;
        console.log(event.whellDelta)
    })
})