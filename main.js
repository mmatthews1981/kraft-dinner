var game = {};

game.home = home();
game.kitchen = kitchen();

function initFreezerContents() {
    'use strict';
    game.carrotsAndPeas = carrotsAndPeas();
}

function initFridgeContents() {
    'use strict';
    game.butter = butter();
    game.milk = milk();
    game.hotDogs = hotDogs();
}

function initCabinetContents() {
    'use strict';
    game.pot = pot();
    game.colander = colander();
    game.kraftDinner = kraftDinner();
}

function initNoodlesAndCheese() {
    'use strict';
    game.noodles = noodles();
    game.cheesePacket = cheesePacket();
}

function initCutUpHotDogs() {
    'use strict';
    game.cutUpHotDogs = cutHotDogs();
}

function initLocations() {
    'use strict';
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

function appendWindow(str) {
    'use strict';
    $('.js-content').append('<p>' + str + '</p>');
}

function describe(prop) {
    'use strict';
    var str = game[prop].description;
    appendWindow(str);
}
