const etch = document.createElement('div');

let changeColor = (e) => {
    if(e.target.getAttribute('class') == 'cell') {
        e.target.classList.add('clicked');
    }
};

let generateBoard = (n) => {
    for(let i=0; i < n; i++){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for(let j=0; j < n; j++){
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
            cell.addEventListener('mouseover', changeColor);
        }
        etch.appendChild(row);
    }
};

let clearBoard = () => {
    etch.innerHTML = "";
};


etch.setAttribute('class', 'main');
generateBoard(16);
document.querySelector('body').appendChild(etch);





