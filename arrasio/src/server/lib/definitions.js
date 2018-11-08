// GUN DEFINITIONS

const combineStats = function(arr) {
    try {
        // Build a blank array of the appropiate length
        let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        arr.forEach(function(component) {
            for (let i = 0; i < data.length; i++) {
                data[i] = data[i] * component[i];
            }
          
        });
        return {
            reload: data[0],
            recoil: data[1],
            shudder: data[2],
            size: data[3],
            health: data[4],
            damage: data[5],
            pen: data[6],
            speed: data[7],
            maxSpeed: data[8],
            range: data[9],
            density: data[10],
            spray: data[11],
            resist: data[12],
        };
    } catch (err) {
        console.log(err);
        console.log(JSON.stringify(arr));
    }
};
const skillSet = (() => {
    let config = require('../../../config.json');
    let skcnv = {
        rld: 0,
        pen: 1,
        str: 2,
        dam: 3,
        spd: 4,
        shi: 5,
        atk: 6,
        hlt: 7,
        rgn: 8,
        mob: 9,
    };
    return args => {
        let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let s in args) {
            if (!args.hasOwnProperty(s)) continue;
            skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
        }
        return skills;
    };
})();
const g = { // Gun info here 
    trap: [36.1, 1, 0.25, 0.6, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
      trap2: [36.1, 1, 0.25, 1, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
    destroyDominator:   [4,     0,     1,      0.975,  8,      8,      6.25,   0.5,    1,     1,       1,      0.5,    1],
 destroyDominator2:   [1.05,     0,     1,      0.975,  8,      8,      6.25,   0.5,    1,     1,       1,      0.5,    1],
    
  swarm: [18, 0.25, 0.05, 0.4, 1, 0.75, 1, 4, 1, 1, 1, 5, 1],
  cancer: [4, 0, 1.2, 1, 0.8, 0.75, 2, 5, 5, 1, 1, 5, 1],
    drone: [50, 0.25, 0.1, 0.6, 1, 1, 1, 2, 1, 1, 1, 0.1, 1],
  dronex: [1, 0.25, 0.1, 0.6, 1, 1, 1, 2, 1, 1, 1, 0.1, 1],
    factory: [60, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],

      aussie: [2, 1, 1, 2, 1.5, 0.75, 1, 4.5, 1, 1, 1, 0.1, 1],
    basic: [18, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
      basico: [1.1, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
      basic_cl: [18, 1.4, 0.1, 1, 10, 10, 10, 4.5, 1, 1, 1, 15, 1],
      spect: [1, 1, 1, 1, 1, 1, 1, 50, 1, 1, 1, 1, 1],
   storm: [3, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 1, 1],
     knight: [1, 1.4, 0.1, 1, 1, 0.75, 1, 4, 1, 1, 1, 2, 2],
    spooner: [3, 1.4, 0.1, 1, 1, 5, 10, 1, 6, 5, 5, 1, 5],
     samurai: [1.1, 1.4, 0.1, 1, 3, 0.75, 1, 45, 1, 5, 1, 5, 1],
      haha: [18, 1.4, 2, 1, 666, 666, 666, 4.5, 1, 1, 1, 15, 1],
  basic3: [1.1, 0, 0.1, 1, 1, 3, 1, 0, 1, 0.3, 1, 15, 1],
  basic2: [18, 0, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
    huge: [2, 0, 0.25, 3, 1, 0.75, 1, 7, 1, 1, 1, 15, 3],
    illusion: [18, 0, 0.25, 3, 1, 0.75, 1, 7, 1, 400, 1, 15, 3],
    osht: [0.1, 0.7, 0.25, 1, 1, 0.75, 1, 2.5, 1, 1, 1, 15, 3],
    candl: [0.1, 9.7, 0.25, 1, 1, 0.75, 1, 0.05, 1, 1, 1, 360, 3],
   attract: [0.6, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 250, 1, 1],
    highrecoil2: [0.4, 3.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
    nerfgun: [999999, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10],
  bigger: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 10],
      blank2: [1, 1, 1, 1, 1, 1, 1, 0.03, 100, 14, 1, 1, 1],
    spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
      spam4: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 9, 1.05],
    minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
    single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
   single2: [1.05, 9, 1, 1, 1, 1, 1, 1.05, 1, 0, 1, 1, 1],
     single3: [1.1, 0, 1, 1, 1, 8, 1, 1.05, 1, 0, 1, 1, 1],
      singleX: [1.1, 9, 1, 1, 1, 8, 1, 1.05, 1, 0, 1, 1, 1],
    sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
    rifle: [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
    assass: [1.65, 1, 0.25, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
    hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
    hunter2: [1, 1, 1, 0.9, 2, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
    preda: [1.4, 1, 1, 0.8, 1.5, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
    snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
    sidewind: [1.5, 2, 1, 1, 1.5, 0.9, 1, 0.15, 0.5, 1, 1, 1, 1],
    snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
    mach: [0.5, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
   bark: [1.1, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
    blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
    chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
    mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
    stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
    shotgun: [8, 0.4, 1, 1.5, 1, 0.4, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
    flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
    tri: [1, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
    trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
    thruster: [1, 1.5, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
    auto: /*pure*/ [1.8, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25],
    five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
    autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    rng: [5, 1, 1, 1, 1, 1, 1, 1, 0.01, 2, 1, 360, 0],
    norng: [1, 1, 0.1, 1, 1, 1, 1, 8, 5, 1, 1, 0.01, 0],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
   pound2: [2, 0, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
    destroy2: [2.2, 0, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
    anni: [0.85, 1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    hive: [1.5, 0.8, 1, 0.8, 0.7, 0.3, 1, 1, 0.6, 1, 1, 1, 1],
    arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
    mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
    spreadmain: [0.78125, 0.25, 0.5, 1, 0.5, 1, 1, 1.5 / 0.78, 0.9 / 0.78, 1, 1, 1, 1],
    spread: [1.5, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
    skim: [1.33, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
    twin: [1, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
    bent: [1.1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
    triple: [1.2, 0.667, 0.9, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
    quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
    dual: [2, 1, 0.8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
    double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
    hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
    puregunner: [1, 0.25, 1.5, 1.2, 1.35, 0.25, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2],
    machgun: [0.66, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
    gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
    power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
    nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
    fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
    turret: [2, 1, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
    bees: [1.3, 1, 1, 1.4, 1, 1.5, 0.5, 3, 1.5, 1, 0.25, 1, 1],
    carrier: [1.5, 1, 1, 1, 1, 0.8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
    hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
    block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
    construct: [1.3, 1, 1, 0.9, 1, 1, 1, 1, 1.1, 1, 1, 1, 1],
    boomerang: [0.8, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
    over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
   overx: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
    meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
    weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
    master: [3, 1, 1, 0.7, 0.4, 0.7, 1, 1, 1, 0.1, 0.5, 1, 1],
    sunchip: [5, 1, 1, 1.4, 0.5, 0.4, 0.6, 1, 1, 1, 0.8, 1, 1],
    babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
    lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
    halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
    bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
    slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
    halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
    notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
    halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
    fake: [1, 1, 1, 0.00001, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1],
  saber: [             0.2,    0.1,  5,      20,      1,      2,      1,     1,       1,     0.1,    1,     0.1,    1],
    ShieldORsword:      [0.1,   0.1,   0.1,    20,       1,      1,      1,     0.1,     0.1,    0.1,   0.5,    0.1,   10],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    op: [0.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
    protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
  gunnerDominator:    [0.65,  0,     1,      0.5,    1.2,    1,      1.2,    1.25,   1,     0.7,     1,      1.25,   1],
    trapperDominator:   [0.85,  0,     0.25,   1.1,    1.2,    1.2,    1.2,    0.6,    2,     0.7,     1,      0.5,    1],
};
const dfltskl = 9;
// NAMES
const statnames = {
    smasher: 1,
    drone: 2,
    necro: 3,
    swarm: 4,
    trap: 5,
    generic: 6,
};
const gunCalcNames = {
    default: 0,
    bullet: 1,
    drone: 2,
    swarm: 3,
    fixedReload: 4,
    thruster: 5,
    sustained: 6,
    necro: 7,
    trap: 8,
};


// ENTITY DEFINITIONS
exports.genericEntity = {
    NAME: '',
    LABEL: 'Unknown Entity',
    TYPE: 'unknown',
    DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: 16,
    INDEPENDENT: false,
    CONTROLLERS: ['doNothing'],
    INVISIBLE: [0, 0],
    HAS_NO_MASTER: false,
    MOTION_TYPE: 'glide', // motor, swarm, chase
    FACING_TYPE: 'toTarget', // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: 'normal', // hard, repel, never, hardWithBuffer
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    AUTO_UPGRADE: 'none',
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
    GUNS: [],
    MAX_CHILDREN: 0,
    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,
        RANGE: 0,
        FOV: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,
        HETERO: 2,
    },
    FOOD: {
        LEVEL: -1,
    },
};
// FOOD
exports.food = {
    TYPE: 'food',
    DAMAGE_CLASS: 1,
    CONTROLLERS: ['moveInCircles'],
    HITS_OWN_TYPE: 'repel',
    MOTION_TYPE: 'drift',
    FACING_TYPE: 'turnWithSpeed',
    VARIES_IN_SIZE: true,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1,
    },
    GUNS: [],
    TURRETS: [],
    DAMAGE_EFFECTS: false,
    RATEFFECTS: false,
    HEALTH_WITH_LEVEL: false,
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;

exports.hugePentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 5,
    },
    LABEL: 'Alpha Pentagon',
    VALUE: 15000,
    SHAPE: -5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 300 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.bighexagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 5,
    },
    LABEL: 'Alpha Hexagon',
    VALUE: 29000,
    SHAPE: 6,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 600 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 90 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.bigPentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 4,
    },
    LABEL: 'Beta Pentagon',
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 50 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.betahex = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 4,
    },
    LABEL: 'Beta Hexagon',
    VALUE: 2500,
    SHAPE: 6,
    SIZE: 50,
    COLOR: 0,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 50 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.pentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3,
    },
    LABEL: 'Pentagon',
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.hexagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3,
    },
    LABEL: 'Lesser Hexagon',
    VALUE: 900,
    SHAPE: 6,
    SIZE: 16,
    COLOR: 0,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.hexagon2 = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3,
    },
    LABEL: 'Hexagon',
    VALUE: 1000,
    SHAPE: 6,
    SIZE: 26,
    COLOR: 0,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.megahexagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3,
    },
    LABEL: 'Mega Hexagon',
    VALUE: 1000,
    SHAPE: 6,
    SIZE: 26,
    COLOR: 0,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.triangle = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 2,
    },
    LABEL: 'Triangle',
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.square = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 1,
    },
    LABEL: 'Square',
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.egg = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 0,
    },
    LABEL: 'Egg',
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
     HEALTH: 0.0011,
      //HEALTH: 10,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,
};
exports.egg2 = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 0,
    },
    LABEL: 'Egg',
    VALUE: 90,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 'rainbow',
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
     HEALTH: 10,
      //HEALTH: 10,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,
};
exports.greenpentagon = {
    PARENT: [exports.food],
    LABEL: 'Pentagon',
    VALUE: 30000,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 1,
    BODY: {
        DAMAGE: 3,
        DENSITY: 8,
        HEALTH: 200,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.greentriangle = {
    PARENT: [exports.food],
    LABEL: 'Triangle',
    VALUE: 7000,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 1,
    BODY: {
        DAMAGE: 1,
        DENSITY: 6,
        HEALTH: 60,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.greensquare = {
    PARENT: [exports.food],
    LABEL: 'Square',
    VALUE: 2000,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 1,
    BODY: {
        DAMAGE: 0.5,
        DENSITY: 4,
        HEALTH: 20,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.gem = {
    PARENT: [exports.food],
    LABEL: 'Gem',
    VALUE: 2000,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.obstacle = {
    TYPE: 'wall',
    DAMAGE_CLASS: 1,
    LABEL: 'Rock',
   // FACING_TYPE: 'turnWithSpeed',
    SHAPE: 4,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 10000,
        SHIELD: 10000,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 100,
        STEALTH: 1,
        RANGE: 130,
    },
    GUNS: [],
    TURRETS: [],
    VALUE: 0,
    SIZE: 60,
    COLOR: 16,
    VARIES_IN_SIZE: true,
    GIVE_KILL_MESSAGE: true,
    ACCEPTS_SCORE: false,
    DIE_AT_RANGE: true,
};
exports.babyObstacle = {
    PARENT: [exports.obstacle],
    SIZE: 25,
    SHAPE: -7,
    LABEL: "Gravel",
};

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.tribullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
VARIES_IN_SIZE: true,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.infect = {
    LABEL: 'Bullet',
  NECRO: true,
  SHAPE: -5,
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.mario = {
    LABEL: 'Meatball',
    TYPE: 'bullet',
  MOTION_TYPE: 'grow',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletimm = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
  IMMUNE: true,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.spillbullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'hard',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};

exports.hibullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    BODY: {
        PENETRATION: 0.7,
        SPEED: 0.01,
        RANGE: 50,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    MOTION_TYPE: 'accel',
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.cbullet = {
    LABEL: 'lol',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    FACING_TYPE: 'turnWithSpeed',
    SHAPE: 2,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.casing = {
    PARENT: [exports.bullet],
    LABEL: 'Shell',
    TYPE: 'swarm',
};

exports.swarm = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * wepHealthFactor,
        DAMAGE: 1.5 * wepDamageFactor,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.sweswarm = {
    LABEL: 'Swedish Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 3,
  DRAW_HEALTH: true,

    NAME: 'ROCK',
    MOTION_TYPE: 'swarm',
  MOTION_TYPE: 'grow',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * wepHealthFactor,
        DAMAGE: 1.5 * wepDamageFactor,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.yeaboi = {
    LABEL: 'Moving Bullet',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * wepHealthFactor,
        DAMAGE: 1.5 * wepDamageFactor,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.bee = {
    PARENT: [exports.swarm],
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: 'Drone',
    HITS_OWN_TYPE: 'hardWithBuffer',
};
exports.saberbeam2 = {
    LABEL: 'beam',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: -2,
    BODY: {
        PENETRATION: 1,
        SPEED: 1,
        RANGE: 80,
        DENSITY: 5,
        HEALTH: 2 * wepHealthFactor,
        DAMAGE: 0.4 * wepDamageFactor,
        PUSHABILITY: 0,
    },
    FACING_TYPE: 'smoothWithMotion',
    MOTION_TYPE: 'motor',
   CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: true,
};
exports.autoswarm = {
    PARENT: [exports.swarm],
    AI: {
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.necroswarm = {
    PARENT: [exports.swarm],
  NECRO: true,
  SHAPE: 4,
  AI: {
        FARMER: true,
    },
    INDEPENDENT: true,
 };
exports.trap = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.trapimm = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
  IMMUNE: true,
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.gentrap = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'glide', // def
  
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic2]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};

exports.gentrap2 = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'glide', // def
  
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
   GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20.5, 19.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic2, g.pound2, g.destroy2, g.anni]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.trap2 = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.pentatrap = {
    LABEL: 'Pentabionic Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: 5,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.block = {
    LABEL: 'Set Trap',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget'],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.blockgr = {
    LABEL: 'Set Trap',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',
  MOTION_TYPE: 'grow',
    CONTROLLERS: ['goToMasterTarget'],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.blockgr2 = {
    LABEL: 'Set Trap',
    PARENT: [exports.trap],
    SHAPE: 0,
    MOTION_TYPE: 'motor',
  MOTION_TYPE: 'grow',
    CONTROLLERS: ['goToMasterTarget'],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.boomerang = {
    LABEL: 'Boomerang',
    PARENT: [exports.trap],
    CONTROLLERS: ['boomerang'],
    MOTION_TYPE: 'motor',
    HITS_OWN_TYPE: 'never',
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
};
exports.testboomerang = {
    LABEL: 'Boomerang',
    PARENT: [exports.trap],
    MOTION_TYPE: 'motor',
    HITS_OWN_TYPE: 'never',
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
    FACING_TYPE: 'turnWithSpeed',
};
exports.armordrone = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 0,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        
        'hangOutNearMaster'
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
  INDEPENDANT: true,
};
exports.dronex = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
  DIE_AT_RANGE: true,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.drone = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.drone2 = {
    LABEL: 'Drone',
    TYPE: 'drone',
  TEAM: -100,
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.frdrone = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.sunchip = {
    PARENT: [exports.drone],
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.sunchip2 = {
    PARENT: [exports.drone],
    SHAPE: 3,
    NECRO: true,
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.sunchip3 = {
    PARENT: [exports.drone],
    SHAPE: 5,
    NECRO: true,
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.sunchip4 = {
    PARENT: [exports.drone],
    SHAPE: -5,
    NECRO: true,
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.invdrone = {
    PARENT: [exports.drone],
    SHAPE: 3,
  IMMUNE: true,
    INVISIBLE: [0.08, 0.03],
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.autosunchip = {
    PARENT: [exports.sunchip],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};

exports.bbooii = {
    PARENT: [exports.yeaboi],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.gunchip = {
    PARENT: [exports.drone],
    SHAPE: -1,
    
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};

exports.missile = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilefuj = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.missile, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.missile, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilefuj2 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.missilefuj, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.missilefuj, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilex = {
    PARENT: [exports.bullet],
    SHAPE: -8,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 135, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.highrecoil2]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, -135, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.highrecoil2]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilea = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['goToMasterTarget', 'spin'],
    BODY: {
        RANGE: 280,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.osht
            ]),
            TYPE: [exports.hibullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.sunmissile = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    SIZE: 40,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilespin1 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilespin2 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.essencemissile = {
    PARENT: [exports.bullet],
    SHAPE: 3,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [3, 10, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.doublereload, g.lowpower, g.muchmorerecoil, g.rng]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.testmissile2 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -5, 190, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 5, -190, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, -5, 230, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 5, -230, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, -5, 270, 0.2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 5, -270, 0.2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};

exports.testmissile3 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 0.5, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};

exports.hypermissile = {
    PARENT: [exports.missile],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 150, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 210, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, -2, 90, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 270, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, ],
};
exports.testmissile = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 9, 1, 0, 0, -200, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 200, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 205, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, -205, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 3, 1, 0, 0, 210, 0.2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 3, 1, 0, 0, -210, 0.2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.boosterspawn = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 135, 0.6, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 225, 0.6, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.snake = {
    PARENT: [exports.bullet],
    LABEL: 'Snake',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.4, 8, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([
                g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snakeskin,
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [10, 12, 0.8, 8, 0, 180, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            NEGATIVE_RECOIL: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([
                g.basic, g.sniper, g.hunter, g.hunter2, g.snake,
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, ],
};

exports.hive = {
    PARENT: [exports.bullet],
    LABEL: 'Hive',
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: 'turnWithSpeed',
    INDEPENDENT: true,
    CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf', ],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.op]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
}

exports.hivet = {
    PARENT: [exports.bullet],
    LABEL: 'Hive',
    BODY: {
        RANGE: 90,
        FOV: 0.1,
    },
    CONTROLLERS: ['nearestDifferentMaster', 'targetSelf'],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees, g.op]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
}

// TANK CLASSES
const base = {
    ACCEL: 1.6,
    SPEED: 5.25,
    HEALTH: 20,
    DAMAGE: 3,
    RESIST: 1,
    PENETRATION: 1.05,
    SHIELD: 8,
    REGEN: 0.025,
    FOV: 1,
    DENSITY: 0.5,
};
exports.genericTank = {
    LABEL: 'Unknown Class',
    TYPE: 'tank',
    DAMAGE_CLASS: 2,
  //HITS_OWN_TYPE: 'hard',
    DANGER: 5,
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'toTarget',
    SIZE: 12,
    INVISIBLE: [0, 0],
    MAX_CHILDREN: 0,
    DAMAGE_EFFECTS: false,
    BODY: { // def
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH,
        DAMAGE: base.DAMAGE,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 0.9,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true
};
let gun = {};

exports.autoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machineAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 11, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.slow]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.autoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 6, 1, 0, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach,

                g.pound, g.morereload, g.morereload
            ]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, {
        POSITION: [20, 6, 1, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach,

                g.pound, g.morereload, g.morereload
            ]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, ],
};
exports.part = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    SHAPE: 6,
    COLOR: 16,
};
exports.oldAutoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 7, 1, 0, -5.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorrecoil, g.morereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, {
        POSITION: [20, 7, 1, 0, 5.75, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorrecoil, g.morereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, ],
};

exports.auto3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
            TYPE: exports.bullet,
        },
    }],
};
exports.autoswarmgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
  MAX_CHILDREN: 40,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.auto5gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
            TYPE: exports.bullet,
        },
    }],
};
exports.heavy3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
            TYPE: exports.bullet,
        },
    }],
};
exports.masterGun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 16,
    MAX_CHILDREN: 6,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 14, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.master]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.sniper3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.autosnipe]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0, ],
    }, ],
};
exports.bansheegun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [26, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
            TYPE: exports.bullet,
        },
    }],
};
exports.auto4gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 4, 1, 0, -3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }],
};
exports.auto4invisgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
      INVISIBLE: [0.08, 0.03],
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 4, 1, 0, -3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }],
};
exports.bigauto4gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 1, 0, -4.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1, 0, 4.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }],
};
exports.domgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
     GUNS: [{
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
    }],
};
exports.domgun2 = {
    PARENT: [exports.genericTank],
    LABEL: '',
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
  MAX_CHILDREN: 16,
     GUNS: [{
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator2]),
            TYPE: exports.sunchip,
        },
    }, {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
    }],
};
exports.tritrapgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 16, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 16, 1.1, 20, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
            TYPE: exports.block,
        },
    }, ],
};
exports.smasherBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.smasherBody2 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: 5,
    INDEPENDENT: true,
};
exports.spikeBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -4,
    INDEPENDENT: true,
};
exports.spikeBody1 = {
    LABEL: '',
    CONTROLLERS: ['fastspin'],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.spikeBody2 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.spikeBodyYEE = {
    LABEL: '',
    CONTROLLERS: ['reversespin'],
    COLOR: 15,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.megasmashBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -6,
    INDEPENDENT: true,
};
exports.dominationBody = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'],
    COLOR: 9,
    SHAPE: 8,
    INDEPENDENT: true,
};
exports.dominationBody_l = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'],
    COLOR: 16,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.dominationBody2 = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'],
    COLOR: 9,
    SHAPE: 10,
    INDEPENDENT: true,
};
exports.baseSwarmTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Protector',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: {
        NO_LEAD: true,
        LIKES_SHAPES: true,
    },
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: [exports.swarm, {
                INDEPENDENT: true,
                AI: {
                    LIKES_SHAPES: true,
                },
            }, ],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }],
};
exports.baseGunTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Protector',
    BODY: {
        FOV: 5,
    },
    ACCEPTS_SCORE: false,
    CONTROLLERS: ['nearestDifferentMaster'],
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 12, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [11, 13, 1, 6, 0, 0, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [7, 13, -1.3, 6, 0, 0, 0, ],
    }],
};
exports.dom_ai = {
    PARENT: [exports.genericTank],
    LABEL: 'Dominator',
    SIZE: 64,
  DISPLAY_NAME: true,
  NAME: 'DOM',
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
     BODY: {
        RESIST: 100,
        SPEED: 0,
        HEALTH: 500,
        DAMAGE: 10,
        PENETRATION: 0.25,
        FOV: 0.7,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN * 0.75,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    //FACING_TYPE: 'autospin',
     TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  25,     0,      0,      0,     360,  0], 
                    TYPE: exports.dominationBody,
            },
            ],
             GUNS: [{
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
    }],
};
exports.dom_ai2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Dominator',
    SIZE: 64,
  MAX_CHILDREN: 30,
  DISPLAY_NAME: true,
  NAME: 'DOM',
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
     BODY: {
        RESIST: 100,
        SPEED: 0,
        HEALTH: 500,
        DAMAGE: 10,
        PENETRATION: 0.25,
        FOV: 0.7,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN * 0.75,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    //FACING_TYPE: 'autospin',
     TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  25,     0,      0,      0,     360,  0], 
                    TYPE: exports.dominationBody,
            },
            ],
             GUNS: [{
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator2]),
            TYPE: exports.sunchip,
        },
    }, {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
    }],
};
exports.sheildTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    CONTROLLERS: [],
     GUNS: [{
        POSITION: [19, 20, 1, 0, 0, 0, 0],

        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basico, g.single3]),
            TYPE: exports.bullet
          
        }
    }, {
        POSITION: [5.5, 20, -1.8, 6.5, 0, 0, 0]
    }],
};
exports.doublesheild = {
    PARENT: [exports.genericTank],
    LABEL: '',
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 0, 0, 270, 360, 0, ],
        TYPE: exports.sheildTurret,
    }, { POSITION: [20, 0, 0, 90, 360, 0, ],
        TYPE: exports.sheildTurret,
    },],
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: '',
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: false,
            AUTOFIRE: false,
            SYNCS_SKILLS: false,
            MAX_CHILDREN: 0,
            ALT_FIRE: false,
            NEGATIVE_RECOIL: false,
        },
    }],
};
exports.baseProtectorx = {
    PARENT: [exports.genericTank],
    LABEL: 'Dominator',
   // SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: {
        RESIST: 100,
        SPEED: 0,
        HEALTH: 250,
        DAMAGE: 10,
        PENETRATION: 0.25,
        FOV: 0.7,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN * 0.75,
    },
   // CONTROLLERS: ['nearestDifferentMaster'],
    //FACING_TYPE: 'autospin',
     TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  25,     0,      0,      0,     360,  0], 
                    TYPE: exports.dominationBody,
            },
            ],
             GUNS: [{
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
    }],
};
exports.baseProtectorx2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Dominator',
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: { // def
        SPEED: 0,
        HEALTH: 10000,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1000,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
   // CONTROLLERS: ['nearestDifferentMaster'],
    //FACING_TYPE: 'autospin',
     TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  25,     0,      0,      0,     360,  0], 
                    TYPE: exports.dominationBody,
            },
            ],
             GUNS: [{
        POSITION: [3.5, 3.75, 1, 8, 0, 0, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 45, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 90, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 135, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 180, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 225, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 270, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 315, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }]
};
exports.baseProtector = {
    PARENT: [exports.genericTank],
    LABEL: 'Base',
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: { // def
        SPEED: 0,
        HEALTH: 10000,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1000,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody,
    }, {
        POSITION: [12, 7, 0, 45, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 135, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 225, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 315, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, ],
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0, ],
    }, ],
};
exports.xbaseProtector = {
    PARENT: [exports.genericTank],
    LABEL: 'Elite Swarmer',
    SIZE: 64,
  COLOR: 31,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
   CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: { // def
        SPEED: 0,
        HEALTH: 10000,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1000,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
   // FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody,
    }, {
        POSITION: [12, 7, 0, 45, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 135, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 225, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 315, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, ],
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0, ],
    }, {
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
    }],
};
exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.minionll = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
  DIE_AT_RANGE: true,
  BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
   SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
  INDEPENDANT: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel'//, 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.skimminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
     GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block,
        },
    }, ],
};
exports.skimminion2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
      GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 10, 1, 14, 0, 0, 0, ],
    }, {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0, ],
    }, {
        //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
        //    }, {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
            TYPE: exports.boomerang,
        },
    }, ],
};
exports.hewnminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
        LEVEL: 45,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, 5.5, 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -5.5, -25, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.selfspawner = {
    PARENT: [exports.genericTank],
    LABEL: 'Self Spawner',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.factory]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.selfspawner,
        },
    }, ],
};
exports.minion2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, -45, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 9, 1, 0, 0, 45, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 9, 1, 0, 0, 22.5, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 9, 1, 0, 0, -22.5, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.miniontest = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap,
        },
    }, ],
};
exports.miniontest = makeAuto(exports.miniontest, 'TESTBED minion', {
    type: exports.oldAutoSmasherTurret,
    size: 10,
});

