class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        console.log(rootSelector);
        this.sections = document.querySelectorAll('section');
        this.currentSectionIndex = 0;
        this.isThrottled = false;

        this.isScrolledIntoView(this.sections[0]);
    }

    isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        console.log(rect)
    }

    listenScroll = () => {
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(function () {

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

        scrollToCurrentSection = () => {
            this.sections[currentSectionIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    
}