const pageContainer = document.createElement('div');
pageContainer.setAttribute('id', 'page-container');
document.body.appendChild(pageContainer);

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
pageContainer.appendChild(gridContainer);

gridContainer.insertAdjacentHTML('beforeend', `
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
`);

// const gridItem = document.createElement('div');
// gridItem.setAttribute('class', 'grid-item');
// gridContainer.appendChild(gridItem);

