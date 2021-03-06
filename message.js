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

//This is the function used to randomize Sarah's traits

function randomizeTrait(traits){
    var myTraits = [];
    for(i=0;i<5;i++){
        var trait = randomizeArray(traits);
        while(traits.indexOf(myTraits)>0){
            trait = randomizeArray(traits);
        }
        myTraits.push(trait)
    }
    return myTraits;
}

//This is the function used to calculate what activity Sarah will choose

function chooseActivity(person, activities, bannedActivities = []){
    let allScores = [];
    for(i=0;i<activities.length;i++){
        //Two types of activities that cannot be executed are the ones that have already been executed or that Sarah is too tired to do
        if((bannedActivities.indexOf(activities[i]) >= 0) || (person.energy < activities[i].energyScore)){
            allScores[i] = 0;  
        }
        else{
            //This is for the activities that can be completed
            allScores[i] = randomCapped(30,60);
            if(activities[i].isChore == true){
                allScores[i] += 40;
            }
            let activityTraits = activities[i].preferredTraits;
            let personTraits = person.traits;
            for(j=0;j<activityTraits.length;j++){
                for(k=0;k<personTraits.length;k++){
                    if(activityTraits[j] == personTraits[k]){
                        allScores[i] +=20;
                    }
                }
            }
        }
    }
    let maxScore = allScores[0];
    for(i=0;i<allScores.length;i++){
        if(allScores[i] > maxScore){
            maxScore = allScores[i];
        }
    }
    let maxIndex = allScores.indexOf(maxScore);
    //This is when no activity is eligible for execution 
    if(maxScore==0){
        return null;
    }
    return activities[maxIndex];

}


//This is a checker function used for debugging

function ok(message = 'OK!'){
    console.log(message);
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
const act8 = createActivity("Steal from the local cafe", ['mean', 'sporty', 'kleptomaniac', 'brave'], 70, false);
const chore1 = createActivity("Wash Dishes", ['workaholic', 'neat'], 20, true);
const chore2 = createActivity("Cook a Meal", ['workaholic', 'epicurean'], 50, true);
const chore3 = createActivity("Clean the Living Room", ['workaholic', 'neat'], 40, true);
const chore4 = createActivity("Pay the bills", ['workaholic'], 5, true);

const traits = ['outgoing', 'nice', 'brave', 'playful', 'epicurean', 'lazy', 'sporty', 'mean', 'kleptomaniac'];
const activities = [act1, act2, act3, act4, act5, act6, act7, act8, chore1, chore2, chore3, chore4];
const chores = [chore1, chore2, chore3, chore4];

//Step 4: Narrations - for this we will need an array with nicer descriptions of the activities

const narratedActivities = ["Sarah goes out of her apartment and chats with the neighbors about the latest buzz.", "Sarah picks up her phone and throws a monster party!",
                           "Sarah gets thirsty and decides to mix herself some cocktails.", "Getting bored, Sarah powers her PC and plays some Video Games.", "Sarah plunges on her couch and watches Netflix.", 
                           "Sarah goes out jogging.", "Feeling angry, Sarah bursts out of her apartment to harass her neighbors.", "After running out of coffee, Sarah decides to steal some from a coffee shop.",
                           "Sarah sees the dishes in the sink and decides to wash them.", "Feeling hungry, Sarah decides to prepare a meal.", "Sarah cleans the mess she made in the cleaning room.", 
                           "Sarah pays the bills."]
                           
const choreScolding = ["You haven't washed the dishes!", "You didn't cook the meal you promised!", "The living room is still a mess.", "You are late on your bills AGAIN."]
//Step 2: Now we will work on Sarah

const sarah = {
    name: 'Sarah',
    energy: 200 + random(50),
    traits: randomizeTrait(traits)
}

//Step 3: Sarah's day

//We need to keep track of the activities that Sarah is doing
var completedActivities = [];
var numChores = 0;

while(sarah.energy>0){
    //Sarah needs to select her activities
    var sarahActivity = chooseActivity(sarah, activities, completedActivities);
    //This is when Sarah cannot complete any more activities
    if(sarahActivity == null){
        console.log("Feeling tired, Sarah retires for the day.")
        sarah.energy = 0;
    }
    else{
        sarah.energy = sarah.energy - sarahActivity.energyScore;
        if(sarahActivity.isChore == true){
            numChores++;
        }
        //We need to ensure that the activities are not repeated
        completedActivities.push(sarahActivity);
        console.log(narratedActivities[activities.indexOf(sarahActivity)])
    }
}

console.log("Sarah's roommates come from after a long day of work.");

//Step 5: Chores - here we write the 'ending' if Sarah didn't complete all of her chores

if(numChores !=4){
    var roommates = ['Andrea', 'Lenora'];
    for(i=0;i<4;i++){
        if(completedActivities.indexOf(chores[i]) < 0){
            console.log(` - ${choreScolding[i]}` + ` yells ${roommates[random(2)]}`);
        }
    }
    console.log(" - We are tired of your lack of responsibility!");
    console.log("And with this said, Sarah is kicked out of her apartment.");
    console.log("END");
}
else{
    console.log("Sarah meets up with her roommates and all of them watch a movie.");
}


//The area below is reserved for testing

