// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
const spells = [{
    name: 'arcane-scepter',
    Cost: 12,
    Damage: 14
},
{
    name: 'entangle',
    Cost: 23,
    Damage: 9
},
{
    name: 'dragon blade',
    Cost: 38,
    Damage: 47
},
{
    name: 'star-fire',
    Cost: 33,
    Damage: 25
}];

let fungusHP = 100;
let yourAP = 100;

function onReady() {
    console.log("Ready to go!")

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function spellCast(spellName) {
    // update variables from attack - they cant fall below zero


}

function renderDom() {
    // update hp and ap

    // if his hp = 0 then you win and replace walk to dead class

    // if your ap = 0 then you lose and replace walk to jump class

    // if ap = 0 then disable all abilities

}


onReady()