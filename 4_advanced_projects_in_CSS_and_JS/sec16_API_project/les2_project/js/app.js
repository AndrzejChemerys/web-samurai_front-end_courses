import '../sass/style.scss';

class Doggo {
    constructor() {
        this.apiUrl = 'https://dog.ceo/api';
        this.imgEl = document.querySelector('.featured-dog img');
        this.backgroundEl = document.querySelector('.featured-dog__background');
        this.tilesEl = document.querySelector('.tiles');
        this.spinnerEl = document.querySelector('.spinner');

        this.init();
    }

    listBreeds() {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(resp => resp.json())
            .then(data => data.message);
    }

    getRandomImage() {
        return fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(data => data.message);
    }

    getRandomImageByBreed(breed) {
        return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
            .then(resp => resp.json())
            .then(data => data.message);
    }

    const imgTag = document.querySelector('img');

    getRandomImageByBreed('boxer')
        .then(imgSrc => imgTag.setAttribute('src', imgSrc));

}