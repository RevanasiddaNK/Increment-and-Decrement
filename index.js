const countValue = document.querySelector('#counter');
//get the value from UI
let value = parseInt(countValue.innerText);

function increment(){
    value++;
    countValue.innerText = value;
}

function decrement(){
    value--;
    countValue.innerText = value;
}

/*
const increment = () => {
    //update the value
    value++;
    //set the value onto UI
    countValue.innerText = value;
};

const decrement = () => {
    //update the value
    value--;
    //set the value onto UI
    countValue.innerText = value;
};
*/

