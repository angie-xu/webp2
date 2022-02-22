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

place = ['IN <span style="color:transparent">A BEAUTIFUL</span> TERRA<span style="color:transparent">IN</span>',
'IN A<span style="color:transparent"> TROPICAL </span><span style="color:transparent">RAIN</span>FOREST',
'NEAR THE OCEAN',
'BY LAKE <span style="color:transparent">ED</span>WARD',
'IN A <span style="color:transparent">ABANDONED </span>MANSION',
'IN THE SHOPPING MALL',
'IN THE HOUSE',
'WITHIN THE HALL<span style="color:transparent">WAY</span>',
'IN THE <span style="color:transparent">UNDER</span>GROUND <span style="color:transparent">BASEMENT</span>',
'AT THE <span style="color:transparent">BACK</span>YARD',
'BY THE <span style="color:transparent">WASTE</span>LAND',
'IN A <span style="color:transparent">DAY</span>DREAM',
'IN A<span style="color:transparent">N EMPTY BED</span>ROOM',
'NEAR THE <span style="color:transparent">FISH </span>MART',
'IN THE CAFE<span style="color:transparent">TERIA</span>',
'NEAR THE PIER',
'IN <span style="color:transparent">MI</span>CHI<span style="color:transparent">GAN</span>',
'IN <span style="color:transparent">HEAVY JUNGLE UNDER</span>GROWTH',
'IN <span style="color:transparent">A PA</span>LACE <span style="color:transparent">COVERED IN C</span>OLD',
'NEAR THE PORT',
'AMONG OTHER <span style="color:transparent">HO</span>USES',
'IN A DESERT<span style="color:transparent">ED</span> CHURCH',
'IN A METRO<span style="color:transparent">POLIS</span>',
'UNDERWATER'],

time_of_day = ['<span style="color:transparent">MORNING</span>',
'ALL<span style="color:transparent"> AFTERNOON</span>',
'<span style="color:transparent">SUNSET</span>DAWN',
'<span style="color:transparent">N</span>A<span style="color:transparent">TURAL </span>LIGHT'],

inhabitants = ['PEOPLE WHO SLEEP <span style="color:transparent">VERY LITTLE</span>', 'VEGETARIANS', 'HORSES AND BIRDS', '<span style="color:transparent">PEOPLE SPEAKING MANY</span> LANGUAGES WEARING <span style="color:transparent">LITTLE OR NO</span> CLOTHING', 'ALL RACES <span style="color:transparent">OF MEN</span> REPRESENTED <span style="color:transparent">WEARING PREDOMINANTLY RED CLOTHING</span>', 'CHILDREN AND OLD PEOPLE', 'VARIOUS BIRDS AND FISH', 'LOVERS', 'FISHERMEN AND FAMILIES', 'PEOPLE WHO ENJOY EATING <span style="color:transparent">together</span>', 'PEOPLE WHO EAT A GREAT DEAL', 'COLLECTORS OF ALL TYPES', 'FRIENDS AND ENEMIES', 'PEOPLE WHO <span style="color:transparent">SLEEP ALMOST ALL THE</span> TIME', 'VERY TALL PEOPLE', '<span style="color:transparent">AM</span>ER<span style="color:transparent">ICAN</span> INDIANS', 'LITTLE BOYS', 'PEOPLE <span style="color:transparent">FROM MANY WALKS</span> OF LIFE', '<span style="color:transparent">NEGROS WEARING</span> ALL COLORS', 'FRIENDS', '<span style="color:transparent">FRENCH AND GERMAN</span> SPEAKING PEOPLE', 'PEOPLE WHO LOVE <span style="color:transparent">TO READ</span>'];

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
    return 'A <span style="color:transparent">S</span>CENT OF ' + choose(object) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + choose(place) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AT ' + choose(time_of_day) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:transparent">INHABITED</span> BY ' + choose(inhabitants);
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
    setInterval(litany, 5000);
}
