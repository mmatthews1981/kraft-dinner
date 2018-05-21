game = {};

game.pot = new StateMachine({
    init: 'cabinet',
    data: {
        type: 'vessel',
        name: 'spaghetti pot'
    },
    transitions: [
        { name: 'pickUp',     from: ['cabinet', 'stove', 'sink'],  to: 'inventory' },
        { name: 'potOnStove', from: 'inventory', to: 'stove'},
        { name: 'potInSink', from: 'inventory', to: 'sink'}
    ],
    methods: {
        onPickUp:     function() { console.log('You pick up the pot.')    },
        onPotOnStove:   function() { console.log('You put the pot on the stove.')     },
        onPotInSink: function() { console.log('You put the pot in the sink.') }
    }
});

game.colander = new StateMachine({
    init: 'cabinet',
    data: {
        type: 'vessel',
        name: 'colander'
    },
    transitions: [
        { name: 'pickUp',     from: ['cabinet', 'stove', 'sink'],  to: 'inventory' },
        { name: 'colanderOnStove', from: 'inventory', to: 'stove'},
        { name: 'colanderInSink', from: 'inventory', to: 'sink'}
    ],
    methods: {
        onPickUp:     function() { console.log('You pick up the colander.')    },
        onColanderOnStove:   function() { console.log('You put the colander on the stove.')     },
        onColanderInSink: function() { console.log('You put the colander in the sink.') }
    }
});

function initLocations(){
    game.sink = new StateMachine({
        init: 'off',
        data: {
            type: 'location',
            name: 'sink'
        },
        transitions: [
            {name: 'step', from: 'off', to: 'on'},
            {name: 'step', from: 'on', to: 'off' }
        ]
    });

    game.stove = new StateMachine({
        init: 'off',
        data: {
            type: 'location',
            name: 'stove'
        },
        transitions: [
            {name: 'step', from: 'off', to: 'on'},
            {name: 'step', from: 'on', to: 'off' }
        ],
        methods: {
            onTurnOn: function () {console.log('You turn on the stove. The element starts to glow.')},
            onTurnOff: function () {console.log('You turn off the stove. The element stops glowing.')}
        }
    });

    game.cabinet = new StateMachine({
        init: 'closed',
        data: {
            type: 'location',
            name: 'cabinet'
        },
        transitions: [
            {name: 'step', from: 'closed', to: 'open'},
            {name: 'step', from: 'open', to: 'closed' }
        ],
        methods: {
            onOpen: function () {console.log('You opened the cabinet.')},
            onClose: function () {console.log('You closed the cabinet.')}
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
        onPickUp: function() {console.log('You take the bag from the freezer.')},
        onAddToPot: function() {console.log('You empty the bag of peas and carrots into the pot.')}
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
        onPickUp: function() {console.log('You take the butter from the refrigerator.')},
        onAddToPot: function() {console.log('You add the butter to the pot.')}
    }
});

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
    methods:{
        onPickUp: function() { console.log('You take the pack of hotdogs out of the refrigerator.' )},
        onAddToPot: function() { console.log('You empty the pack of hotdogs into the pot.' )},
        onCutUp: function() { initCutUpHotDogs(); delete game.hotDogs; }
    }
});

function initCutUpHotDogs(){
    game.cutHotDogs = new StateMachine({
        init: 'inventory',
        data: {
            type: 'ingredient',
            name: 'cut up hotdogs'
        },
        transitions: [
            {name: 'addToPot', from: 'inventory', to: 'potContents'}
        ],
        methods:{
            onAddToPot: function() { console.log('You add the cut up hotdogs to the pot.' )}
        }
    });
};

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
        onPickUp: function() { console.log('You take the box of Kraft Dinner out of the cabinet.' )},
        onOpen: function(){ console.log('You open the box and find noodles and a cheese packet.'); initNoodlesAndCheese(); delete game.kraftDinner;}
    }
});

function initNoodlesAndCheese(){
    game.noodles = new StateMachine({
        init: 'inventory',
        data: {
            type: 'ingredient',
            name: 'elbow macaroni'
        },
        transitions: [
            {name: 'addToPot', from: 'inventory', to: 'potContents'}
        ],
        methods:{
            onAddToPot: function() { console.log( 'You add the noodles to the pot.' )}
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
        methods:{
            onOpen: function(){ console.log('You tear open the cheese powder packet.')},
            onAddToPot: function() { console.log('You add the cheese powder to the pot.' )}
        }
    });
}

function listByType(thetype) {
    $('.ingredients').empty();
    for (prop in game) {
        if( game[prop].type === thetype){
            console.log(prop)
        };
    }
};