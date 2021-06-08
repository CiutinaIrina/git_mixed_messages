/* this is my first JS project
i will put this on my github
i need to come up with a random generator
the problem says that i need three different pieces of data
i pick string, number and boolean

i want to come up with a program that decides what a person does during that day
i will control a household with 3 women
one of them is Sarah and i will control her

sarah will carry all sorts of activities
string is the name of the activity
number is how many activities she can carry in that day
some activities are chores 
boolean is if she completed her chores or not
if she didn't, her roommates will kick her out

NOW PLANNING

the algorithm is as follows:

sarah has an x amount of energy
she spends that energy on activities
what activities she picks depends on her traits (but only make her more likely to complete certain tasks)
she also has a set of chores to complete
if she doesn't complete all of her chores, she will get evicted
she will stop completing activities when she runs out of energy

STEP 1: define the activities

here we use factory functions to write off all the activities she can perform. there are in total of 12 activities, 4 of which are chores
the properties of one activity are as follows: an array of traits that this activity benefits from and the amount of energy sarah spends doing it
and also the name

STEP 2: sarah

sarah will be an object with properties : name, energy and traits
sarah can have only 5 traits
there are 15 available traits for her
they will be randomized

0.1 = built a randomizer for an array

energy will also be random

0.2 = built a randomizer for numbers between x and y

STEP 3: sarah and the day

here we need to simulate sarah's day
now we need to select what activity sarah chooses,
she can choose from 12 activities
how does she choose?
we put all of our activities in an array
and sarah reads this array
we calculate which activity she is most likely to do
and then pick that and substract the amount of energy it takes

3.1 - build an activity calculator,
the function takes sarah and the list of activities
and calculates the preference
preference first starts as a random number

0.3 - make an rng

then you add bonuses depending of traits
add a small bonus to chores
and at the end of the day, the ability with the highest score is picked and then deleted
for an ability to be eligible, it has to demand less energy than sarah currently has
repeat until sarah ran out of energy 

STEP 4: narration

you should write pretty text describing what sarah does 

STEP 5: chores

if sarah didn't complete her set of chores, she gets evicted
write a message dictating that


*/





