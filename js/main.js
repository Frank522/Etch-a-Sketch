const etch = document.createElement('div');
etch.setAttribute('id', 'mainDiv');

for(let i=0; i < 16; i++){
    const row = document.createElement('div');
    row.setAttribute('id', 'row')
    for(let j=0; j < 16; j++){
        const cell = document.createElement('div');
        cell.setAttribute('id', 'cell');
        row.appendChild(cell);
    }
    etch.appendChild(row);
}

document.querySelector('body').appendChild(etch);