exports.pillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.pillboxTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.hypermissile,
        },
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
    }, ],
};
exports.pillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        RANGE: 1260,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC  LAYER*/
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.pillboxTurret,
    }]
};
exports.pillbox2 = {
    LABEL: 'Pilltestbox',
    PARENT: [exports.trap],
    SHAPE: 5,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 4,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 0, 0, 0, 360, 1],
        TYPE: exports.pillboxTurret2,
    }, ]
};
exports.skimturret = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 2,
    },
    COLOR: 2,
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    LABEL: '',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.hypermissile,
        },
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
    }, ],
};
exports.skimboss = {
    PARENT: [exports.genericTank],
    BODY: {
        HEALTH: 300,
        DAMAGE: 2,
        SHIELD: 200,
    },
    SHAPE: 3,
    COLOR: 2,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [15, 5, 0, 60, 170, 0],
        TYPE: exports.skimturret,
    }, {
        POSITION: [15, 5, 0, 180, 170, 0],
        TYPE: exports.skimturret,
    }, {
        POSITION: [15, 5, 0, 300, 170, 0],
        TYPE: exports.skimturret,
    }, ],
};

function makeAuto(type, name = -1, options = {}) {
    let turret = {
        type: exports.autoTurret,
        size: 10,
        independent: true,
    };
    if (options.type != null) {
        turret.type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    if (options.independent != null) {
        turret.independent = options.independent;
    }

    let output = JSON.parse(JSON.stringify(type));
    let autogun = {
        /*********  SIZE               X       Y     ANGLE    ARC */
        POSITION: [turret.size, 0, 0, 180, 360, 1, ],
        TYPE: [turret.type, {
            CONTROLLERS: ['nearestDifferentMaster'],
            INDEPENDENT: turret.independent,
        }],
    };
    if (type.GUNS != null) {
        output.GUNS = type.GUNS;
    }
    if (type.TURRETS == null) {
        output.TURRETS = [autogun];
    } else {
        output.TURRETS = [...type.TURRETS, autogun];
    }
    if (name == -1) {
        output.LABEL = 'Auto-' + type.LABEL;
    } else {
        output.LABEL = name;
    }
    output.DANGER = type.DANGER + 1;
    return output;
}

function makeHybrid(type, name = -1) {
    let output = JSON.parse(JSON.stringify(type));
    let spawner = {
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
            TYPE: [exports.drone, {
                INDEPENDENT: true,
            }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,
            MAX_CHILDREN: 3,
        },
    };

    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner];
    } else {
        output.GUNS = [...type.GUNS, spawner];
    }
    if (name == -1) {
        output.LABEL = 'Hybrid ' + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}

