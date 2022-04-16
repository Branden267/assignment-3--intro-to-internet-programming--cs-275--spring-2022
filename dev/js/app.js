window.onload = () => {
    // Add your code below
};

let createMatrix =(input) => {
    let lengthMatrix = input*input;
    let Matrix = new Array(lengthMatrix);
    let number=1;

    for (let i = 0; i < lengthMatrix; i++) {

        Matrix[i] = number++;

    }

    return Matrix;

};

let initializeNewMatrix = (input, NewMatrix) => {
    let lengthMatrix = input*input;
    let j = 1;
    for (let i = 0; i < lengthMatrix/2;i++ ) {

        if (j*(input-1) === i) {

            j++;

        }

        else {

            let copy = NewMatrix[i];
            NewMatrix[i] = NewMatrix[lengthMatrix -i -1];
            NewMatrix[lengthMatrix -i -1] = copy;

        }
    }
};

let showMatrix = (Matrix,input, name) => {
    let outputMatrix = name;
    let lengthMatrix = Matrix.length;
    outputMatrix += `<table>`;
    let j = 1;
    outputMatrix +=`<tr>`;
    for (let i = 0; i < lengthMatrix; i++) {

        if (j*(input-1) === i) {

            outputMatrix += `<td class = elementsdiag>` + Matrix[i] + `</td>`;
            
        }
        else {

            outputMatrix += `<td class = elementsmatrix>` + Matrix[i] + `</td>`;

        }
        if (i == (j*input-1)) {

            outputMatrix +=`<tr>`;
            j++;

        }
    }

    outputMatrix +=`</table>`;
    return outputMatrix;

};

let input = 1;
while (input < 2) {
    input = window.prompt(`Enter the size of the Matrix`);
    input = parseInt(input, 10);
    if (!Number.isInteger(input)){

        alert(`The size of the Matrix should be greater than 1`);
        input = 1;

    }
    else {

        input = parseInt(input, 10);

    if (input < 2) 
        
        alert(`The number needs to be greater than 1`);
    }


}

