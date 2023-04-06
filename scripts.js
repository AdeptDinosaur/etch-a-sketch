squareGrid(64);

let currentColor = 'black';

function resetGrid() {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Remove the current grid
  
    const squares = document.getElementById('textInput').value;
    squareGrid(squares); // Create a new grid with the updated value of squares
    
    }
  
  function updateTextInput(val) {
    document.getElementById('textInput').value = val;
    resetGrid(); // Call the resetGrid function to remove the current grid and create a new one with the updated value of squares
  }
// rainbow toggle

const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', () => {
    if (currentColor !== 'random') {
        currentColor = 'random';
    } else {
        currentColor = 'black';
    }
});

//color picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', (event) => {
    currentColor = event.target.value;
})


//establishment of grid of divs for etch board

function squareGrid(squares) {
    const container = document.getElementById('container');
    let columns = squares;
    let rows = squares;
    for (let i = 0; i < columns; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < rows; j++) {
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
            
          
            
            row.addEventListener('mouseover', () => {
                if (currentColor === 'black') {
                    row.style.backgroundColor = 'black';
                } else if (currentColor === 'random') {
                    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    row.style.backgroundColor = randomColor;
                } else {
                    row.style.backgroundColor = currentColor;
                }   
            })
        }
        container.appendChild(column);

    }
}





const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    resetGrid();
})