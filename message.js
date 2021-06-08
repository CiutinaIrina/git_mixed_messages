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

//Step 1: We will define the activities : 12 activities, 4 being chores
//Now to make the factory function

const createActivity = (named, traits, energy, chore) =>
{ return {
   name: named,
   preferredTraits: traits,
   energyScore: energy,
   isChore: chore
}}

const act1 = createActivity("Gossip with the neighbors", ['outgoing', 'nice'], 15, false);
const act2 = createActivity("Throw a house party", ['outgoing', 'brave', 'playful'], 100, false);
const act3 = createActivity("Mix Cocktails", ['epicurean', 'lazy'], 15, false);
const act4 = createActivity("Play Video Games", ['playful', 'lazy'], 60, false);
const act5 = createActivity("Watch Netflix", ['lazy'], 10 , false);
const act6 = createActivity("Go Jogging", ['sporty'], 80, false);
const act7 = createActivity("Argue with the neighbors", ['outgoing', 'mean'], 25 , false);
const act8 = createActivity("Steal from the local cafe", ['mean', 'sporty', 'kleptomaniac'], 70, false);
const chore1 = createActivity("Wash Dishes", ['workaholic', 'neat'], 20, true);
const chore2 = createActivity("Cook a Meal", ['workaholic', 'epicurean'], 50, true);
const chore3 = createActivity("Clean the Living Room", ['workaholic', 'neat'], 40, true);
const chore4 = createActivity("Pay the bills", ['workaholic'], 5, true);
