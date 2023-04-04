function updateTextInput(val) {
    document.getElementById('textInput').value=val;
    let squares = val;
    squareGrid(squares); 
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
