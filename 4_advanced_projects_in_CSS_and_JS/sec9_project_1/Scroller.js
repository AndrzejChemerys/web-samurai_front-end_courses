class Scroller {
    constructor() {
        const rootElement = document.querySelector('#root');
        this.sections = document.querySelectorAll('section');
        this.currentSectionIndex = 0;
        this.isThrottled = false;
    }

    listenScroll = () => {
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(function () {
            this.isThrottled = false;
        }, 1000);

        const direction = event.wheelDelta < 0 ? 1 : -1;
        console.log(event.wheelDelta)

        scroll(direction);
    }
}