exports.extrazfut2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Extraz Extraz Fut',
    //CONTROLLERS: ['nearestDifferentMaster'],
  //INTANGIBLE: true,
  //BODY: { // def
    //    SHIELD: 100000,
     //   REGEN: 100000,
      //  HEALTH: 100000,
     //   DAMAGE: 0,
       // DENSITY: 1,
      //  FOV: 6,
       // SPEED: 20,
  //  },
  SIZE: 90,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [90, 90, 0, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.tribullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.extrazfut = {
    PARENT: [exports.genericTank],
    LABEL: 'Extraz Fut',
    //CONTROLLERS: ['nearestDifferentMaster'],
  //INTANGIBLE: true,
  //BODY: { // def
    //    SHIELD: 100000,
     //   REGEN: 100000,
      //  HEALTH: 100000,
     //   DAMAGE: 0,
       // DENSITY: 1,
      //  FOV: 6,
       // SPEED: 20,
  //  },
  //SIZE: 90,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [90, 90, 0, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.tribullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.Ntrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Necromancer Swarm',
  SHAPE: 4,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.necroswarm,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basic = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basicPg2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Page2',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basicW = {
    PARENT: [exports.genericTank],
    LABEL: 'Stalker',
    //CONTROLLERS: ['nearestDifferentMaster'],
   INVISIBLE: [0.08, 0.03],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  27,    8.5,     -2,      0,      0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
exports.basicL = {
    PARENT: [exports.genericTank],
    LABEL: 'Snake',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.4, 8, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([
                g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snakeskin,
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [10, 12, 0.8, 8, 0, 180, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            NEGATIVE_RECOIL: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([
                g.basic, g.sniper, g.hunter, g.hunter2, g.snake,
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, ],
};
exports.sweswarmer = {
    PARENT: [exports.genericTank],
    LABEL: 'Centriole',
    //CONTROLLERS: ['nearestDifferentMaster'],
  SHAPE: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.sweswarm,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
      
    }, ],
};
exports.meatball_launcher = {
    PARENT: [exports.genericTank],
    LABEL: 'Swedish Meatball Launcher',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.mario,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basic_cl = {
    PARENT: [exports.genericTank],
    LABEL: 'Arena Closer',
  SIZE: 40,
  GOD_MODE: true,
  COLOR: 13,
  SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1,
    }),
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic_cl]),
            TYPE: exports.bulletimm,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basic_cl2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Fallen Arena Closer',
  SIZE: 40,
  DAMAGE_CLASS: 1,
  GOD_MODE: true,
  COLOR: 16,
  TYPE: 'maze',
  SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1,
    }),
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic_cl]),
            TYPE: exports.bulletimm,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basic_cl3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Ghost Arena Closer',
  SIZE: 40,
  GOD_MODE: true,
  INTANGIBLE: true,
  HITS_OWN_TYPE: 'never',
  CAN_GO_OUTSIDE_ROOM: true,
BODY: {
  DAMAGE: 0,
},
  COLOR: 6,
  SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1,
    }),
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic_cl]),
            TYPE: exports.bulletimm,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.lelz = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    //CONTROLLERS: ['nearestDifferentMaster'],
  SKILL: skillSet({
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
      
    }),
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic3]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.anti_cancer = {
    PARENT: [exports.genericTank],
    LABEL: 'Anti-cancer(Guaranteed to kill Microsoft sam,Object community, Greeny phatom, GoAnimate, and much more cancer',
    //CONTROLLERS: ['nearestDifferentMaster'],
  GOD_MODE: true,
  SHAPE: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.haha]),
            TYPE: exports.bulletimm,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basic_x = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    //CONTROLLERS: ['nearestDifferentMaster'],
  SHAPE: 5,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.attract]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.ninja = {
    PARENT: [exports.genericTank], //
    LABEL: 'Storm',
  SHAPE: 6, // A hexagon no, i just want to edit the cannon
    //CONTROLLERS: ['nearestDifferentMaster'],/first one is len
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 2, ],// here is the shittycannon 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.storm]),
            TYPE: exports.dronex,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 200, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.knight = {
    PARENT: [exports.genericTank], //
    LABEL: 'Knight',
  SHAPE: 11, // A hexagon no, i just want to edit the cannon
    //CONTROLLERS: ['nearestDifferentMaster'],/first one is len
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 20, 0, 0, 0, 0, 0, ],// here is the shittycannon 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.storm]),
            TYPE: exports.autoswarm,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 200, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.cancer = {
    PARENT: [exports.genericTank], //
    LABEL: 'cancer',
  SHAPE: 1, // A hexagon no, i just want to edit the cannon
    //CONTROLLERS: ['nearestDifferentMaster'],/first one is len
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 3, 1, 0, 0, 0, 5, ],// here is the shittycannon 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.snake,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.aussie = {
    PARENT: [exports.genericTank], //
    LABEL: 'Aussie',
  SHAPE: 2, // A hexagon no, i just want to edit the cannon
    //CONTROLLERS: ['nearestDifferentMaster'],/first one is len
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [30, 10, 0, 0, 0, 0, 5, ],// here is the shittycannon 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.trap,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.samurai = {
    PARENT: [exports.genericTank], //
    LABEL: 'Samurai',
  SHAPE: 6, // A hexagon no, i just want to edit the cannon
    //CONTROLLERS: ['nearestDifferentMaster'],/first one is len
  STAT_NAMES: statnames.smasher,
   BODY: {
        FOV: base.FOV * 1.2,
        DENSITY: base.DENSITY * 2,
      DAMAGE: 8
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 10, 7, -5, 0, 0, 0, ],// here is the shittycannon 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.samurai]),
            TYPE: exports.minion,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: -1, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],

};
exports.spect = {
    PARENT: [exports.genericTank], //
    LABEL: 'Spect',
  ALPHA: 0,
  SHAPE: 6, // A hexagon no, i just want to edit the cannon
    //CONTROLLERS: ['nearestDifferentMaster'],/first one is len

BODY: { // def
       // SHIELD: 100000,
        //REGEN: 100000,
        //HEALTH: 100000,
        //DAMAGE: 0,
        DENSITY: 1,
        FOV: 6,
        SPEED: 20,
    },
    TURRETS: [],

};
exports.spooner = {
    PARENT: [exports.genericTank], //
    LABEL: 'Spooner',
  SHAPE: 2, // A hexagon no, i just want to edit the cannon
    //CONTROLLERS: ['nearestDifferentMaster'],/first one is len
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1, 2, 5, 0, 0, 0, 0, ],// here is the shittycannon 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.samurai]),
            TYPE: exports.minion,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 2, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basicf = {
    PARENT: [exports.genericTank],
    LABEL: 'Illusionist',
  INVISIBLE: [0.08, 0.03],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [30, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.illusion]),

            TYPE: exports.minionll,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 5, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
       
        },
    }, {
              POSITION: [20.5, 19.5, 1, 0, 0, 0, 0, ],

    }, ],
};
exports.noonga = {
    PARENT: [exports.genericTank],
    LABEL: 'Mini Machine',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, -0.5, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spam]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basicbed = {
    PARENT: [exports.genericTank],
    LABEL: 'Developer',
    CONTROLLERS: [],
      RESET_UPGRADES: true,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
           SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }]
};
exports.gn = {
    PARENT: [exports.genericTank],
    LABEL: 'test',
    //CONTROLLERS: ['nearestDifferentMaster'],
  MAX_CHILDREN: 50,
    GUNS: [{
        POSITION: [15, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          MAX_HEALTH: 10,
           SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.gunchip, {
                SHAPE: 5
            }]
        }
    }]
};
exports.bigbasicbed = {
    PARENT: [exports.genericTank],
    LABEL: 'Big Developer',
  SIZE: 30,
  BODY: {
     HEALTH: 100,
   },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
           SHOOT_SETTINGS: combineStats([g.huge]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }]
};
exports.dronespike = {
    PARENT: [exports.genericTank],
    LABEL: 'star',
    TYPE: 'minion',
    COLOR: 12,
    SHAPE: 1,
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    MOSTION: 'swarm',
    BODY: {
        FOV: 0.5,
        SPEED: 4.5,
        ACCELERATION: 2,
        HEALTH: 7,
        SHIELD: 0,
        DAMAGE: 2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
        REGEN: base.REGEN * 1.7,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [21.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0, ],
        TYPE: exports.spikeBody1,
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0, ],
        TYPE: exports.spikeBody2,
    }],
};
exports.not_fut = {
    PARENT: [exports.genericTank],
    LABEL: 'star',
    TYPE: 'minion',
    COLOR: 12,
    SHAPE: 1,
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    MOSTION: 'swarm',
    BODY: {
        FOV: 0.5,
        SPEED: 4.5,
        ACCELERATION: 2,
        HEALTH: 7,
        SHIELD: 0,
        DAMAGE: 2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
        REGEN: base.REGEN * 1.7,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [21.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0, ],
        TYPE: exports.spikeBody1,
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0, ],
        TYPE: exports.spikeBodyYEE,
    }],
};
exports.basicbed2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Page2',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
           SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }]
};
exports.basicbed3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Page3',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
           SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }]
};
exports.dronespike2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Beyblade',
    TYPE: 'minion',
    COLOR: 12,
    SHAPE: 0,
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    MOSTION: 'swarm',
    BODY: {
        FOV: 0.5,
        SPEED: 4.5,
        ACCELERATION: 2,
        HEALTH: 7,
        SHIELD: 0,
        DAMAGE: 2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
        REGEN: base.REGEN * 1.7,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [21.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0, ],
        TYPE: exports.spikeBody1,
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0, ],
        TYPE: exports.spikeBody2,
    }],
};
exports.spiller = {
    PARENT: [exports.genericTank],
    LABEL: 'Spiller',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spam]),
            TYPE: exports.spillbullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.accelerator = {
    PARENT: [exports.genericTank],
    LABEL: 'accel',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 11, 1.3, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload]),
            TYPE: exports.hibullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.sine = {
    PARENT: [exports.genericTank],
    LABEL: 'Destruction',
    //CONTROLLERS: ['nearestDifferentMaster'],
    BODY: {
        SPEED: base.SPEED * 7,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 20, 1, 0, 0, -60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.norng]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [20, 20, 1, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.norng]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [20, 20, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.norng]),
            TYPE: exports.missile,
        },
    }, ],
};
exports.builder3 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Rock Climber',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15
    },
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.morespeed, g.morespeed]),
            TYPE: exports.obstacle
        }
    }]
};
exports.testbedParent = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED',
    BODY: {
        SHIELD: 1000,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2
    },
    TURRETS: [],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: [exports.bullet, {
                SHAPE: 8,
            }]
        }
    }]
};
exports.testbedParento = {
    PARENT: [exports.genericTank],
    LABEL: "Tests and other stuff",
    BODY: {
        SHIELD: 1000,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2
    },
    TURRETS: [],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: [exports.bullet, {
                SHAPE: 6,
            }]
        }
    }]
};
exports.devtank = {
    PARENT: [exports.testbedParent],
    LABEL: 'Tester',
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: -1
};
exports.devtank2 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Developer mode',
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: -1
};

