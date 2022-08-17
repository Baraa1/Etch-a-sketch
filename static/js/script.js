const container = document.querySelector('.container');

// create 16x16 grid of square divs (100/16 = 6.25)
// every time the 1st loop runs once the 2nd loop runs 15 times so 16 in total which means 16 blocks are created
// uncomment the commented out code for further clarifacation
function initGrid(){
    for (let i = 0; i < 16; i++){
        const content = document.createElement('div');
        content.style.display = 'inline-block';
        // content.textContent = `${i}`;
        content.style.height = '6.25%';
        content.style.width = '6.25%';
        content.style.backgroundColor = 'red';
        content.classList.add('grid');
        container.appendChild(content);
        for (let j = 0; j < 15; j++){
            const content1 = document.createElement('div');
            content1.style.display = 'inline-block';
            // content1.textContent = `${j}`;
            content1.style.height = '6.25%';
            content1.style.width = '6.25%';
            content1.style.backgroundColor = 'red';
            content1.classList.add('grid');
            container.appendChild(content1);
        }
    }
}

function newGrid(){
    container.innerHTML = " ";
    const col = prompt('Enter the column squares')
    const row = prompt('Enter the row squares')
    // convert width and height to percentages
    let w = 100/col;
    let h = 100/row;

    for (let i = 0; i < col; i++){
        for (let j = 0; j < row; j++){
            const content1 = document.createElement('div');
            content1.style.display = 'inline-block';
            // content1.textContent = `${j}`;
            content1.style.height = `${h}%`;
            content1.style.width = `${w}%`;
            content1.style.backgroundColor = 'blue';
            content1.classList.add('grid');
            container.appendChild(content1);
        }
    }
    // add the event listeners again
    sketch();
}

let changeColor = function () {
    if (this.style.backgroundColor === 'yellow'){
        console.log('yellow');
        this.style.backgroundColor = 'red';
    } else {
        console.log('red');
        this.style.backgroundColor = 'yellow';
    }
}

function sketch(){
    const grid = document.querySelectorAll('.grid');
    grid.forEach(gElement => {
        gElement.addEventListener('mouseover', changeColor)
    });
}

document.querySelector('.btn').addEventListener('click', newGrid);
initGrid();
sketch();