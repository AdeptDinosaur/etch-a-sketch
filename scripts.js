//input from button


//establishment of grid of divs for etch board


const container = document.getElementById('container');
let columns = 20;
let rows = 20;
for (let i = 0; i < columns; i++) {
    let column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j < rows; j++) {
        let row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
    container.appendChild(column);

}

//hover on mouse-over
const cells = document.querySelectorAll('.row');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });

})