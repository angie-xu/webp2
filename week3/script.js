var t = 0,
object = ['FLORAL',
'CITRUS',
'<span style="color:transparent">SEA</span>WEED',
'BERRIES',
'GUM',
'MINT',
'GREEN TEA',
'<span style="color:transparent">COTTON </span>CANDY',
'<span style="color:transparent">SANDAL</span>WOOD',
'<span style="color:transparent">GOAT</span> HAIR',
'<span style="color:transparent">T</span>RUFFLES</span>',
'BASIL',
'<span style="color:transparent">M</span>INK</span>',
'APPLES',
'<span style="color:transparent">FRESH </span>CINNAMON <span style="color:transparent">SPICE</span>',
'<span style="color:transparent">S</span>WINE'],

place = ['IN <span style="color:transparent">A WARM</span> FIRE<span style="color:transparent">PLACE</span>',
'IN A<span style="color:transparent"> TROPICAL </span><span style="color:transparent">RAIN</span>FOREST',
'NEAR THE OCEAN',
'BY LAKE <span style="color:transparent">ED</span>WARD',
'IN A<span style="color:transparent">N ABANDONED </span>MANSION',
'IN THE SHOPPING MALL',
'IN THE HOUSE',
'WITHIN THE HALL<span style="color:transparent">WAY</span>',
'IN THE <span style="color:transparent">UNDER</span>GROUND <span style="color:transparent">BASEMENT</span>',
'AT THE <span style="color:transparent">BACK</span>YARD',
'BY <span style="color:transparent">THE WASTE</span>LAND',
'IN A <span style="color:transparent">DAY</span>DREAM',
'IN A<span style="color:transparent">N EMPTY BED</span>ROOM',
'NEAR THE <span style="color:transparent">FISH </span>MART',
'IN THE CAFE<span style="color:transparent">TERIA</span>',
'NEAR THE PIER',
'IN THE BAR<span style="color:transparent">RACK</span>',
'IN <span style="color:transparent">RAIN</span>WATER',
'IN A <span style="color:transparent">TABLE</span>TOP COVERED<span style="color:transparent"> IN C</span>OLD',
'NEAR THE PORT',
'WITHIN THE <span style="color:transparent">RAIN</span>STORM',
'BEYOND THE <span style="color:transparent">RAIN</span> BOW',
'IN A MARKET<span style="color:transparent">PLACE</span>',
'IN THE DORMS'],

time_of_day = ['IN THE MORNING',
'IN THE <span style="color:transparent">AFTER</span>NOON',
'AT TWILIGHT',
'AT <span style="color:transparent">MID</span>NIGHT',
'AT DAWN',
'AT DAY<span style="color:transparent">BREAK'],

culprit = ['<span style="color:transparent">NIGHT</span>WALKERS',
'HUNTER AND GATHERERS',
'VAGRANTS',
'A HERO<span style="color:transparent">INE</span>',
'A <span style="color:transparent">GROUP OF </span>CHILD<span style="color:transparent">REN',
'A COUPLE',
'A CAT',
'FOODIE',
'SAILOR',
'A LOVE<span style="color:transparent">D ONE</span>',
'SOLDIERS',
'FARMERS',
'A NEIGHBOR',
'A<span style="color:transparent">N OLD</span> MAN',
'A DOG',
'A CHEF',
'A <span style="color:transparent">HOUSE</span>WIFE',
'THE BREEZE'];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}
function stanza() {
    "use strict";
    return 'A <span style="color:transparent">S</span>CENT OF ' + choose(object) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + choose(place) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + choose(time_of_day) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEFT BY ' + choose(culprit);
}
function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (8 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}
function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 1500);
}