

let wordOne = getEC('wordOne');
let wordTwo = getEC('wordTwo');
let agregarBtn = getEC('agregarBtn');
let boxOne = getEC('boxOne');
let boxTwo = getEC('boxTwo');
let generadorHtml = getEC('generadorHtml');
let generadorBox = getEC('generadorBox')
let wordOneA = [];
let wordTwoA = [];

agregarBtn.onclick = () =>{

    if(wordOne.value && wordTwo.value){
        
        wordOneA.push(wordOne.value);
        wordTwoA.push(wordTwo.value)
        //wordTwo.push(wordTwo.vahlue);       
            addElement(wordOneA, wordTwoA)        
        
    }else{
        console.log('No a escrito nunguna palabra para agregar')
    }
}

function getEC(e) {
    return document.getElementById(e);
}

console.log('hola')
