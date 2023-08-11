const pageContainer = document.createElement('div');
pageContainer.setAttribute('id', 'page-container');
document.body.appendChild(pageContainer);

const popBtn = document.createElement('button');
popBtn.setAttribute('id', 'popup-button');
popBtn.textContent = 'Generate New Grid';
pageContainer.appendChild(popBtn);

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
pageContainer.appendChild(gridContainer);

for (let i = 0; i < 256; i++) {
    gridContainer.insertAdjacentHTML('beforeend', `
        <div class="grid-item"></div>
    `);
}

const gridItems = document.getElementsByClassName('grid-item');

function getUserInput() {
    userInput = parseInt(window.prompt('How many squares per side do you want the new grid to be?', 'Value must be between 2 and 256'));
}

popBtn.addEventListener('click', () => {
    getUserInput();
    if (userInput >= 2 && userInput <= 256) {
        gridContainer.innerHTML = '';
        for (let i = 0; i < userInput; i++) {
            gridContainer.insertAdjacentHTML('beforeend', `
                <div class="grid-item"></div>
            `);
        }
    }
});