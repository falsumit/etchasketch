const pageContainer = document.createElement('div');
pageContainer.setAttribute('id', 'page-container');
document.body.appendChild(pageContainer);

const popupButton = document.createElement('button');
popupButton.setAttribute('id', 'popup-button');
popupButton.textContent = 'Generate New Grid';
pageContainer.appendChild(popupButton);

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
pageContainer.appendChild(gridContainer);

function makeGrid(size) {
    gridContainer.innerHTML = '';
    for (gridSize = 0; gridSize < size * size; gridSize++) {
        let gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'grid-item');
        gridContainer.appendChild(gridItem);
        gridContainer.style.cssText = `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr);`;
    }
}

makeGrid(16);

let userInput;

function getUserInput() {
    userInput = parseInt(window.prompt('How many squares per side do you want the new grid to be?', 'Value must be between 2 and 50'));
}

popupButton.addEventListener('click', () => {
    getUserInput();
    if (userInput >= 2 && userInput <= 50) {
        size = userInput;
        makeGrid(size);
    }
});

let gridChildren = gridContainer.getElementsByClassName('grid-item');

for (let i = 0; i < gridChildren.length; i++) {
    gridChildren[i].addEventListener('mouseover', (event) => {
        event.target.style.cssText = 'background-color: black;';
    });
}