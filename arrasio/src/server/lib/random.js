/*jslint node: true */
"use strict";

require('seedrandom');
// Seed math
Math.seedrandom('' + Date.now());

exports.random = x => {
    return x * Math.random();
};

exports.randomAngle = () => {
    return Math.PI * 2 * Math.random();
};

exports.randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

exports.irandom = i => {
    let max = Math.floor(i);
    return Math.floor(Math.random() * (max + 1)); //Inclusive
};

exports.irandomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};

exports.gauss = (mean, deviation) => {
    let x1, x2, w;
    do {
        x1 = 2*Math.random() - 1;
        x2 = 2*Math.random() - 1;
        w = x1 * x1 + x2 * x2;
    } while (0 == w || w >= 1);

    w = Math.sqrt(-2 * Math.log(w) / w);
    return mean + deviation * x1 * w;
};

exports.gaussInverse = (min, max, clustering) => {
    let range = max - min;
    let output = exports.gauss(0, range / clustering);

    while (output < 0) {
        output += range;
    }
    
    while (output > range) {
        output -= range;
    }
    
    return output + min;
};

exports.gaussRing = (radius, clustering) => {
    let r = exports.random(Math.PI * 2);
    let d = exports.gauss(radius, radius*clustering);
    return {
        x: d * Math.cos(r),
        y: d * Math.sin(r),
    };
};

exports.chance = prob => {
    return exports.random(1) < prob;
};

exports.dice = sides => {
    return exports.random(sides) < 1;
};

exports.choose = arr => {
    return arr[exports.irandom(arr.length - 1)];
};

exports.chooseN = (arr, n) => {
    let o = [];
    for (let i=0; i<n; i++) {
        o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
    }
    return o;
};

exports.chooseChance = (...arg) => {
    let totalProb = 0;
    arg.forEach(function(value) { totalProb += value; });
    let answer = exports.random(totalProb);
    for (let i=0; i<arg.length; i++) {
        if (answer<arg[i]) return i;
        answer -= arg[i];
    }
};


