var game = {};

game.pot = new StateMachine({
    init: 'cabinet',
    data: {
        type: 'vessel',
        name: 'spaghetti pot'
    },
    transitions: [
        {name: 'pickUp', from: ['cabinet', 'stove', 'sink'], to: 'inventory'},
        {name: 'potOnStove', from: 'inventory', to: 'stove'},
        {name: 'potInSink', from: 'inventory', to: 'sink'}
    ],
    methods: {
        onPickUp: function () {
            "use strict";
            console.log('You pick up the pot.');
        },
        onPotOnStove: function () {
            "use strict";
            console.log('You put the pot on the stove.');
        },
        onPotInSink: function () {
            "use strict";
            console.log('You put the pot in the sink.');
        }
    }
});

game.colander = new StateMachine({
    init: 'cabinet',
    data: {
        type: 'vessel',
        name: 'colander'
    },
    transitions: [
        {name: 'pickUp', from: ['cabinet', 'stove', 'sink'], to: 'inventory'},
        {name: 'colanderOnStove', from: 'inventory', to: 'stove'},
        {name: 'colanderInSink', from: 'inventory', to: 'sink'}
    ],
    methods: {
        onPickUp: function () {
            "use strict";
            console.log('You pick up the colander.');
        },
        onColanderOnStove: function () {
            "use strict";
            console.log('You put the colander on the stove.');
        },
        onColanderInSink: function () {
            "use strict";
            console.log('You put the colander in the sink.');
        }
    }
});

function initLocations() {
    "use strict";
    game.sink = new StateMachine({
        init: 'off',
        data: {
            type: 'location',
            name: 'sink',
            description: 'A typical steel apartment kitchen sink.'
        },
        transitions: [
            {name: 'step', from: 'off', to: 'on'},
            {name: 'step', from: 'on', to: 'off'}
        ],
        methods: {
            onOn: function () {
                console.log('You turn on the sink. The water is running.');
            },
            onOff: function () {
                console.log('You turn off the stove. The water stops running.');
            }
        }
    });

    game.stove = new StateMachine({
        init: 'off',
        data: {
            type: 'location',
            name: 'stove',
            description: 'A black electric stove. You should probably clean it.'
        },
        transitions: [
            {name: 'step', from: 'off', to: 'on'},
            {name: 'step', from: 'on', to: 'off'}
        ],
        methods: {
            onOn: function () {
                console.log('You turn on the stove. The element starts to glow.');
            },
            onOff: function () {
                console.log('You turn off the stove. The element stops glowing.');
            }
        }
    });

    game.cabinet = new StateMachine({
        init: 'closed',
        data: {
            type: 'location',
            name: 'cabinet',
            description: 'This kitchen does have a lot of cabinets, but you have a sneaking suspicion they\'re not attached to the wall.'
        },
        transitions: [
            {name: 'step', from: 'closed', to: 'open'},
            {name: 'step', from: 'open', to: 'closed'}
        ],
        methods: {
            onOpen: function () {
                console.log('You opened the cabinet.');
            },
            onClose: function () {
                console.log('You closed the cabinet.');
            }
        }
    });

    game.fridge = new StateMachine({
        init: 'closed',
        data: {
            type: 'location',
            name: 'fridge',
            description: 'The top-freezer fridge that came with the apartment. Sometimes, if freezes your milk for no reason.'
        },
        transitions: [
            {name: 'step', from: 'closed', to: 'open'},
            {name: 'step', from: 'open', to: 'closed'}
        ],
        methods: {
            onOpen: function () {
                console.log('You opened the fridge.');
            },
            onClose: function () {
                console.log('You closed the fridge.');
            }
        }
    });

    game.freezer = new StateMachine({
        init: 'closed',
        data: {
            type: 'location',
            name: 'freezer',
            description: 'The freezer. Mostly frozen veggies and geriatric bananas.'
        },
        transitions: [
            {name: 'step', from: 'closed', to: 'open'},
            {name: 'step', from: 'open', to: 'closed'}
        ],
        methods: {
            onOpen: function () {
                console.log('You opened the freezer.');
            },
            onClose: function () {
                console.log('You closed the freezer.');
            }
        }
    });
}

