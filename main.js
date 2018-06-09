var game = {};

game.home = home();
game.kitchen = kitchen();

function displayInventory() {
    'use strict';
    $('.js-inventory').empty();

    Object.keys(game).forEach(function (prop) {
        if (game[prop].state === 'inventory') {
            $('.js-inventory').append('<li class="js-item"  data-prop="' + prop + '">' + game[prop].name + '</li>');
        }
    });

    if ($('.js-inventory').is(':empty')) {
        $('.js-inventory').append('<li>You don\'t have anything on hand.</li>');
    }
}

function displayLocations() {
    'use strict';

    $('.js-locations').empty();

    Object.keys(game).forEach(function (prop) {
        if (game[prop].type === 'location') {
            var txt = '<li class="js-location" data-prop="' + prop + '">' +
                    'The <span class="js-location-description">' + game[prop].name + '</span>' +
                    ' is <span class="js-location-state">' + game[prop].state + '</span>' +
                    '</li>';
            $('.js-locations').append(txt);
        }
    });
}

function initFreezerContents() {
    'use strict';
    game.carrotsAndPeas = carrotsAndPeas();
}

function listFreezerContents() {
    'use strict';
    $('.js-freezer-contents').empty();

    Object.keys(game).forEach(function (prop) {
        if (game[prop].state === 'freezer') {
            var item = '<li class="js-item" data-prop="' + prop + '">' + game[prop].name + '</li>';
            $('.js-freezer-contents').append(item);
        }
    });

    if ($('.js-freezer-contents').is(':empty')) {
        $('.js-freezer-contents').append('<li>Nothing of particular interest to you.</li>');
    }
}

function initFridgeContents() {
    'use strict';
    game.butter = butter();
    game.milk = milk();
    game.hotDogs = hotDogs();
}

function listFridgeContents() {
    'use strict';
    $('.js-fridge-contents').empty();

    Object.keys(game).forEach(function (prop) {
        if (game[prop].state === 'refrigerator') {
            var item = '<li class="js-item"  data-prop="' + prop + '">' + game[prop].name + '</li>';
            $('.js-fridge-contents').append(item);
        }
    });

    if ($('.js-fridge-contents').is(':empty')) {
        $('.js-fridge-contents').append('<li>Nothing of particular interest to you.</li>');
    }
}

function initCabinetContents() {
    'use strict';
    game.pot = pot();
    game.colander = colander();
    game.kraftDinner = kraftDinner();
}

function listCabinetContents() {
    'use strict';
    $('.js-cabinet-contents').empty();

    Object.keys(game).forEach(function (prop) {
        if (game[prop].state === 'cabinet') {
            var item = '<li class="js-item"  data-prop="' + prop + '">' + game[prop].name + '</li>';
            $('.js-cabinet-contents').append(item);
        }
    });

    if ($('.js-cabinet-contents').is(':empty')) {
        $('.js-cabinet-contents').append('<li>Nothing of particular interest to you.</li>');
    }
}

function listSinkContents() {
    'use strict';
    $('.js-sink-contents').empty();

    Object.keys(game).forEach(function (prop) {
        if (game[prop].state === 'sink') {
            var item = '<li class="js-item"  data-prop="' + prop + '">' + game[prop].name + '</li>';
            $('.js-sink-contents').append(item);
        }
    });

    if ($('.js-sink-contents').is(':empty')) {
        var status;
        if(game.sink.state === 'on'){
            status = 'A stream of water running down the drain.';
        } else {
            status = 'A few stray drops of water.';
        }
        $('.js-sink-contents').append('<li>' + status + '</li>');
    }
}

function listStoveContents() {
    'use strict';
    $('.js-stove-contents').empty();

    Object.keys(game).forEach(function (prop) {
        if (game[prop].state === 'stove') {
            var item = '<li class="js-item"  data-prop="' + prop + '">' + game[prop].name + '</li>';
            $('.js-stove-contents').append(item);
        }
    });

    if ($('.js-stove-contents').is(':empty')) {
        $('.js-stove-contents').append('<li>A bit of grease splatter.</li>');
    }
}

function initNoodlesAndCheese() {
    'use strict';
    game.noodles = noodles();
    game.cheesePacket = cheesePacket();
    game.emptyKraftDinnerBox = emptyKraftDinnerBox();
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
    if ((game[prop].type === 'vessel' || game[prop].type === 'ingredient') &&
            game[prop].state !== 'inventory') {
        str += '  <span class="js-pickup" data-prop="' + prop + '">You can pick it up if you like.</span>';
    }

    if (prop === 'kraftDinner' && game[prop].state === 'inventory') {
        str += ' <span class="js-open">You can open it if you like.</span>';
    }

    if (game[prop].type === 'vessel' && game[prop].state !== 'sink' ) {
        str += ' <span class="js-into-sink" data-prop="' + prop + '">You can put it in the sink.</span>';
    }

    if (game[prop].type === 'vessel' && game[prop].state !== 'stove' ) {
        str += ' <span class="js-onto-stove" data-prop="' + prop + '">You can put it  on the stove.</span>';
    }
    appendWindow(str);
}
