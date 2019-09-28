class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        console.log(rootSelector);
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

        // scroll(direction);

        scroll = (direction) => {
            console.log(this.section)
            if (direction === 1) {
                const isLastSection = this.currentSectionIndex === this.sections.length - 1;
                if (isLastSection) return;
            } else if (direction === -1) {
                const firstSection = currentSectionIndex === 0;
                if (firstSection) return;
            }
            this.currentSectionIndex = this.currentSectionIndex + direction;
            console.log(currentSectionIndex);
    
            scrollToCurrentSection();
        }
    }
}