exports.testbed = {
    PARENT: [exports.testbedParent],
    LABEL: 'TESTBED'
};
exports.testbed2 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Page 2'
};
exports.testbed3 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Page 3'
};
exports.testbed4 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Page 4'
};
exports.testbed5 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Misc'
};
exports.testbed6 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Tier 4'
};
exports.testbed7 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Idea bin'
};
exports.testbedm = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED',
    TYPE: 'minion',
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2
    },
    TURRETS: [],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }],
};
exports.single = {
    PARENT: [exports.genericTank],
    LABEL: 'Single',
    GUNS: [{
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
};
exports.linger = {
    PARENT: [exports.genericTank],
    LABEL: 'Jump Single',
  SHAPE: 4,
    GUNS: [{
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single2]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
};
exports.force_field = {
    PARENT: [exports.genericTank],
    LABEL: 'Sheild single',
  //SHAPE: 4,
    GUNS: [{
        POSITION: [19, 20, 1, 0, 0, 0, 0],

        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basico, g.single3]),
            TYPE: exports.bullet
          
        }
    }, {
        POSITION: [5.5, 20, -1.8, 6.5, 0, 0, 0]
    }]
};
let smshskl = 12;
exports.smash = {
    PARENT: [exports.genericTank],
    LABEL: 'Smasher',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.smashD = {
    PARENT: [exports.genericTank],
    LABEL: 'Smasher',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: true,
    
};
exports.elite_smash = {
    PARENT: [exports.genericTank],
    LABEL: 'THICC Smasher',
    DANGER: 6,
   //SIZE:48,
  BODY: {
        RESIST: 100,
        SPEED: 0,
        HEALTH: 100,
        DAMAGE: 10,
        PENETRATION: 0.25,
        FOV: 0.7,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN * 0.75,
    },
    TURRETS: [{
        POSITION: [29.5, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.lulwat = {
    PARENT: [exports.genericTank],
    LABEL: 'Wizard',
    DANGER: 6,
   //SIZE:48,
  MAX_CHILDREN: 14,
    TURRETS: [{
        POSITION: [29.5, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody_l
    }],
  GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.drone,
        },
    }, {
     /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1, 12, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.not_fut,
        },
    },],



};
exports.smash2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Team test',
  TEAM: -100,
  SHAPE: 5,
  COLOR: 14,
  IMMUNE: true,
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.bonk = {
    PARENT: [exports.genericTank],
    LABEL: 'Bonker',
    DANGER: 6,
    SIZE: 7,
    SHAPE: 0,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
        SPEED: base.SPEED * 3
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.bonkr = {
    PARENT: [exports.genericTank],
    LABEL: 'Hider',
    DANGER: 6,
    SIZE: 7,
    INVISIBLE: [0.08, 0.03],
    SHAPE: 0,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
        SPEED: base.SPEED * 3
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody2
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.megasmash = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega-Smasher',
    DANGER: 7,
    BODY: {
        SPEED: base.speed * 1.05,
        FOV: base.FOV * 1.1,
        DENSITY: base.DENSITY * 4,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [24, 0, 0, 0, 360, 0, ],
        TYPE: exports.megasmashBody,
    }],
};
exports.spike = {
    PARENT: [exports.genericTank],
    LABEL: 'Spike',
    DANGER: 7,
    BODY: {
        SPEED: base.speed * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [20.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0, ],
        TYPE: exports.spikeBody,
    }],
};
exports.weirdspike = {
    PARENT: [exports.genericTank],
    LABEL: 'Spike',
    DANGER: 7,
    BODY: {
        DAMAGE: base.DAMAGE * 1.15,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 1.5,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [20.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody1,
    }, {
        POSITION: [20.5, 0, 0, 180, 360, 0, ],
        TYPE: exports.spikeBody2,
    }],
};
exports.autosmash = makeAuto(exports.smash, 'Auto-Smasher', {
    type: exports.autoSmasherTurret,
    size: 11,

});

exports.cancerx = makeHybrid(exports.smashD, 'Smasher Hybrid', {
    type: exports.autoSmasherTurret,
    size: 11,

});
exports.autosmash.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl,

    smshskl, smshskl,
];

exports.twin = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.ladder = {
    PARENT: [exports.genericTank],
    LABEL: 'Ladder',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [2, 11, 1, 10, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 20, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 30, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                          POSITION: [2, 11, 1, 40, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [45, 2, 1, 0, 7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [45, 2, 1, 0, -7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.ladderx = {
    PARENT: [exports.genericTank],
    LABEL: 'Ladder Guard',
  SHAPE: -4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [2, 11, 1, 10, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.block,
        },
    }, { 
                    POSITION: [2, 11, 1, 20, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.block,
        },
    }, { 
                    POSITION: [2, 11, 1, 30, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.block,
        },
    }, { 
                          POSITION: [2, 11, 1, 40, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.block,
        },
    }, { 
              POSITION: [45, 2, 1, 0, 7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.block,
        },
    }, { 
        POSITION: [45, 2, 1, 0, -7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.block,
        },
    }, ],
};
exports.skimmerspinner = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, -6, -10, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.missilespin1,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 6, 10, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.missilespin2,
        },
    }, ],
};
exports.gunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.vulcan = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 1, 1, 0, 6.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 6.1, 0, 1 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 5, 0, 2 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 4, 0, 3 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 3, 0, 4 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 2, 0, 5 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 1, 0, 6 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 0, 0, 7 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -1, 0, 8 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -2, 0, 9 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -3, 0, 10 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -4, 0, 11 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -5, 0, 12 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -6.1, 0, 13 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -6.5, 0, 14 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.gunnerskim2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.halfspeed]),
            TYPE: exports.essencemissile,
        },
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.halfspeed]),
            TYPE: exports.essencemissile,
        },
    }, ],
};
exports.gunnerskim = {
    PARENT: [exports.genericTank],
    LABEL: 'Blaster',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 9, 1, 0, 8.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.morespeed]),
            TYPE: exports.testmissile3,
        },
    }, {
        POSITION: [16, 9, 1, 0, -8.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.morespeed]),
            TYPE: exports.testmissile3,
        },
    }, ],
};
exports.machinegunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Gunner',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 3, 4.0, -3, 5, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, -3, -5, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 3, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, ]
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
    PARENT: [exports.genericTank],
    LABEL: 'Nailgun',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};

exports.double = {
    PARENT: [exports.genericTank],
    LABEL: 'Double Twin',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.tripletwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Twin',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 120, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 240, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hugetripletwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Twin',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 0.9, -1, 0, -5, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.skim, g.double]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [20, 8, 0.9, -1, 0, 5, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.skim, g.double]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [20, 8, 0.9, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.skim, g.double]),
            TYPE: exports.missile,
        },
    }, ],
};
exports.autodouble = makeAuto(exports.double, 'Auto-Double');
exports.split = {
    PARENT: [exports.genericTank],
    LABEL: 'Hewn Double',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, 5.5, 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -5.5, -25, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.bent = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Shot',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.benttrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Shot',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.a,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.a,
        },
    }, {
        POSITION: [5, 8, 1.5, 16, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [5, 8, 1.5, 16, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.a,
        },
    }, {
        POSITION: [5, 8, 1.5, 17, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.trap,
        },
    }, ],
};
exports.bentdouble = {
    PARENT: [exports.genericTank],
    LABEL: 'Bent Double',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -1, -25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -1, 155, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, -155, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.penta = {
    PARENT: [exports.genericTank],
    LABEL: 'Penta Shot',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 8, 1, 0, -3, -30, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, 3, 30, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -2, -15, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 15, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.benthybrid = makeHybrid(exports.bent, 'Bent Hybrid');
exports.singlehybrid = makeHybrid(exports.single, 'Single Hybrid');
exports.triple = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Triplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, 1, 0, 5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.quint = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    LABEL: 'Quintuplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 10, 1, 0, -5, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 10, 1, 0, 5, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 10, 1, 0, -3, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 10, 1, 0, 3, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.dual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCEL: base.ACCEL * 0.8,
        FOV: base.FOV * 1.1,
    },
    LABEL: '',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 7, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.sniper = {
    PARENT: [exports.genericTank],
    LABEL: 'Sniper',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.rifle = {
    PARENT: [exports.genericTank],
    LABEL: 'Rifle',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 10.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.assassin = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Assassin',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};

exports.ranger = {
    PARENT: [exports.genericTank],
    LABEL: 'Ranger',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.5,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [32, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.autoass = makeAuto(exports.assassin, "");

exports.hunter = {
    PARENT: [exports.genericTank],
    LABEL: 'Hunter',
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.preda = {
    PARENT: [exports.genericTank],
    LABEL: 'Predator',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 16, 1, 0, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.poach = makeHybrid(exports.hunter, 'Poacher');
exports.sidewind = {
    PARENT: [exports.genericTank],
    LABEL: 'Sidewinder',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 11, -0.5, 14, 0, 0, 0, ],
    }, {
        POSITION: [21, 12, -1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
            TYPE: exports.snake,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.director = {
    PARENT: [exports.genericTank],
    LABEL: 'Director',
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 5,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.x = {
    PARENT: [exports.genericTank],
    LABEL: 'Crusader',
    STAT_NAMES: statnames.drone,
    DANGER: 5,
//  SHAPE: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 10,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, -1.4, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.dronespike,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        }, }, {
        POSITION: [15, 10, -1.4, 0, 0, 270, 0],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.miniontest,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.directorx = {
    PARENT: [exports.genericTank],
    LABEL: 'Armor',
    STAT_NAMES: statnames.drone,
    DANGER: 5,
  SHAPE: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 22,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12,1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.dronex, g.overx]),
            TYPE: exports.armordrone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.seeker = {
    PARENT: [exports.genericTank],
    LABEL: 'Seeker',
  INVISIBLE: [0.08, 0.03],
  SHAPE: -4,
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 10,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.invdrone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.blader = {
    PARENT: [exports.genericTank],
    LABEL: 'Blader',
  //INVISIBLE: [0.08, 0.03],
  SHAPE: -5,
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 10,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.dronespike2,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.master = {
    PARENT: [exports.genericTank],
    LABEL: '',
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.15,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [16, 1, 0, 0, 0, 0],
        TYPE: exports.masterGun,
    }, {
        POSITION: [16, 1, 0, 120, 0, 0],
        TYPE: [exports.masterGun, {
            INDEPENDENT: true,
        }],
    }, {
        POSITION: [16, 1, 0, 240, 0, 0],
        TYPE: [exports.masterGun, {
            INDEPENDENT: true,
        }],
    }, ],
};

exports.overseer = {
    PARENT: [exports.genericTank],
    LABEL: 'Overseer',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overlord = {
    PARENT: [exports.genericTank],
    LABEL: 'Overlord',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overlord2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Defect',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 30, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone2,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 30, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone2,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 30, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone2,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 30, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone2,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.spaceship = {
    PARENT: [exports.genericTank],
    LABEL: 'Spaceship',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    SHAPE: 8,
    SIZE: 28,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        HEALTH: base.HEALTH * 4,
    },
    MAX_CHILDREN: 32,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 7, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.mship = {
    PARENT: [exports.genericTank],
    LABEL: 'Mothership',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    //SHAPE: 8,
    SIZE: 28,
   SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1,
    }),
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        HEALTH: base.HEALTH * 20,
    },
    MAX_CHILDREN: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 7, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
}
exports.mship = makeAuto(exports.mship, 'Mothership', {
    type: exports.domgun2,
    size: 10,
});
exports.spaceshiplite = {
    PARENT: [exports.genericTank],
    LABEL: 'Spaceship Lite',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    SHAPE: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        HEALTH: base.HEALTH * 4,
        RELOAD: base.RELOAD * 9,
    },
    MAX_CHILDREN: 24,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 7, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overlordm = {
    PARENT: [exports.genericTank],
    LABEL: 'Overlord',
    TYPE: 'minion',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        RANGE: 720,
    },
    DIE_AT_RANGE: true,
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overtrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Overtrapper',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.banshee = {
    PARENT: [exports.genericTank],
    LABEL: '',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 80, 0],
        TYPE: exports.bansheegun,
    }, {
        POSITION: [10, 8, 0, 120, 80, 0],
        TYPE: exports.bansheegun,
    }, {
        POSITION: [10, 8, 0, 240, 80, 0],
        TYPE: exports.bansheegun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 300, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, ]
};
exports.bansheehammer = {
    PARENT: [exports.genericTank],
    LABEL: 'Candle',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 8,
        SPEED: base.SPEED * 8,
        FOV: base.FOV * 1.1,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 80, 0],
        TYPE: exports.bansheegun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.candl]),
            TYPE: exports.bullet,
            AUTOFIRE: false,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.candl]),
            TYPE: exports.bullet,
            AUTOFIRE: false,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ]
};
exports.autoover = makeAuto(exports.overseer, "");
exports.overgunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Overgunner',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, ],
};

