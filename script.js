// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
const spells = [{
    name: 'arcane-scepter',
    cost: 12,
    damage: 14
},
{
    name: 'entangle',
    cost: 23,
    damage: 9
},
{
    name: 'dragon-blade',
    cost: 38,
    damage: 47
},
{
    name: 'star-fire',
    cost: 33,
    damage: 25
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

function spellCast(event, spellName) {
    // update variables from attack - they cant fall below zero
    const spellButtons = [document.getElementById('arcaneBtn'), document.getElementById('entangleBtn'), document.getElementById('dragon-bladeBtn'), document.getElementById('star-fireBtn')];

    switch (spellName) {
        case spells[0].name:
            yourAP -= spells[0].cost;
            fungusHP -= spells[0].damage;
            break;
        case spells[1].name:
            yourAP -= spells[1].cost;
            fungusHP -= spells[1].damage;
            break;
        case spells[2].name:
            yourAP -= spells[2].cost;
            fungusHP -= spells[2].damage;
            break;
        case spells[3].name:
            yourAP -= spells[3].cost;
            fungusHP -= spells[3].damage;
            break;

    }
    // render dom
    renderDom();
    // if ap = 0 then disable all abilities
    if (yourAP <= 0) {
        for (const button of spellButtons) {
            button.disabled = true;
        }
    }

}

function renderDom() {
    // update hp and ap
    if (fungusHP < 0) {
        fungusHP = 0;
    }
    if (yourAP < 0) {
        yourAP = 0;
    }
    document.querySelector("div.ap-text").textContent = yourAP.toString();
    document.querySelector("div.hp-text").textContent = fungusHP.toString();
    document.getElementById("ap-meter").value = yourAP;
    document.getElementById("hp-meter").value = fungusHP;

    // if his hp = 0 then you win and replace walk to dead class
    // if your ap = 0 then you lose and replace walk to jump class
    if (fungusHP <= 0) {
        document.querySelector('div.freaky-fungus').classList = "freaky-fungus dead";
    }
    else if (yourAP <= 0) {
        document.querySelector('div.freaky-fungus').classList = "freaky-fungus jump";
    }

}

onReady()