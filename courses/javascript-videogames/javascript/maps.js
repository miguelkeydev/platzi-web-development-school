// --------------------- Functions ---------------------
function addGameEmojies() {
  if (localStorage.getItem('player')) {
    emojies['PLAYER'] = localStorage.getItem('player');
    emojies['X'] = localStorage.getItem('obstacle');
    emojies['COLLISION'] = localStorage.getItem('collision');
    emojies['I'] = localStorage.getItem('goal');
  }
}

// -------------------- Procedure --------------------
const emojies = {
  '-': ' ',
  'O': '🚪',
  'X': '💣',
  'I': '🎁',
  'PLAYER': '💀',
  'COLLISION': '💥',
  'LIFE': '&#129293;',
  'LIFE_GONE': '&#128420;',
  'LIFE_BROKEN': '💔'
};

addGameEmojies();

const maps = [];

maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
  OXX-----XX
  --X-XXX-XX
  X---XXX-XX
  X-XXXXX-XX
  X-XXXXX-XX
  XX------XX
  XXXXX-XXXX
  XIXX--XXXX
  X----XXXXX
  XXXXXXXXXX
`);
maps.push(`
  X-XI----XX
  X--XXXX-XX
  XX-XXXX-XX
  XX-XXX--XX
  XX-XX--XXX
  ------XXXX
  XXXX-XXXXX
  XOXX-XXXXX
  X-XX-XXXXX
  X----XXXXX
`);
maps.push(`
  ---O------
  -XXXXXXXXX
  -XX-------
  -XX-XXX-X-
  -XXI--X-X-
  -X-XXXX-X-
  ------XXX-
  --X-X-XXX-
  -X-XXX----
  -------XXX
`);
maps.push(`
  X--------X
  X-XXXXXX--
  X------XX-
  XXXXXX--X-
  XX-OXXX-X-
  X--XX---X-
  --XXX-XX--
  -XXX--X--X
  --X--XX-XX
  X---XXX--I
`);
maps.push(`
  ----------
  -XXXXXXXX-
  -X------X-
  -X-XXXX-X-
  -X-XI-X-X-
  -X-XX-X-X-
  -X-XX-X-X-
  -X----X-X-
  -XXXXXX-X-
  --------XO
`);
maps.push(`
  XXXX---XXX
  ---X-X----
  -XX--XXX--
  -X--XXX---
  ---XO--X--
  --X-XX--X-
  -X-X--X-X-
  -X---X--X-
  IX-X---XX-
  X--X------
`);
maps.push(`
  X---XX---X
  --X--X-X-X
  -XXX---X-X
  -XXXXXX---
  ---X---XX-
  X-X--XX---
  ---XX---XX
  -X-X--X--X
  O-XIXX-X-X
  --X------X
`);