function makeSwarmSpawner(guntype) {
    return {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['nearestDifferentMaster'],
        COLOR: 16,
        AI: {
            NO_LEAD: true,
            SKYNET: true,
            FULL_VIEW: true,
        },
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 15, 0.6, 14, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: guntype,
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }],
    };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
    PARENT: [exports.genericTank],
    LABEL: 'Cruiser',
    DANGER: 6,
    FACING_TYPE: 'locksFacing',
    STAT_NAMES: statnames.swarm,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.battleship = {
    PARENT: [exports.genericTank],
    LABEL: 'Battleship',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCEL,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, ],
};
exports.solidago = {
    PARENT: [exports.genericTank],
    LABEL: 'Solidago',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCEL,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 100, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 100, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
              POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, -100, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, -100, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, ],
};
exports.carrier = {
    PARENT: [exports.genericTank],
    LABEL: 'Carrier',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }],
};
exports.autocruiser = makeAuto(exports.cruiser, "");
exports.fortress = {
    PARENT: [exports.genericTank],
    LABEL: 'Fortress', //'Palisade',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 60, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 300, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 300, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};

exports.underseer = {
    PARENT: [exports.genericTank],
    LABEL: 'Underseer',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, ],
};
exports.necromancer = {
    PARENT: [exports.genericTank],
    LABEL: 'Necromancer',
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    SHAPE: 4,
    FACING_TYPE: 'autospin',
    MAX_CHILDREN: 14,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
            TYPE: exports.autosunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro,
            LABEL: 'Guard',
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
            TYPE: exports.autosunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro,
            LABEL: 'Guard',
        },
    }, ],
};
exports.omnimancer = {
    PARENT: [exports.genericTank],
    LABEL: 'Omnimancer',
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    SHAPE: 6,
    FACING_TYPE: 'autospin',
    MAX_CHILDREN: 14,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip2,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
            TYPE: exports.sunchip3,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro,
            LABEL: 'Guard',
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
            TYPE: exports.sunchip4,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro,
            LABEL: 'Guard',
        },
    }, ],
};
exports.lilfact = {
    PARENT: [exports.genericTank],
    LABEL: '',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCEL * 0.5,
        FOV: 1.1,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
    }],
};
exports.factory = {
    PARENT: [exports.genericTank],
    LABEL: 'Factory',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.factory2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Factory trapper',
    DANGER: 7,
  SHAPE: -4,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.skimminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.factory3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Factory Boomer',
    DANGER: 7,
  SHAPE: -5,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.skimminion2,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.deviser = {
    PARENT: [exports.genericTank],
    LABEL: 'Deviser',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 1,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.minion2,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.fact2 = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 9,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.overlordm,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.testbedm,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};

exports.machine = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Gun',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.fine = {
    PARENT: [exports.genericTank],
    LABEL: 'Gun',
  SHAPE: 11,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 10, 1.4, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spam4, g.bark]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machine2 = {
    PARENT: [exports.genericTank],
    LABEL: 'F16',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 10, 1.4, 9, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bbooii,
        },
    }, {
       POSITION: [18, 8, 1, 0, 0, 0, 0, ],
    },
  ],
};
exports.spray = {
    PARENT: [exports.genericTank],
    LABEL: 'Sprayer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.spray2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Sprayer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil]),
            TYPE: exports.trapimm,
        },
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.trapimm,
        },
    }, ],
};
exports.mini = {
    PARENT: [exports.genericTank],
    LABEL: 'Minigun',
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.stream = {
    PARENT: [exports.genericTank],
    LABEL: 'Streamliner',
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 8, 1, 0, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.stream2 = {
    PARENT: [exports.genericTank],
   // LABEL: 'Swedish Streamliner',
   LABEL: 'Flamethrower',
    DANGER: 7,
  SHAPE: 4,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
          
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.mario,
        },
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.mario,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.mario,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.mario,
        },
    }, {
        POSITION: [17, 8, 1, 0, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.blockgr2,
        },
    }, ],
};
exports.hybridmini = makeHybrid(exports.mini, "");
exports.minitrap = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 8, 1.3, 22, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 8, 1.3, 18, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 8, 1.3, 14, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};

exports.pound = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
    },
    LABEL: 'Pounder',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.destroy = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
    },
    LABEL: 'Destroyer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.anni = {
    PARENT: [exports.genericTank],
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
    },
    LABEL: 'Annihilator',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20.5, 19.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.FTBToArras = {
PARENT: [exports.genericTank],
LABEL: "Keeper",
//SIZE: 12,
SHAPE: 0,
MAX_CHILDREN: 8,
GUNS: [
{
POSITION: [18,8,1,0,0,44.8900274296484,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,134.8900274296484,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,224.8900274296484,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,314.8900274296484,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,12.8,1,0,0,359.00697259699564,0],
PROPERTIES: {
   SHOOT_SETTINGS: combineStats([g.spam, g.pound, g.destroy]),
TYPE: exports.bullet
}, }, 
], };
exports.FTBToArras3 = {
PARENT: [exports.genericTank],
LABEL: "PLACEHOLDER",
SIZE: 12,
SHAPE: 0,
MAX_CHILDREN: 8,
GUNS: [
{
POSITION: [18,8,1,0,0,24.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,48.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,72.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,96.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,120.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,144.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,168.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,192.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,216.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,240.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,264.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,288.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,312.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,336.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,0.338,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
TYPE: exports.bullet
}, }, 
], };
exports.FTBToArrasY = {
PARENT: [exports.genericTank],
LABEL: "",
//SIZE: 12,
SHAPE: 0,
MAX_CHILDREN: 8,
GUNS: [
{
POSITION: [5,12,1.2,8,0,43.493,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,88.493,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,133.493,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,178.493,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,223.493,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,268.493,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,313.493,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,358.493,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
], };
exports.FTBToArrasX = {
PARENT: [exports.genericTank],
LABEL: "PLACEHOLDER",
//SIZE: 12,
SHAPE: 0,
MAX_CHILDREN: 8,
GUNS: [
{
POSITION: [48.462,32,1,-16.615,0,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basico, g.singleX]),
TYPE: exports.bullet
}, }, 
{
POSITION: [16.615,4.8,1,-5.538,13.846,165,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basico, g.singleX]),
TYPE: exports.bullet
}, }, 
{
POSITION: [16.615,4.8,1,-5.538,-13.846,195,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basico, g.singleX]),
TYPE: exports.bullet
}, }, 
{
POSITION: [8.308,4.8,-1,0,0,285,0],
},
{
POSITION: [1.3846666666666665, 4.8, 1.3, 9.063272727272727, 0, 285, 0 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.machgun]),
TYPE: exports.trap
}, }, 
{
POSITION: [8.308,4.8,-1,0,0,75,0],
},
{
POSITION: [1.3846666666666665, 4.8, 1.3, 9.063272727272727, 0, 75, 0 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.machgun]),
TYPE: exports.trap
}, }, 
], };
exports.FTBToArrasT = {
PARENT: [exports.genericTank],
LABEL: "PLACEHOLDER",
SIZE: 12,
SHAPE: 4,
MAX_CHILDREN: 8,
GUNS: [
{
POSITION: [18,22.4,-1,0,0,88.015,0],
},
{
POSITION: [3, 22.4, 1.3, 19.636363636363633, 0, 88.015, 0 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.machgun]),
TYPE: exports.trap
}, }, 
{
POSITION: [18,22.4,-1,0,0,160.015,0],
},
{
POSITION: [3, 22.4, 1.3, 19.636363636363633, 0, 160.015, 0 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.machgun]),
TYPE: exports.trap
}, }, 
{
POSITION: [18,22.4,-1,0,0,232.015,0],
},
{
POSITION: [3, 22.4, 1.3, 19.636363636363633, 0, 232.015, 0 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.machgun]),
TYPE: exports.trap
}, }, 
{
POSITION: [18,22.4,-1,0,0,304.015,0],
},
{
POSITION: [3, 22.4, 1.3, 19.636363636363633, 0, 304.015, 0 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.machgun]),
TYPE: exports.trap
}, }, 
{
POSITION: [18,22.4,-1,0,0,16.015,0],
},
{
POSITION: [3, 22.4, 1.3, 19.636363636363633, 0, 16.015, 0 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.machgun]),
TYPE: exports.trap
}, }, 
], };
exports.FTBToArras2 = {
PARENT: [exports.genericTank],
LABEL: "Infector",
//SIZE: 12,
SHAPE: 0,
MAX_CHILDREN: 8,
GUNS: [
{
POSITION: [18,8,1,0,0,0.221,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.infect
}, }, 
{
POSITION: [13.846,12.8,1,0,0,359.847,0],

}, 
], };
exports.hiveshooter = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.speed * 0.8,
    },
    LABEL: '',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 14, -1.2, 5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
            TYPE: exports.hive,
        },
    }, {
        POSITION: [15, 12, 1, 5, 0, 0, 0, ],
    }],
};
exports.hybrid = makeHybrid(exports.destroy, 'Hybrid');
exports.shotgun2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Shotgun',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.m2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Meister',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [10, 10, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload,

                g.morespeed
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload,

                g.fake
            ]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0, ],
    }],
};

exports.builder = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Trapper',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block,
        },
    }, ],
};
exports.swebuilder = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Swedish Trapper',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
     POSITION: [18, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.blockgr,
        },
    }, ],
};
exports.doot_doot = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Doot Doot',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
     POSITION: [18, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [8, 12, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basico, g.singleX]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.builder2 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Rock Climber',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 20, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.doublereload]),
            TYPE: exports.obstacle,
        },
    }, ],
};
exports.pent2 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'pentrap spawner',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 13, -1, -4, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pentatrap,
        },
    }, ],
};
exports.engineer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Engineer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 14, 1, 15.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 9,
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pillbox,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ]
    }],
};
exports.engineer2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Engineer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 14, 1, 15.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 9,
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pillbox2,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ]
    }],
};
exports.construct = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega Trapper',
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            TYPE: exports.block,
        },
    }, ],
};
exports.minelayer = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega Trapper',
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            TYPE: [exports.block, {INVISIBLE:[0.8, 0.3],}],
        },
    }, ],
};
exports.construct2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Anomaly Trapper',
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.huge]),
            TYPE: exports.block,
        },
    }, ],
};
exports.autobuilder = makeAuto(exports.builder);
exports.autoex = makeAuto(exports.baseProtector);
exports.conq = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 14, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block,
        },
    }, ],
};
exports.bentboomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Boomer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 10, 1, 8, -2, -35, 0, ],
    }, {
        POSITION: [8, 10, 1, 8, 2, 35, 0, ],
    }, {
        POSITION: [2, 10, 1.3, 16, -2, -35, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, {
        POSITION: [2, 10, 1.3, 16, 2, 35, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, ],
};
exports.ritoparn = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Ritoparn',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 10, 1, 8, -2, -35, 0, ],
    }, {
        POSITION: [8, 10, 1, 8, 2, 35, 0, ],
    }, {
        POSITION: [2, 10, 1.3, 16, -2, -35, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, {
        POSITION: [2, 10, 1.3, 16, 2, 35, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, {
              POSITION: [5, 10, 1, 14, 0, 0, 0, ],
    }, {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0, ],
    }, {
        //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
        //    }, {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
            TYPE: exports.boomerang,
        },    }, {
        POSITION: [7, 15.5, 1.1, 7, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: [exports.bentboomer, {
                CONTROLLERS: [
                    'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
                ],
                SPEED: 3,
                SIZE: 28,
                LEVEL: 60,
                CAN_BE_ON_LEADERBOARD: false,
            }],
        MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.boomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Boomer',
    STAT_NAMES: statnames.trap,
    FACING_TYPE: 'locksFacing',
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 10, 1, 14, 0, 0, 0, ],
    }, {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0, ],
    }, {
        //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
        //    }, {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
            TYPE: exports.boomerang,
        },
    }, ],
};