game.carrotsAndPeas = new StateMachine({
    init: 'freezer',
    data: {
        type: 'ingredient',
        name: 'carrots and peas'
    },
    transitions: [
        {name: 'pickUp', from: 'freezer', to: 'inventory'},
        {name: 'addToPot', from: 'inventory', to: 'potContents'}
    ],
    methods: {
        onPickUp: function () {
            "use strict";
            console.log('You take the bag from the freezer.');
        },
        onAddToPot: function () {
            "use strict";
            console.log('You empty the bag of peas and carrots into the pot.');
        }
    }
});

game.butter = new StateMachine({
    init: 'refrigerator',
    data: {
        type: 'ingredient',
        name: 'butter'
    },
    transitions: [
        {name: 'pickUp', from: 'freezer', to: 'inventory'},
        {name: 'addToPot', from: 'inventory', to: 'potContents'}
    ],
    methods: {
        onPickUp: function () {
            "use strict";
            console.log('You take the butter from the refrigerator.');
        },
        onAddToPot: function () {
            "use strict";
            console.log('You add the butter to the pot.');
        }
    }
});

function initCutUpHotDogs() {
    "use strict";
    game.cutHotDogs = new StateMachine({
        init: 'inventory',
        data: {
            type: 'ingredient',
            name: 'cut up hot dogs'
        },
        transitions: [
            {name: 'addToPot', from: 'inventory', to: 'potContents'}
        ],
        methods: {
            onAddToPot: function () {
                console.log('You add the cut up hotdogs to the pot.');
            }
        }
    });
}

game.hotDogs = new StateMachine({
    init: 'refrigerator',
    data: {
        type: 'ingredient',
        name: 'hotdogs'
    },
    transitions: [
        {name: 'pickUp', from: 'refrigerator', to: 'inventory'},
        {name: 'addToPot', from: 'inventory', to: 'potContents'},
        {name: 'cutUp', from: 'inventory', to: 'cutUpHotDogs'}
    ],
    methods: {
        onPickUp: function () {
            "use strict";
            console.log('You take the pack of hotdogs out of the refrigerator.');
        },
        onAddToPot: function () {
            "use strict";
            console.log('You empty the pack of hotdogs into the pot.');
        },
        onCutUp: function () {
            "use strict";
            initCutUpHotDogs();
            delete game.hotDogs;
        }
    }
});

function initNoodlesAndCheese() {
    "use strict";
    game.noodles = new StateMachine({
        init: 'inventory',
        data: {
            type: 'ingredient',
            name: 'elbow macaroni'
        },
        transitions: [
            {name: 'addToPot', from: 'inventory', to: 'potContents'}
        ],
        methods: {
            onAddToPot: function () {
                console.log('You add the noodles to the pot.');
            }
        }
    });

    game.cheesePacket = new StateMachine({
        init: 'inventory',
        data: {
            type: 'ingredient',
            name: 'packet of cheese powder'
        },
        transitions: [
            {name: 'open', from: 'inventory', to: 'openPacket'},
            {name: 'addToPot', from: 'openPacket', to: 'potContents'}
        ],
        methods: {
            onOpen: function () {
                console.log('You tear open the cheese powder packet.');
            },
            onAddToPot: function () {
                console.log('You add the cheese powder to the pot.');
            }
        }
    });
}

game.kraftDinner = new StateMachine({
    init: 'cabinet',
    data: {
        type: 'ingredient',
        name: 'box of Kraft Dinner'
    },
    transitions: [
        {name: 'pickUp', from: 'cabinet', to: 'inventory'},
        {name: 'open', from: 'inventory', to: 'openKraftDinner'}
    ],
    methods: {
        onPickUp: function () {
            "use strict";
            console.log('You take the box of Kraft Dinner out of the cabinet.');
        },
        onOpen: function () {
            "use strict";
            console.log('You open the box and find noodles and a cheese packet.');
            initNoodlesAndCheese();
            delete game.kraftDinner;
        }
    }
});


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
    appendToWindow(game[prop].description);
}

function appendToWindow(str) {
    'use strict';
    $('.js-content').append('<p>' + str + '</p>');
}
