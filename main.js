var game = {};

game.home = home();
game.kitchen = kitchen();
game.pot = pot();
game.colander = colander();
game.carrotsAndPeas = carrotsAndPeas();
game.butter = butter();
game.milk = milk();
game.hotDogs = hotDogs();
game.kraftDinner = kraftDinner();

function initNoodlesAndCheese() {
    game.noodles = noodles();
    game.cheesePacket = cheesePacket();
}

function initCutUpHotDogs() {
    game.cutUpHotDogs = cutHotDogs();
}

function initLocations() {
    game.sink = sink();
    game.stove = stove();
    game.cabinet = cabinet();
    game.fridge = fridge();
    game.freezer = freezer();
}

function listByType(thetype) {
    "use strict";
    $('.ingredients').empty();

    Object.keys(game).forEach(function (prop) {
        if (game[prop].type === thetype) {
            console.log(prop);
        }
    });
}

function describe(prop) {
    'use strict';
    var str = game[prop].description;
    appendWindow(str);
}

function appendWindow(str) {
    $('.js-content').append('<p>' + str + '</p>');
}