exports.quadtrapper = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 45, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 135, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 225, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 225, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 315, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 315, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
            TYPE: exports.block,
        },
    }, ],
};

exports.artillery = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Artillery',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.stalin = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'idk',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 0.7, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.missile,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.missile,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.morespeed, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.mortar = {
    PARENT: [exports.genericTank],
    LABEL: 'Mortar',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 3, 1, 0, -8, -7, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [13, 3, 1, 0, 8, 7, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, -6, -7, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.skimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Skimmer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.missile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.skimmerx = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Snaker',
  SHAPE: 6,
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.snake,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.manip = {
    PARENT: [exports.genericTank],
    CONTROLLERS: ['nearestDifferentMaster'],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Skimmer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.morespeed, g.doublereload, g.doublereload]),
            TYPE: [exports.missile, {
                TYPE: 'minion',
                CONTROLLERS: ['nearestDifferentMaster'],
            }],
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.sunskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Skimmer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 5, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 45, -0.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.sunmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.skimmer2 = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    SHAPE: -4,
    LABEL: 'TESTBED',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.2, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.testmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.spar = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    SHAPE: 0,
    LABEL: 'Sparker',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.2, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.norng]),
            TYPE: exports.testmissile2,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.spread = {
    PARENT: [exports.genericTank],
    LABEL: 'Spreadshot',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 10, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spreadmain, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Pounder',
        },
    }, ],
};
exports.spreadt = {
    PARENT: [exports.genericTank],
    TYPE: 'minion',
    LABEL: 'Spreadshot minion',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        RANGE: 720,
    },
    DIE_AT_RANGE: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 10, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spreadmain, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Pounder',
        },
    }, ],
};


exports.flank = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Guard',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hexa = {
    PARENT: [exports.genericTank],
    LABEL: 'Hexa Tank',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.octo = {
    PARENT: [exports.genericTank],
    LABEL: 'Octo Tank',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 45, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 135, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 225, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 315, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.octoc = {
    PARENT: [exports.genericTank],
    LABEL: 'Octo Tank',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 90, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 180, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 270, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 45, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 135, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 225, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 315, 0.7, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.heptatrap = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: [exports.genericTank],
        LABEL: 'Hepta-Trapper',
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 7, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, a, 4 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, a, 4 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, ],
    };
})();

exports.enneatrap = (() => {
    let a = 360 / 9,
        d = 1 / 9;
    return {
        PARENT: [exports.genericTank],
        LABEL: 'Ennea-Trapper',
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 7, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, a, 4 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, a, 4 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 6 * a, 7 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 6 * a, 7 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 7 * a, 8 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 7 * a, 8 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 8 * a, 9 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 8 * a, 9 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, ],
    };
})();

exports.hexatrap = makeAuto({
    PARENT: [exports.genericTank],
    LABEL: 'Hexa-Trapper',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}, 'Hexa-Trapper');
exports.shexatrap = makeAuto({
    PARENT: [exports.genericTank],
    LABEL: 'Hexa-Trapper',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, 30, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, 90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, 150, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, -30, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, -90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, -150, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, ],
}, 'Hexa-Swarm-Trapper');

exports.tri = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Angle',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.tri2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Ladder',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
   TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 190, 0],
        TYPE: exports.ladder,
    }, {
        POSITION: [13, 8, 0, 120, 190, 0],
        TYPE: exports.ladder,
    }, {
        POSITION: [13, 8, 0, -120, 190, 0],
        TYPE: exports.ladder,
    }, ],
  GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.thisisforenig = {
    PARENT: [exports.genericTank],
    LABEL: 'Surfer',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 6, 0.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.swarm,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 6, 0.6, 0, 0, 180.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.autoswarm,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.dabs_all_ovar = {
    PARENT: [exports.genericTank],
    LABEL: 'Booster',
    SIZE: 100,
  CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
        SPEED: base.SPEED * 9,
        ACCEL: base.ACCEL * 5,
   //   DENSITY: 1,
        FOV: 6,
      //  SPEED: 20,
    },
    DANGER: 7,
  GOD_MODE: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.booster = {
    PARENT: [exports.genericTank],
    LABEL: 'Booster',
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
        SPEED: base.SPEED * 9,
        ACCEL: base.ACCEL * 5
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.booster2 = {
    PARENT: [exports.genericTank],
    LABEL: 'TrapBooster',
  SHAPE: -4,

    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
        SPEED: base.SPEED * 9,
        ACCEL: base.ACCEL * 5
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.block,
            LABEL: 'Front',
        },
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.block,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.block,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.block,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.block,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.marine = {
    PARENT: [exports.genericTank],
    LABEL: 'Marine',
    INVISIBLE: [0.08, 0.03],
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 105, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, -105, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.fighter = {
    PARENT: [exports.genericTank],
    LABEL: 'Fighter',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, -1, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Side',
        },
    }, {
        POSITION: [16, 8, 1, 0, 1, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Side',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.brutalizer = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -1, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 1, -90, 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.bomber = {
    PARENT: [exports.genericTank],
    LABEL: 'Bomber',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 130, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: 'Wing',
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 230, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: 'Wing',
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
    SPEED: base.SPEED,
};
exports.falcon = {
    PARENT: [exports.genericTank],
    LABEL: 'Falcon',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload, g.nerfgun]),
            TYPE: exports.bullet,
            LABEL: 'Assassin',
            ALT_FIRE: true,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.nerfgun]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.nerfgun]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.nerfgun]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.falcon2 = {
    PARENT: [exports.genericTank],
    LABEL: 'gud Falcon',
    DANGER: 7,
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
        SPEED: base.SPEED * 9,
        ACCEL: base.ACCEL * 5
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload]),
            TYPE: exports.bullet,
            LABEL: 'Assassin',
            ALT_FIRE: true,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, -0, -150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};

exports.auto3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-3',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto3gun,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.auto3gun,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.auto3gun,
    }, ],
};
exports.autoswarmer = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto swarm',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.autoswarmgun,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.autoswarmgun,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.autoswarmgun,
    }, ],
};
exports.hitler = {
    PARENT: [exports.genericTank],
    LABEL: 'Geargrinder',
    DANGER: 6,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 60, 190, 0],
        TYPE: exports.hivet,
    }, {
        POSITION: [11, 8, 0, -60, 190, 0],
        TYPE: exports.hivet,
    }, {
        POSITION: [10, 0, 0, 120, 0, 0],
        TYPE: exports.cruiserGun,
    }, {
        POSITION: [10, 0, 0, -120, 0, 0],
        TYPE: exports.cruiserGun,
    }, ],
};

exports.auto5 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-5',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto5gun,
    }, ],
};
exports.auto25 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-5',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto5,
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto5,
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto5,
    }, {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto5,
    }, {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto5,
    }, ],
};
exports.sierpinski5 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-5',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto25,
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto25,
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto25,
    }, {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto25,
    }, {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto25,
    }, ],
};
exports.autocirno = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-Baka',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 40, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 80, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 120, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 160, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 200, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 140, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 280, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 216, 320, 0],
        TYPE: exports.auto5gun,
    }, ],
};
exports.auto8 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-8',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 8, 0, 0, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, 45, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, 90, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, 135, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, 180, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, -135, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, -90, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, -45, 190, 1],
        TYPE: exports.bigauto4gun,
    }, ],
};
exports.bigauto8 = {
    PARENT: [exports.genericTank],
  // PARENT: [exports.miniboss],
    LABEL: 'DEROGATER',
    DANGER: 7,
  SIZE: 60,
  SHAPE: 5,
   BODY: {
     HEALTH: 1000,
   },
  SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 8, 0, 0, 190, 0],
        TYPE: exports.domgun,
    }, {
        POSITION: [7, 8, 0, 45, 190, 1],
        TYPE: exports.domgun,
    }, {
        POSITION: [7, 8, 0, 90, 190, 0],
        TYPE: exports.domgun,
    }, {
        POSITION: [7, 8, 0, 135, 190, 1],
        TYPE: exports.domgun,
    }, {
        POSITION: [7, 8, 0, 180, 190, 0],
        TYPE: exports.domgun,
    }, {
        POSITION: [7, 8, 0, -135, 190, 1],
        TYPE: exports.domgun,
    }, {
        POSITION: [7, 8, 0, -90, 190, 0],
        TYPE: exports.domgun,
    }, {
        POSITION: [7, 8, 0, -45, 190, 1],
        TYPE: exports.domgun,
    }, ],
};
 exports.toolset = {
    PARENT: [exports.genericTank],
    LABEL: 'Soviet Toolbox',
    DANGER: 7,
    SHAPE: 5,
    FACING_TYPE: 'autospin',
    BODY: {
      SPEED: base.SPEED * 0.7,
      HEALTH: base.HEALTH * 0.5,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     8,      0,      0,     190, 0], 
            TYPE: exports.heptatrap,
    }, {
        POSITION: [  11,     8,      0,      72,    190, 0], 
            TYPE: exports.cruiser,
                }, {
        POSITION: [  11,     8,      0,     -72,    190, 0], 
            TYPE: exports.factory,
                }, {
        POSITION: [  11,     8,      0,     144,    190, 0], 
            TYPE: exports.assassin,
                }, {
        POSITION: [  11,     8,      0,    -144,    190, 0], 
            TYPE: exports.twin,
                },
    ],
};
exports.test5 = {
    PARENT: [exports.genericTank],
    LABEL: 'Swiss Toolset',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    SHAPE: 7,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 231.428571429, 220, 0],
        TYPE: exports.spread,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 2 * 51.4285714286, 220, 0],
        TYPE: exports.rifle,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 3 * 51.4285714286, 220, 0],
        TYPE: exports.ranger,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 4 * 51.4285714286, 220, 0],
        TYPE: exports.engineer,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 5 * 51.4285714286, 220, 0],
        TYPE: exports.skimmer,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 6 * 51.4285714286, 220, 0],
        TYPE: exports.lilfact,
    }, {
        POSITION: [10, 8, 0, -51.4285714286 + (-25.7142857143), 220, 0],
        TYPE: exports.cruiser,
    }, ],
};
exports.heavy3 = {
    BODY: {
        SPEED: base.SPEED * 0.95,
    },
    PARENT: [exports.genericTank],
    LABEL: 'Mega-3',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 8, 0, 0, 190, 0],
        TYPE: exports.heavy3gun,
    }, {
        POSITION: [14, 8, 0, 120, 190, 0],
        TYPE: exports.heavy3gun,
    }, {
        POSITION: [14, 8, 0, 240, 190, 0],
        TYPE: exports.heavy3gun,
    }, ],
};
exports.tritrap = {
    LABEL: '',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 0, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [12, 8, 0, 120, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [12, 8, 0, 240, 190, 0],
        TYPE: exports.tritrapgun,
    }, ],
};
exports.sniper3 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: '',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 170, 0],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [13, 8, 0, 120, 170, 0],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [13, 8, 0, 240, 170, 0],
        TYPE: exports.sniper3gun,
    }, ],
};
exports.auto4 = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    LABEL: 'Auto-4',
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: exports.auto4gun,
    }, ],
};
exports.auto4s = {
    PARENT: [exports.genericTank],
    DANGER: 5,
      INVISIBLE: [0.1, 0.5],
    LABEL: 'skirmish-4',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: exports.auto4invisgun,
    }, {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: exports.auto4invisgun,
    }, {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: exports.auto4invisgun,
    }, {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: exports.auto4invisgun,
    }, ],
};

exports.flanktrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Trap Guard',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.gen = {
    PARENT: [exports.genericTank],
    LABEL: 'Generator',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
  SHAPE: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap2]),
            TYPE: exports.gentrap,
            STAT_CALCULATOR: gunCalcNames.trap2,
        },
    }, ],
};
exports.gen2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Dynamo',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
  SHAPE: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20.5, 19.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic2, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap2]),
            TYPE: exports.gentrap2,
            STAT_CALCULATOR: gunCalcNames.trap2,
        },
    }, ],
};
exports.guntrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner Trapper',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil,

                g.lotsmorrecoil
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil,

                g.lotsmorrecoil
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [13, 11, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.pentagun = {
    PARENT: [exports.genericTank],
    LABEL: 'Pentabionic Single Turret',
    //CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 14,
    SHAPE: 5,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }],
};
exports.bushwhack = {
    PARENT: [exports.genericTank],
    LABEL: 'Snipe Guard',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.2,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8.5, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8.5, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.hi = {
    PARENT: [exports.genericTank],
    LABEL: 'Admiral',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.2,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 1.9, 1, 0, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil, g.morespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 1.9, 1, 0, -3, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil, g.morespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8.5, 1, 0, 0, -140, 0, ],
    }, {
        POSITION: [4, 8.5, 1.7, 13, 0, -140, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [13, 8.5, 1, 0, 0, 140, 0, ],
    }, {
        POSITION: [4, 8.5, 1.7, 13, 0, 140, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [20, 6, 0.9, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.halfreload]),
            TYPE: exports.swarm,
        },
    }],
};

