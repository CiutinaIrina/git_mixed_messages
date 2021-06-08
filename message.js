//Step 0: Build the necessary functions

function random(nr){
    return Math.floor(Math.random()*nr);
}

function randomizeArray(array){
    let l = array.length;
    return array[random(l)];
}

function randomCapped(min, max){
    let dif = max - min;
    return random(dif) + min;
}

//