exports.chooseBotName = () => {
    return exports.choose([
  "https://www.youtube.com/watch?v=5gD_TPB6ZmM",
      "Don't watch DanTDM he is cancer",
      'Spongebob',
      'McDonald trump',
      'Itsa me! Mayro!',
      'GOD',
      '͠͏̳̼̟̠ ̨̢̛̩̭̜̗̞͕̖͕̕ ̭̭̞͔̪̻̗̰̮̤̘͎͔̻̕͝ ̧̤̗̯͕̬̯̩̮͚̯͕̮̯͍̩̹͘͜͡ ̴̡̨̳̟͚͎͚̺̯̫̘͓͔̰͟ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ̸̵̡̮̰̬͙̫͇̺͡͞ ͖͎̣̰͙̫ ̸̛̖̖̭̠̘͎̟͚̳̰̫̬͚ ̕͜҉̜̹̠̟̦̣̬͇̣̝̯̠̪̤ ̷̤̞͔͇̘̬͇̭̯͕̺̻̠̯̻̭ ̷̤̞͔͇̘̬͇̭̯͕̺̻̠̯̻̭ ̡̛͉͉̞̫̣͔͡ ̡̛͉͉̞̫̣͔͡ ̡̛͉͉̞̫̣͔͡ ̡̛͉͉̞̫̣͔͡ ̡̛͉͉̞̫̣͔͡ ̡̛͉͉̞̫̣͔͡ ̡̛͉͉̞̫̣͔͡ ̡̛͉͉̞̫̣͔͡',
      'Johnny Johnny',
      'Damon Albarn',
      'Thanos',
      'Thainis',
        'Bob Marley',
        'Get out of my car',
        'Danny Devito',
        'Xx_360N0SCOPR_xX',
      
        'Freddy Fazbear',
        'Mustard Man',
        'Sans4Smash',
        'Janet Jackson',
        '[insert text here]',
        'Hoovy',
      'Sphee',
      'MeeM',
      'Sans Is Ness',
        'Oktoberfest',
        'Olivia Benson',
        'füt',
      'Peter Griffin',
        'Queen of India',
        'Roger Rhabbit',
        'Z̸̨̨͒͆͐̎ͩͭ͒͒͂͂̚͢͝A̴̡̢͗͑ͣ̈́ͣ͊ͥ͒̚L̢ͥ̊̄͆̓͘͟͢͞G̡̎̓̓̏ͭ̃ͣ̿̐̉҉̛Ǒ̶ͥ͒͐ͦ̕',
        'Joseph Stalin',
      'T̷̛͔͎͕̣̫̙̠̦̳͖̙͕̪̲̀o̴̢͚̲͙͕͓̯͓̻̟̮̱͘͜m̧̨̧̼͔̰͎̱̯̦̫͚̥̟͎͙̬̖̀m̶̸̡̢͍̹̱̥̞̝͞ý̶̯̠̪̖̰̤̠̘̗̯̯̭̟̪͎͕̹͇͜',
        'ur mum gae',
      "P I C K L E  R I C K",
      'Mr.Krabs',
        'Vincent the Atheist',
        'Suck you!',
      'oof',
        'owo',
        '[Bottom Text]',
        'Eugene',
        'Suck me!',
        'Sweden',
        'lil pump',
        'Kanye West',
        'Alexa what is the meaning of life',
        'Foxtrot Furry',
        'Vladimir',
        'King of India',
        'Scottish Man',
      'Shrek',
      'Spy',
      'Heavy',
      'This game is better than Dragonball xenoverse',
        'Killo Ren',
        'Ligma',
        'Michael Jackson',
        'Ebae is Egae',
        'Oscar the Croutch',
      'RIP Stefan Karl',
        'Yes Papu',
        'Flying Frenchman',
        'people die if you kill me',
        'Sierra',
        'Tango',
        'Uniporn',
      'this cord',
      ' ̢̲̤̻͖̺͉̲̘̭͍̩̣̟̠ͪ͊ͦ̈́́̋̇̏ͭ͊̉ͥ͆́̚͘͞ ̦̙͎̦̱̟̝̮͕̌ͯ͑́ͦͯͮ̀̚͢͝ ̵̶̩̮̱͍͉̗̭̮̹̹̍ͮ̏͊͗̍̈́̆ͯͦ̂̇̂̓̉͛̑̀͟ͅ ̨̡̼̹͔̲̯̫͓̣̣̼̟͖̞̬̻ͤͯͩ̎̇̚ ̵̛̣̪̟̞̻̹̩̠̮͖̫̗̊̽̓ͣ̿̅̓͂ͣ̈́̕ͅͅ ̷̷̵̭͍͚̩̿͛ͪ̈ͣ̊̓ͪ̂ͦͬ̓ͤ͛̒̕ ̪͇̙͎̖̮̲͕̪͍̻̼̳́̊̌̿̒͒̎ͧ̒̋ͪ̇ͯ̎͗͞ ̴͒ͧͨ̈͏̻͓̰̖̲͔̙̬͎̠̤́ͅ ̸̛̪̣͙̼̱͚̲͓̯͎̖̦͎̉̓ͮ̅̂̔͑̃̈́ͧ͐͑́̓́͢͟ͅ ̳͔̣̦̤͊̏̾̑ͪ̓̌ͧͧͭ̅ͭ̌ͩ̚̚͢ ̸̸͎̯̰̻ͬ̏̆ͪͮ ̢̞̜̬͉̤͓̹̯̪͒̅͑̿ͥ̆ͣͨͯ̈̂ ̳̠͓͓̊͒̂ͯͧ̒̍̐ͨͩͥ̇ͤ͛́͞͠ ̵̧̡̰̫͍̯͕̠͇͛͐̓̓̽͆͆̏̉͗̚ ̡̡͇̯̣͙̠͍̗̻͖͎̜̎̋̾ͭͪ̓̿̑̌͞ ̴̧͚̹͈̤̰̪͔͈̤͉̲̠̭̜̭̮̗̙̳ͬ̀ͦͭ̉̉̐̉̊̐̒ͩͦͤ̿́͘͢ ͚̱̩̼͍̞̥̤̖̣̤͍͙̣̦̬̮̓̄͒̽̈̽ͬ̊̆̂̊̈̚̚̕͠ ̸̨́̅̏̐͢͏̱̗̦̜̟̦̞͎̹͚̞ͅ ̔̆̋̋ͨͨ̉̍͂̆ͥ̚͟͝͝͏̺̲̗̰̯̮̜͖̯͍̥͇͈̯̲̥̦ͅ ̵̛̫̹̠͉͍̱͍̳̻̙̻͎͚̝̯̓̿͆̅͗̓͗ͪ̆͆ͦ ̴̷̬͕̼̫͎͕͌̐ͬͫ͋ ̴̨̰͉̟̫͍̥̗̟̬̄̄͂̐̅ͭ̑͒̍͑͋̋̎̈̌ͬ̃̌ͦ̀͟͡ ͣ̈́̓ͦͨ͆͐͏҉̡̹̠̱̜͚̺̪̯͇̲̻̜ ̵̡͎̹͎̘̣̣͚̣̝̼̟̳̼̫̖̲͔͈͎̒̋̒̽͊̀ͤ̿̒̎͂̂ͯͩ̅̏̉͠ ̴̗̲̣͕͍̣͓̲̦̫͖̣̫̣̠̱̪͂͑ͬ̌͡͞ ̗̼̮͙̫̻̼̰͚̖̫̘͕̪͉͉̲̗͒ͦ͒́̐͋̾ͬͦ̿ͬ̑ͦ̋́͝͝ ̡̠̩͎̙͇̰̘̞̖̳̭̗̝̞̖͎̱̖͛ͥͮ̄̊ͬ͒̌̐ͮ̅͟͢ ̷̳͉̲̭̹̠̱͈̩͈͓̂ͣ͋̏̀̆̂͊ͯ̌ͮ͆̈́̒̂͆̚̚͢ ͍͉̻̜̏ͤ͆ͥ́͜͠ ̷̇ͣ̂̍̎ͨ̿͆͠͏̟̲̰̞̣͖͓̲̘̳͎̭̯ ͯ͐ͦͥ̏́̌̉̔̓́̋͋̽ͬ͞͏̮̼͓̗̩̙̼͕̖̣̟͈͡ ̡̢̛̼̰̪͇ͪ̾͊̓͘͢ ̨̡̠͉͇̲̺̻͈͓͍͍̻̤̓̓̐ͧ̚͢͠ ̢͎͈̪͙̼̰͇̭̜͇ͪͤ̑͆͒ͣ̅̐ͨ́́̕ ͫͤ̀̅͂ͦ͏̶̭̪̯̜̦̙̟ ̸̛̋ͮ͛͋̽̄ͨͩ̕͝҉̙̖͎̗͍̹ ̷̛̰̱̬̞̥͓͓͓͙̖̭̠͓̄̑ͬͥ̈̓ͤ̑̿͝ͅ ̷̛̘͙͎̼̲̥̟̟͔ͧ̈̌̾ͧ̾̃͆ͥͮͥ͌͐͗̽ͫͦ̀̚͜ͅ ̃ͯͫͧ̏̈́̌ͯͮ͗̚҉̛̥̺̹̺͡ ̶̨̲͔̦͉̖̮͈͚̮͈͈͎̘͈̀̇ͮͬ͆͋͌ͦ̉ͬ̅̈ͩ ̨̡͛͑̉̄͐̊̀͏̷͙̯͍̬ ̷͂ͩ͌́̎͆ͥ̿ͪ͜͡͡҉͙̙͓̗̙̟ͅ ̶̧͇͖̬͔ͩͭ͐ͧͣ̓ͨ̑͢͡ ̲͕̞̣̲̻̱̝̪͉̥͚̫̼̞̳̺̉̀͗͑̎ͭ͑̽̈ͤ̅͊́̓̀ ̠̜̖̳̺̅̏̄ͤ̇ͯ̈́̔͑̋́̋ͦͣ͞͡ ̨̫̫̱̭̝͈̗͚͈͎̜͔́ͥ̌̅͒̌̇͗̑͝͞ ͑͒ͥ̐ͦ͐̉ͧ̓͋̄̀̓҉̶҉͕̣̺̞̟̭̰͓̱͔̤́ͅ ̷̴̴̢̟͔̝̙̞̣̜̭̳̰͈͍͙̄̀̇̄̔ͬ͛ͩ̒͒͠ ̴̨̨̹̙̳̬͔̖͔̳͈͇͎̙̯̜͛̑̀͌ͧ̊̒ͮͬͨ̏ͫ̄ͯ̾͐̎̕͢ ̐͗ͭ̌̒͛̏͌ͭ͆͋ͫ́͆͊̈́̚͏̝̗̦̗̭͙̱̹̬͔͔̞ ̴̟̖͕̣̪̦̯͍̯̫̖̲̳͎̟͊ͩͤ̀ ͥ͐ͪ̎̈ͩ͊̉̈̿̀̐̋͊̏̉̚͞͏҉̘̣̳̦̜͈͈̯͚͇̼̙͙͚͔̫̕ ̷̖̱̣̼͕̤̼̜̥͈̇̉͋ͭ̈́̓̅͋̇ͩ́ ̓̾̀͠͏̡̥̦̩̱̲̠̮̫͍̤̝̟̙̮̟̪͇̻͜ ̷͔̺̳̗̱͖̯͇̤͈͓͈͖̬̦͈̓̽̉͆̋͆̐̓͗ͬ̂̒̍͊̉͟͟ͅ ͯ̈́̎̂́ͩͬͣͧ̂͏̷͕͖͈̳̣͇̲̺̙̯̫̺͖̀ ̵̷̛̙̝͉̤͆̽͋͛̑͋ͪ ̛̜̰͙̜̪̙̝͚̪̥̪̣̳̬͉̮̼̙̓̊̄̂ͫ͗ͤ̈͐͂ͮͮ̒ͭͮ̚͜',
      'Mario',
      'Weegee',
        'Ḙ͙͈̣͉͉͌͆ͫ̎ͮ̓͊ͭͭͭͦ̓͑̓̈̈́̃ͨ͜͟͞',
        'Drink Whiskey',
    "WeebyDeeby",
      "🕷Emo801🕷",
      "FBI",
      "SpoopySkelly",
      "🇩🇰👽Danish MC Herobrine👽🇩🇰",
      "👹Here’s Willie!👹",
      "😱ScreamingCyn😱",
    "Nerd",
      "bakuhoe",
      "Fluffy porn guy",
      "S🤢U🤢C🤮C",
      "☠DarkMemer☠",
      "9/11 was a prank by Jake paul",
"👻🇸🇪HauntMagnet🇸🇪👻",
        'B-Ray',
      "🐻☠FreddyFazbear☠🐻",
        'Yankee Doodle',
        'Hulu is Netflix',
    ]);
};
exports.chooseTank = () => {
    return exports.choose([
exports.basic,
      exports.builder,
      exports.factory,
      exports.quadtrapper,
    ]);
};
exports.chooseBossName = (code, n) => {
    switch (code) {
    case 'a':
    return exports.chooseN([
        'Archimedes',
        'Akilina',
        'Anastasios',
        'Athena',
        'Alkaios',
        'Amyntas',
        'Aniketos',
        'Artemis',
        'Anaxagoras',
        'Apollon',
    ], n);
    case 'castle':
    return exports.chooseN([
        'Berezhany',
        'Lutsk',
        'Dobromyl',
        'Akkerman',
        'Palanok',
        'Zolochiv',
        'Palanok',
        'Mangup',
        'Olseko',
        'Brody',
        'Isiaslav',
        'Kaffa',
        'Bilhorod',
    ], n);
    default: return 'God';
    }
};