// NPCS:
exports.crasher = {
    TYPE: 'crasher',
    LABEL: 'Crasher',
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 5,
        ACCEL: 0.01,
        HEALTH: 0.5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.sentry = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Sentry',
    DANGER: 3,
  AI: true,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 10,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCEL: 0.006,
        DAMAGE: base.DAMAGE * 2,
        SPEED: base.SPEED * 0.5,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentryx = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Sentry',
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 10,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCEL: 0.006,
        DAMAGE: base.DAMAGE * 2,
        SPEED: base.SPEED * 0.5,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentry2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Sentry',
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 20,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    BODY: {
        FOV: 2.5,
        ACCEL: 1,
        DAMAGE: base.DAMAGE * 2,
      HEALTH: 200,
        SPEED: base.SPEED * 2.5,
    },
    MOTION_TYPE: 'motor',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.trapTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 14, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.sentrySwarm = {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [{
        POSITION: [7, 14, 0.6, 7, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
let swarmList = [exports.swarm, exports.autoswarm];
exports.sentrySwarm2 = {
    PARENT: [exports.sentry2],
    DANGER: 3,

  LABEL: 'Guardian',
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.sentryGun = makeAuto(exports.sentry, 'Sentry', {
    type: exports.heavy3gun,
    size: 12,
});
exports.sentryTrap = makeAuto(exports.sentry, 'Sentry', {
    type: exports.trapTurret,
    size: 12,
});

exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
  AI: true,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    LEVEL: 45,
    DISPLAY_NAME: true,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: {
        NO_LEAD: true,
    },
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A Visitor has Left!.',
};
exports.crasherSpawner = {
    PARENT: [exports.genericTank],
    LABEL: 'Spawned',
    STAT_NAMES: statnames.drone,
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 5,
    INDEPENDENT: true,
    AI: {
        chase: true,
    },
    MAX_CHILDREN: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
            TYPE: [exports.drone, {
                LABEL: 'Crasher',
                VARIES_IN_SIZE: true,
                DRAW_HEALTH: true
            }],
            SYNCS_SKILLS: true,
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.elite = {
    PARENT: [exports.miniboss],
    LABEL: 'Elite Crasher',
    COLOR: 5,
    SHAPE: 3,
    SIZE: 20,
    VARIES_IN_SIZE: true,
    VALUE: 150000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 1.5,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
};
exports.rhobody = {
    PARENT: [exports.miniboss],
    LABEL: 'Rho',
    SHAPE: 5,
    SIZE: 25,
    COLOR: 14,
    VARIES_IN_SIZE: true,
    VALUE: 150000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 1.5,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
};
exports.elite2 = {
    PARENT: [exports.miniboss],
    LABEL: 'Chocolatebar',
    COLOR: 1,
    SHAPE: 4,
    SIZE: 20,
    VARIES_IN_SIZE: true,
    VALUE: 150000,
    BODY: {
        FOV: 1.4,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 1.5,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
        RELOAD: base.RELOAD * 5,
    },
};
exports.eternalshrinemaiden = {
    PARENT: [exports.miniboss],
    LABEL: 'Chocolatebar',
    SHAPE: 0,
    VARIES_IN_SIZE: false,
    VALUE: 150000,
    BODY: {
        FOV: 1.4,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 1.5,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
        RELOAD: base.RELOAD * 1.3,
    },
};
exports.elite_destroyer = {
    PARENT: [exports.elite],
    FACING_TYPE: 'autospin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 16, 1, 6, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1, 6, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1, 6, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 180, 360, 0, ],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, 60, 360, 0, ],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, -60, 360, 0, ],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true,
            COLOR: 5,
        }]
    }, ],
};
exports.elitetank = {
    PARENT: [exports.genericTank],
    COLOR: 8,
    SHAPE: 3,
    LABEL: 'atrium',
    FACING_TYPE: 'autospin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 16, 1.3, 6, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1.3, 6, 0, 60, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1.3, 6, 0, -60, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            LABEL: 'Devastator',
        },
    }, ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
              POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.construct, {
            COLOR: 16, 
        }]
    }, ],
};
exports.elite_gunner = {
    PARENT: [exports.elite],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 16, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 16, 1.5, 14, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: [exports.pillbox, {
                INDEPENDENT: true,
            }],
        },
    }, {
        POSITION: [6, 14, -2, 2, 0, 60, 0, ],
    }, {
        POSITION: [6, 14, -2, 2, 0, 300, 0, ],
    }],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 8, 0, 60, 180, 0, ],
        TYPE: [exports.auto4gun],
    }, {
        POSITION: [14, 8, 0, 300, 180, 0, ],
        TYPE: [exports.auto4gun],
    }],
};
exports.elite_yuyuko = {
    PARENT: [exports.elite],
    MAX_CHILDREN: 10,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 16, 1.5, -3, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.autosmash, {
                CONTROLLERS: [
                    'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
                ],
                SPEED: 3,
                LEVEL: 120,
                SIZE: 28,
            }],
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 60, 180, 1, ],
        TYPE: [exports.shotgun2],
    }, {
        POSITION: [6, 8, 10, 60, 180, 0, ],
        TYPE: [exports.shotgun2],
    }, {
        POSITION: [6, 8, -10, 300, 180, 0, ],
        TYPE: [exports.shotgun2],
    }, {
        POSITION: [12, 8, 0, 300, 180, 1, ],
        TYPE: [exports.shotgun2],
    }],
};
exports.elite_nurber = {
    PARENT: [exports.elite],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 10, 1, 0, 3, 230, 0, ],
    }, {
        POSITION: [4, 10, 1.5, 14, 3, 230, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: [exports.pillbox, {
                INDEPENDENT: false,
            }],
        },
    }, {
        POSITION: [14, 10, 1, 0, -3, -230, 0, ],
    }, {
        POSITION: [4, 10, 1.5, 14, -3, -230, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: [exports.pillbox, {
                INDEPENDENT: false,
            }],
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 60, 180, 1, ],
        TYPE: [exports.machine],
    }, {
        POSITION: [10, 8, 0, 300, 180, 1, ],
        TYPE: [exports.machine],
    }],
};
exports.elite_hewn = {
    PARENT: [exports.elite],
    MAX_CHILDREN: 3,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 10, 1.5, 0, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.hewnminion, {
                INDEPENDENT: false,
            }],
        },
    }, {
        POSITION: [14, 10, 1.5, 0, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.hewnminion, {
                INDEPENDENT: false,
            }],
        },
    }, {
        POSITION: [14, 10, 1.5, 0, 0, -180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.hewnminion, {
                INDEPENDENT: false,
            }],
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        POSITION: [10, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bentboomer],
    }, {
        POSITION: [3, 9, 0, 0, 360, 1, ],
        TYPE: [exports.builder],
    }, {
        POSITION: [3, 9, 0, 120, 360, 1, ],
        TYPE: [exports.builder],
    }, {
        POSITION: [3, 9, 0, -120, 360, 1, ],
        TYPE: [exports.builder],
    }],
};
exports.elite_hewn2 = {
    PARENT: [exports.elite],
    MAX_CHILDREN: 3,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 10, 1.5, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.hewnminion, {
                INDEPENDENT: false,
            }],
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        POSITION: [10, 0, 0, 0, 360, 1, ],
        TYPE: [exports.octo],
    }, ],
};
exports.elite_sprayer = {
    PARENT: [exports.elite],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 180, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, 60, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, -60, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, ],
};
exports.elite_tank = {
    PARENT: [exports.genericTank],
    AI: {
        NO_LEAD: false,
    },
  LABEL: "Elite Tank",
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 180, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, 60, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, -60, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, ],
};
exports.elite_tank2 = {
    PARENT: [exports.genericTank],
    AI: {
        NO_LEAD: false,
    },
  LABEL: 'TESTBED',
  GOD_MODE: true,
  SHAPE: -4,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 180, 190, 0],
        TYPE: [exports.spray2, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, 60, 190, 0],
        TYPE: [exports.spray2, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, -60, 190, 0],
        TYPE: [exports.spray2, {
            COLOR: 5,
        }],
    }, ],
};
exports.elite_sprayer2 = {
    PARENT: [exports.elite2],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 180, 190, 0],
        TYPE: [exports.skimmer, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 6, 0, 90, 190, 0],
        TYPE: [exports.skimmer, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 6, 0, -90, 190, 0],
        TYPE: [exports.skimturret, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 6, 0, 0, 190, 0],
        TYPE: [exports.skimturret, {
            COLOR: 1,
        }],
    }, ],
};
exports.rho = {
    PARENT: [exports.rhobody],
    COLOR: 14,
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 36, 190, 0],
        TYPE: [exports.pentagun, {
            COLOR: 14,
        }],
    }, {
        POSITION: [14, 6, 0, -36, 190, 0],
        TYPE: [exports.pentagun, {
            COLOR: 14,
        }],
    }, {
        POSITION: [14, 2, 0, 108, 0, 0],
        TYPE: [exports.crasherSpawner, {
            COLOR: 14,
        }],
    }, {
        POSITION: [14, 2, 0, -108, 0, 0],
        TYPE: [exports.crasherSpawner, {
            COLOR: 14,
        }],
    }, {
        POSITION: [14, 2, 0, -180, 0, 0],
        TYPE: [exports.crasherSpawner, {
            COLOR: 14,
        }],
    }, ],
};
exports.theta = {
    PARENT: [exports.rhobody],
    COLOR: 14,
    LABEL: 'Theta',
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 36, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 0, 0, -36, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 0, 0, 108, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 0, 0, -108, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 0, 0, -180, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, ],
};

exports.palisade = (() => {
    let props = {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
    };
    return {
        PARENT: [exports.miniboss],
        LABEL: 'Rogue Palisade',
        COLOR: 17,
        SHAPE: 6,
        SIZE: 28,
        VALUE: 500000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 2,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4, 6, -1.6, 8, 0, 0, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 60, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 120, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                MAX_CHILDREN: 1,
                SYNCS_SKILLS: true,
                WAIT_TO_CYCLE: true
            }
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 240, 0],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 300, 0],
            PROPERTIES: props,
        }],
        TURRETS: [{
            POSITION: [5, 10, 0, 30, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 90, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 150, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 210, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 270, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 330, 110, 0],
            TYPE: exports.trapTurret
        }],
    };
})();
exports.gunnerAutoGun = {
    LABEL: 'Gunner',
    BODY: {
        FOV: 1.5
    },
    COLOR: 16,
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{
        POSITION: [14, 3.5, 1, 0, 7.25, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed, g.halfreload, g.lessreload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 3.5, 1, 0, -7.25, 0, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed, g.halfreload, g.lessreload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 3.5, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed, g.halfreload, g.lessreload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 3.5, 1, 0, -3.75, 0, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed, g.halfreload, g.lessreload]),
            TYPE: exports.bullet
        }
    }],
    HAS_NO_RECOIL: true
};
exports.spikeMinion = {
    PARENT: [exports.genericTank],
    LABEL: 'Spike Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hard',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3.5,
        ACCELERATION: 0.5,
        HEALTH: 8,
        SHIELD: 1,
        DAMAGE: 1.25,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.5,
        RANGE: 200
    },
    AI: {
        BLIND: true
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'mapTargetToGoal', 'hangOutNearMaster'],
    TURRETS: [{
        POSITION: [20.5, 0, 0, 0, 360, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0],
        TYPE: exports.spikeBody
    }]
};
exports.PK4_Minion_2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega Minion',
    SHAPE: 5,
    COLOR: 14,
    SIZE: 32,
    BODY: {
        FOV: 0.6,
        SPEED: 1.15,
        ACCELERATION: 0.2,
        HEALTH: 15,
        SHIELD: 1,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.5,
        RANGE: 150
    },
    FACING_TYPE: 'autospin',
    GUNS: [{
        POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    }, {
        POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    }, {
        POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    }, {
        POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    }, {
        POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }],
    TURRETS: [{
        POSITION: [9.5, 0, 0, 0, 360, 1],
        TYPE: exports.gunnerAutoGun
    }]
};

