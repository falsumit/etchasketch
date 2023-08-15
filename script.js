const pageContainer = document.getElementById('page-container');
const getSize = document.getElementById('get-size');
const reset = document.getElementById('reset');
const pixelGrid = document.getElementById('pixel-grid');
let pixels = pixelGrid.querySelectorAll('#pixel-grid > div');

let size = 16;

function makeGrid(size) {
    pixelGrid.innerHTML = '';
    for (gridSize = 0; gridSize < size * size; gridSize++) {
        let pixel = document.createElement('div');
        pixel.classList.toggle('pixel');
        pixelGrid.appendChild(pixel);
        pixelGrid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    }
}
makeGrid(size);

function colorPixels() {
    pixels = pixelGrid.querySelectorAll('#pixel-grid > div');
    pixels.forEach((item) => {
        const pixel = item;
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add('pixel-color');
        });
    });
}
colorPixels();

getSize.addEventListener('click', () => {
    size = parseInt(window.prompt('How big do you want the new grid to be?', 'Must be between 2 and 50'));
    if (size >= 2 && size <= 50) {
        makeGrid(size);
        colorPixels();
    }
});

reset.addEventListener('click', () => {
    pixelGrid.innerHTML = '';
    makeGrid(size);
    colorPixels();
});