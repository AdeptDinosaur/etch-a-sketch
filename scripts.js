squareGrid(64);

function resetGrid() {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Remove the current grid
  
    const squares = document.getElementById('textInput').value;
    console.log(squares);
    squareGrid(squares); // Create a new grid with the updated value of squares
  }
  
  function updateTextInput(val) {
    document.getElementById('textInput').value = val;
    resetGrid(); // Call the resetGrid function to remove the current grid and create a new one with the updated value of squares
  }



//input from button to be deprecated...
window.onload=function(){
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        let squares;
        do { 
            squares = prompt("Enter squares per side up to 100:");
            squares = Number(squares);
            if (squares > 100) {
                alert("Please enter a number less than 100.")
            }
        } while (squares > 100);
        console.log(squares);
        squareGrid(squares);
    })
}

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
                row.style.backgroundColor = 'black';
            })
        }
        container.appendChild(column);

    }
}