exports.heptisade = (() => {
    let props = {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
    };
    return {
        PARENT: [exports.miniboss],
        LABEL: 'Hepti',
        COLOR: 10,
        SHAPE: 7,
        SIZE: 28,
        VALUE: 500000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 2,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 2 * 51.4285714286, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 3 * 51.4285714286, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 4 * 51.4285714286, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                MAX_CHILDREN: 1,
                SYNCS_SKILLS: true,
                WAIT_TO_CYCLE: true
            }
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 5 * 51.4285714286, 0],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 6 * 51.4285714286, 0],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, -51.4285714286 + (-25.7142857143), 0],
            PROPERTIES: props,
        }],
        TURRETS: [{
            POSITION: [5, 10, 0, 360 / 7, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 2, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 3, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 4, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 5, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 6, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 7, 110, 0],
            TYPE: exports.trapTurret
        }],
    };
})();
exports.bot = {
    AUTO_UPGRADE: 'random',
    FACING_TYPE: 'looseToTarget',
    BODY: {
        SIZE: 10
    },
    NAME: "Fellow-Comrade_",
    CONTROLLERS: ['nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'],
    AI: {
        STRAFE: true
    }
};
exports.hi2 = makeAuto(exports.part, 'Automater', {
    type: exports.trapTurret,
    size: 10,
    independent: false,
});
exports.wat = makeHybrid(exports.pound, 'Harvester');
exports.hexoo = {
    PARENT: [exports.genericTank],
    COLOR: 1,
    SHAPE: 6,
    LABEL: 'hexo-head',
    FACING_TYPE: 'autospin',
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        POSITION: [14, -15, 0, 0, 120, 0],
        TYPE: [exports.hi2, {
            COLOR: 1,
            AUTOFIRE: true,
        }],
    }, {
        POSITION: [14, -15, 0, -120, 120, 0],
        TYPE: [exports.hi2, {
            COLOR: 1,
            AUTOFIRE: true,
        }],
    }, {
        POSITION: [14, -15, 0, 120, 120, 0],
        TYPE: [exports.hi2, {
            COLOR: 1,
            AUTOFIRE: true,
        }],
    }, ],
};
exports.billgun = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.billgates,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.billgates = makeAuto(exports.trap2, 'Automater', {
    type: exports.basic,
    size: 10,
    independent: false,
});
exports.missile123 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Logical assimilation',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.billgates, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.billgates, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.sbasic = {
    PARENT: [exports.genericTank],
    LABEL: 'Supertank™',
    SIZE: 120,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
        HEALTH: 9000,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.norng]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.skimmer3 = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    SHAPE: 0,
    LABEL: 'TESTBED',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.2, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.morespeed]),
            TYPE: exports.missile123,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
            exports.stalker = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Stalker',
                BODY: {
                    ACCELERATION: base.ACCELERATION * 0.55,
                    SPEED: base.SPEED * 0.85,
                    FOV: base.FOV * 1.35,
                },
                INVISIBLE: [0.08, 0.03],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  27,    8.5,     -2,      0,      0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
exports.banshee2 = {
    PARENT: [exports.genericTank],
    LABEL: '63500 wat',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 90, 360, 0],
        TYPE: [exports.gunner, {
            INDEPENDENT: false,
        }],
    }, {
        POSITION: [10, 8, 0, -90, 360, 0],
        TYPE: [exports.gunner, {
            INDEPENDENT: false,
        }],
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload]),
            TYPE: exports.billgates,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ]
};
exports.bugcarrier = {
    PARENT: [exports.genericTank],
    LABEL: 'Airship',
    DANGER: 7,
    SHAPE: 0,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    MAX_CHILDREN: 10,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 2.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 11, -0.9, 9, 0, 0, 0, ],
    }, {
        POSITION: [7, 15.5, 0.8, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: [exports.booster, {
                CONTROLLERS: [
                    'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel'
                ],
                SPEED: 3,
                SIZE: 28,
                LEVEL: 60,
                CAN_BE_ON_LEADERBOARD: false,
                INVISIBLE: [0.8, 0.5],
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },


    }],
};
exports.autokys = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-waitwhat',
    DANGER: 7,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 90, 360, 0],
        TYPE: exports.quadtrapper,
    }, {
        POSITION: [11, 8, 0, -90, 360, 0],
        TYPE: exports.quadtrapper,
    }, ],
};
exports.baseProtector2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Base',
    SIZE: 74,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: { // def
        SPEED: 0,
        HEALTH: 10000,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1000,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody2,
    }, {
        POSITION: [12, 7, 0, 72, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 144, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, -72, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, -144, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 0, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, ],
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 72, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 144, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, -72, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, -144, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 0, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 72, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 144, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, -72, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, -144, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 0, 0, ],
    }, ],
}
exports.megaminitrap = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 18, 1.3, 22, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 18, 1.3, 18, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 18, 1.3, 14, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.test3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Spinning dial',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 7, 0, -90, 360, 0, ],
        TYPE: [exports.accelerator, {
            COLOR: 16,     CONTROLLERS: ['reversespin'],
        }]
    }, {
              POSITION: [13, 0, 0, 0, 360, 1, ],
        TYPE: [exports.genericTank, {
            COLOR: 16,
        }]
    }, {
              POSITION: [11, 7, 0, 90, 360, 0, ],
        TYPE: [exports.accelerator, {
            COLOR: 16,     CONTROLLERS: ['reversespin'],
        }]
    }, ],
};
exports.luna = {
    PARENT: [exports.genericTank],
    LABEL: '?',
    DANGER: 7,
    COLOR: 16,
      SIZE: 40,
    FACING_TYPE: 'autospin',
    SHAPE: 7,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 231.428571429, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 2 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 3 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 4 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 5 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 6 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, -51.4285714286 + (-25.7142857143), 220, 0],
        TYPE: exports.builder3,
    }, ],
};
exports.luna2 = {
    PARENT: [exports.genericTank],
    LABEL: '???',
    DANGER: 7,
    COLOR: 16,
      SIZE: 40,
    FACING_TYPE: 'autospin',
    SHAPE: 7,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 10, 0, 231.428571429, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 2 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 3 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 4 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 5 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 6 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, -51.4285714286 + (-25.7142857143), 220, 0],
        TYPE: exports.luna,
    }, ],
};

exports.juhac = {
    PARENT: [exports.genericTank],
    LABEL: 'Serbian Tram',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 190, 0],
        TYPE: exports.ladder,
    }, {
        POSITION: [13, 8, 0, 120, 190, 0],
        TYPE: exports.ladder,
    }, {
        POSITION: [13, 8, 0, -120, 190, 0],
        TYPE: exports.ladder,
    }, ],
};
exports.ladder2 = {
    PARENT: [exports.genericTank],
    LABEL: 'beromsick',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [2, 11, 1, 10, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 20, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [25, 2, 1, 0, 7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.nothing,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.nothing,
        },
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.chair = {
    PARENT: [exports.genericTank],
    LABEL: 'beromsick',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [2, 11, 1, 10, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 20, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [25, 2, 1, 0, 7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.nothing,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.nothing,
        },
    }, ],
};
exports.railgun = {
    PARENT: [exports.genericTank],
    LABEL: 'RailGun',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [2, 8, 1, 12, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 8, 1, 17, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [25, 2, 1, 0, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.hibullet,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.hibullet,
        },
    }, ],
};
exports.testoof = {
    PARENT: [exports.genericTank],
    LABEL: 'Luna dial',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 360, 0, ],
        TYPE: [exports.flank, {
            COLOR: 16,     CONTROLLERS: ['testspin'],
        }]
    }, {
              POSITION: [10, 8, 0, 90, 360, 0, ],
        TYPE: [exports.flank, {
            COLOR: 16,     CONTROLLERS: ['testspin'],
        }]
    }, {
              POSITION: [10, 8, 0, 180, 360, 0, ],
        TYPE: [exports.flank, {
            COLOR: 16,     CONTROLLERS: ['testspin'],
        }]
    }, {
              POSITION: [10, 8, 0, -90, 360, 0, ],
        TYPE: [exports.flank, {
            COLOR: 16,     CONTROLLERS: ['testspin'],
        }]
    }, {
              POSITION: [13, 0, 0, 0, 360, 1, ],
        TYPE: [exports.hexa, {
            COLOR: 16, CONTROLLERS: ['reversespin'],
        }]
    }, ],
};

// UPGRADE PATHS
exports.devtank.UPGRADES_TIER_1 = [exports.tritrap, exports.conq, exports.sniper3];
exports.basicbed.UPGRADES_TIER_1 = [exports.baseProtectorx2,exports.elite_sprayer, exports.cancer, exports.palisade, exports.sentrySwarm, exports.sentryTrap, exports.basicbed2, exports.sentryGun];


exports.testbed6.UPGRADES_TIER_1 = [exports.auto8, exports.enneatrap, exports.falcon2, exports.doot_doot];
exports.testbed5.UPGRADES_TIER_1 = [exports.sine, exports.bansheehammer, exports.spaceship, exports.construct2, exports.baseProtector, exports.autoex, exports.builder3];
exports.testbed7.UPGRADES_TIER_1 = [exports.spaceshiplite];
exports.basicbed2.UPGRADES_TIER_1 = [ exports.elite_destroyer,exports.ninja, exports.spaceshiplite, exports.spaceship, exports.baseProtectorx, exports.bigbasicbed, exports.basicbed3, exports.bigauto8, exports.testoof];
exports.testbed4.UPGRADES_TIER_1 = [exports.tritrap, exports.conq, exports.stalin, exports.pentagun, exports.hitler, exports.hi, exports.engineer2];
exports.testbed3.UPGRADES_TIER_1 = [exports.shexatrap, exports.skimmer2, exports.benttrap, exports.test3, exports.bonk,
    exports.thisisforenig, exports.deviser, exports.testbed4
];
exports.testbed2.UPGRADES_TIER_1 = [exports.gunnerskim2, exports.gunnerskim, exports.spar, exports.test5, exports.m2, exports.octoc,
    exports.skimmerspinner, exports.testbed3
];
exports.testbed.UPGRADES_TIER_1 = [exports.marine, exports.juhac, exports.theta, exports.elite_gunner,
    exports.wat, exports.autokys, exports.megaminitrap, exports.testbed2
];
exports.testbedParento.UPGRADES_TIER_1 = [exports.mship, exports.basic_cl3, exports.basic_cl2, exports.basic_cl, exports.extrazfut, exports.extrazfut2, exports.xbaseProtector, exports.elite_tank2, exports.smash2,exports.overlord2, exports.anti_cancer
];
exports.devtank2.UPGRADES_TIER_1 = [exports.testbed, exports.testbed2, exports.testbed3,
     exports.testbed4, exports.testbed5, exports.testbed6, exports.devtank, exports.testbedParento
];
exports.basicbed3.UPGRADES_TIER_1 = [ exports.spect, exports.spooner,exports.samurai, exports.booster2, exports.aussie, exports.skimboss, exports.elite_gunner, exports.knight];
exports.skimmer.UPGRADES_TIER_1 = [exports.skimmerx, exports.sunskimmer];
exports.basicPg2.UPGRADES_TIER_1 = [exports.single, exports.meatball_launcher, exports.machine2, exports.PK4_Minion_2];
exports.machine2.UPGRADES_TIER_1 = [exports.Ntrap];
exports.basic.UPGRADES_TIER_1 = [exports.twin, exports.sniper, exports.machine, exports.flank, exports.director, exports.basicbed];
exports.basic.UPGRADES_TIER_3 = [exports.single];
exports.ladder.UPGRADES_TIER_3 = [exports.ladderx];
exports.meatball_launcher.UPGRADES_TIER_3 = [exports.swebuilder, exports.sweswarmer, exports.stream2];
exports.single.UPGRADES_TIER_3 = [exports.basicf, exports.singlehybrid ,exports.linger, exports.force_field, exports.doublesheild];
exports.basic.UPGRADES_TIER_2 = [exports.smash, exports.basicPg2];
exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash, exports.bonkr, exports.cancerx, exports.elite_smash];
exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.gunner, exports.hexa];
exports.twin.UPGRADES_TIER_3 = [exports.triple, exports.ladder];
exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.split, exports.autodouble, exports.bentdouble];
exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.spread, exports.benthybrid, exports.bentdouble, exports.triple];
exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.nailgun, exports.auto4, exports.machinegunner];
exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.hunter, exports.mini, exports.builder, exports.basicW];
exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack, exports.gen];
exports.gen.UPGRADES_TIER_3 = [exports.gen2];
exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon];
exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach, exports.sidewind, exports.dual];
exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder, exports.engineer, exports.boomer, exports.quadtrapper, exports.FTBToArrasT];
exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.artillery, exports.mini, exports.gunner, exports.noonga];
exports.machine.UPGRADES_TIER_3 = [exports.spray, exports.machine2, exports.basicL];
exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid, exports.construct, exports.shotgun2, exports.hiveshooter, exports.FTBToArras];
exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer, exports.FTBToArrasX];
exports.mini.UPGRADES_TIER_3 = [exports.stream, exports.nailgun, exports.hybridmini];
exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
exports.flank.UPGRADES_TIER_3 = [exports.conq, exports.elite_tank];
exports.tri.UPGRADES_TIER_3 = [exports.fighter, exports.booster, exports.falcon, exports.bomber, exports.autotri, exports.brutalizer, exports.tri2];
exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap];
exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4, exports.tritrap, exports.sniper3, exports.autoswarmer];
exports.flanktrap.UPGRADES_TIER_3 = [exports.bushwhack, exports.guntrap, exports.fortress, exports.bomber, exports.gen, exports.gen2];
exports.director.UPGRADES_TIER_2 = [exports.gn, exports.overseer, exports.cruiser, exports.lulwat];
exports.gn.UPGRADES_TIER_1 = [exports.x];
exports.director.UPGRADES_TIER_3 = [exports.factory, exports.basicf];
exports.factory.UPGRADES_TIER_1 = [exports.factory2, exports.factory3];
exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.overtrap, exports.overgunner, exports.underseer, exports.autoover,exports.seeker, exports.blader, exports.FTBToArrasY];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer, exports.omnimancer, exports.FTBToArras2];
exports.cruiser.UPGRADES_TIER_3 = [exports.carrier, exports.battleship, exports.fortress, exports.autocruiser];
exports.knight.UPGRADES_TIER_1 = [exports.fine];