document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.anim-bg');

    document.addEventListener('mousemove', function(event) {
        // console.log(event);
        const {clientX, clientY} = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        elements.forEach(element => {
            const ratioX = element.getAttribute('ratioX');
            const ratioY = element.getAttribute('ratioY');

            const moveX = clientX;
            const moveY = clientY;

            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        })
    })
})