function home() {
    'use strict';
    return {
        description: 'You\'re feeling hungry. <span class="js-look">Look around the kitchen.</span>'
    };
}

function kitchen() {
    'use strict';
    return {
        description: 'You look around the kitchen. Your fridge is in the corner, humming. The stove is to your left. The cabinets are directly in front of you. The sink is to your right. Conveniently, your favorite dinner bowl is sitting next to the sink.'
    };
}

function pot() {
    'use strict';
    return new StateMachine({
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
                appendWindow('You pick up the pot.');
            },
            onPotOnStove: function () {
                appendWindow('You put the pot on the stove.');
            },
            onPotInSink: function () {
                appendWindow('You put the pot in the sink.');
            }
        }
    });
}

function colander() {
    'use strict';
    return new StateMachine({
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
                appendWindow('You pick up the colander.');
            },
            onColanderOnStove: function () {
                appendWindow('You put the colander on the stove.');
            },
            onColanderInSink: function () {
                appendWindow('You put the colander in the sink.');
            }
        }
    });
}

function sink() {
    'use strict';
    return new StateMachine({
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
            onLeaveOff: function () {
                appendWindow('You turn on the sink. The water is running.');
            },
            onLeaveOn: function () {
                appendWindow('You turn off the sink. The water stops running.');
            }
        }
    });
}

function stove() {
    'use strict';
    return new StateMachine({
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
            onLeaveOff: function () {
                appendWindow('You turn on the stove. The element starts to glow.');
            },
            onLeaveOn: function () {
                appendWindow('You turn off the stove. The element stops glowing.');
            }
        }
    });
}

function cabinet() {
    'use strict';
    return new StateMachine({
        init: 'closed',
        data: {
            type: 'location',
            name: 'cabinet',
            description: 'This kitchen does have a lot of cabinets, but you have a sneaking suspicion they\'re not attached to the wall.',
            hasBeenOpened: false
        },
        transitions: [
            {name: 'step', from: 'closed', to: 'open'},
            {name: 'step', from: 'open', to: 'closed'}
        ],
        methods: {
            onLeaveClosed: function () {
                appendWindow('You opened the cabinet.');
                $('.js-cabinet-label, .js-cabinet-contents').show();
                if (!game.cabinet.hasBeenOpened) {
                    game.cabinet.hasBeenOpened = true;
                    initCabinetContents();
                }
                listCabinetContents();
            },
            onLeaveOpen: function () {
                appendWindow('You closed the cabinet.');
                $('.js-cabinet-label, .js-cabinet-contents').hide();
            }
        }
    });
}

function fridge() {
    'use strict';
    return new StateMachine({
        init: 'closed',
        data: {
            type: 'location',
            name: 'fridge',
            description: 'The top-freezer fridge that came with the apartment. Sometimes, if freezes your milk for no reason.',
            hasBeenOpened: false
        },
        transitions: [
            {name: 'step', from: 'closed', to: 'open'},
            {name: 'step', from: 'open', to: 'closed'}
        ],
        methods: {
            onLeaveClosed: function () {
                appendWindow('You opened the fridge.');
                $('.js-fridge-label, .js-fridge-contents').show();
                if (!game.fridge.hasBeenOpened) {
                    game.fridge.hasBeenOpened = true;
                    initFridgeContents();
                }
                listFridgeContents();
            },
            onLeaveOpen: function () {
                appendWindow('You closed the fridge.');
                $('.js-fridge-label, .js-fridge-contents').hide();
            }
        }
    });
}

function freezer() {
    'use strict';
    return new StateMachine({
        init: 'closed',
        data: {
            type: 'location',
            name: 'freezer',
            description: 'The freezer. Mostly frozen veggies and geriatric bananas.',
            hasBeenOpened: false
        },
        transitions: [
            {name: 'step', from: 'closed', to: 'open'},
            {name: 'step', from: 'open', to: 'closed'}
        ],
        methods: {
            onLeaveClosed: function () {
                appendWindow('You opened the freezer.');
                $('.js-freezer-label, .js-freezer-contents').show();
                if (!game.freezer.hasBeenOpened) {
                    game.freezer.hasBeenOpened = true;
                    initFreezerContents();
                }
                listFreezerContents();
            },
            onLeaveOpen: function () {
                appendWindow('You closed the freezer.');
                $('.js-freezer-label, .js-freezer-contents').hide();
            }
        }
    });
}

function carrotsAndPeas() {
    'use strict';
    return new StateMachine({
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
                appendWindow('You take the bag from the freezer.');
            },
            onAddToPot: function () {
                appendWindow('You empty the bag of peas and carrots into the pot.');
            }
        }
    });
}

function butter() {
    'use strict';
    return new StateMachine({
        init: 'refrigerator',
        data: {
            type: 'ingredient',
            name: 'butter'
        },
        transitions: [
            {name: 'pickUp', from: 'refrigerator', to: 'inventory'},
            {name: 'addToPot', from: 'inventory', to: 'potContents'}
        ],
        methods: {
            onPickUp: function () {
                appendWindow('You take the butter from the refrigerator.');
            },
            onAddToPot: function () {
                appendWindow('You add the butter to the pot.');
            }
        }
    });
}

function milk() {
    'use strict';
    return new StateMachine({
        init: 'refrigerator',
        data: {
            type: 'ingredient',
            name: 'milk'
        },
        transitions: [
            {name: 'pickUp', from: 'refrigerator', to: 'inventory'},
            {name: 'addToPot', from: 'inventory', to: 'potContents'}
        ],
        methods: {
            onPickUp: function () {
                appendWindow('You take the milk from the refrigerator.');
            },
            onAddToPot: function () {
                appendWindow('You add the milk to the pot.');
            }
        }
    });
}

function cutHotDogs() {
    'use strict';
    return new StateMachine({
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
                appendWindow('You add the cut up hotdogs to the pot.');
            }
        }
    });
}

function hotDogs() {
    'use strict';
    return new StateMachine({
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
                appendWindow('You take the pack of hotdogs out of the refrigerator.');
            },
            onAddToPot: function () {
                appendWindow('You empty the pack of hotdogs into the pot.');
            },
            onCutUp: function () {
                initCutUpHotDogs();
                delete game.hotDogs;
            }
        }
    });
}

function noodles() {
    'use strict';
    return new StateMachine({
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
                appendWindow('You add the noodles to the pot.');
            }
        }
    });
}

function cheesePacket() {
    'use strict';
    return new StateMachine({
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
                appendWindow('You tear open the cheese powder packet.');
            },
            onAddToPot: function () {
                appendWindow('You add the cheese powder to the pot.');
            }
        }
    });
}

function kraftDinner() {
    'use strict';
    return new StateMachine({
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
                appendWindow('You take the box of Kraft Dinner out of the cabinet.');
            },
            onOpen: function () {
                appendWindow('You open the box and find noodles and a cheese packet.');
                initNoodlesAndCheese();
                delete game.kraftDinner;
            }
        }
    });
}

