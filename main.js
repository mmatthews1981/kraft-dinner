var game = {};

game.home = home();
game.kitchen = kitchen();

function initFreezerContents() {
    'use strict';
    game.carrotsAndPeas = carrotsAndPeas();
}

function listFreezerContents(){
    $('.js-freezer-contents').empty();

    Object.keys(game).forEach(function (prop) {
        if(game[prop].state === 'freezer') {
            var item = '<li class="js-ingredient" data-prop="'+prop+'">' + game[prop].name + '</li>';
            $('.js-freezer-contents').append(item);
        }
    });
}

function initFridgeContents() {
    'use strict';
    game.butter = butter();
    game.milk = milk();
    game.hotDogs = hotDogs();
}

function listFridgeContents(){
    $('.js-fridge-contents').empty();

    Object.keys(game).forEach(function(prop) {
        if(game[prop].state === 'refrigerator') {
            var item = '<li class="js-ingredient"  data-prop="'+prop+'">' + game[prop].name + '</li>';
            $('.js-fridge-contents').append(item);
        }
    });
}

function initCabinetContents() {
    'use strict';
    game.pot = pot();
    game.colander = colander();
    game.kraftDinner = kraftDinner();
}

function listCabinetContents(){
    $('.js-cabinet-contents').empty();

    Object.keys(game).forEach(function(prop) {
        if(game[prop].state === 'cabinet') {
            var item = '<li class="js-ingredient"  data-prop="'+prop+'">' + game[prop].name + '</li>';
            $('.js-cabinet-contents').append(item);
        }
    });

    if ($('.js-cabinet-contents').is(':empty')){
        $('.js-cabinet-contents').append('<li>Nothing of particular interest to you.</li>');
    }
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
