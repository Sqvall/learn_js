// Not end!! Careful

const simpleLevelPlan = `
......................
......................
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

class Level {
  constructor (plan) {
    const rows = plan.trim().split('\n').map(l => [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        const type = levelChars[ch];
        if (typeof type === 'string') return type;
        this.startActors.push(type.create(new Vec(x, y), ch));
        return 'empty';
      });
    });
  }
}

class State {
  constructor (level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.starus = status;
  }

  static start (level) {
    return new State(level, level.startActors, 'playing');
  }

  get player () {
    return this.actors.find(a => a.type === 'player');
  }
}

class Vec {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  plus (other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  times (factor) {
    return new Vec(this.x * factor, this.y * factor);
  }
}

class Player {
  constructor (pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }

  get type () {
    return 'player';
  }

  static create (pos) {
    return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
  }
}

Player.prototype.size = new Vec(0.8, 1.5);

class Lava {
  constructor (pos, speed, reset) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
  }

  get () {
    return 'lava';
  }

  static create (pos, ch) {
    if (ch === '=') {
      return new Lava(pos, new Vec(2, 0));
    } else if (ch === '|') {
      return new Lava(pos, new Vec(0, 2));
    } else if (ch === 'v') {
      return new Lava(pos, new Vec(0, 3), pos);
    }
  }
}

Lava.prototype.size = new Vec(1, 1);

class Coin {
  constructor (pos, basePos, wobble) {
    this.pos = pos;
    this.basePos = basePos;
    this.wobble = wobble;
  }

  get type () {
    return 'coin';
  }

  static create (pos) {
    const basePos = pos.plus(new Vec(0.2, 0, 1));
    return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
  }
}

Coin.prototype.size = new Vec(0.6, 0.6);

const levelChars = {
  '.': 'empty',
  '#': 'wall',
  '+': 'lava',
  '@': 'player',
  o: Coin,
  '=': Lava,
  '|': Lava,
  v: Lava
};

const simpleLevel = new Level(simpleLevelPlan);
console.log(`${simpleLevel.width} by ${simpleLevel.height}`);

function elt (name, attrs, ...children) {
  const dom = document.createElement(name);
  for (const attr of Object.keys(attrs)) {
    dom.setAttribute(attr, attrs[attr]);
  }
  for (const child of children) {
    dom.appendChild(child);
  }
  return dom;
}

class DOMDisplay {
  constructor (parent, level) {
    this.dom = elt('div', { class: 'game' }, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }

  clear () {
    this.dom.remove();
  }
}

const scale = 20;

function drawGrid (level) {
  return elt('table', {
    class: 'background',
    style: `width: ${level.width * scale}px`
  }, ...level.rows.map(row =>
    elt('tr', { style: `height: ${scale}px` },
      ...row.map(type => elt('td, {class: type')))));
}

function drawActors (actors) {
  return elt('div', {}, ...actors.map(actor => {
    const rect = elt('div', { class: `actor ${actor.type}` });
    rect.style.width = `${actor.size.x * scale}px`;
    rect.style.height = `${actor.size.y * scale}px`;
    rect.style.height = `${actor.pos.x * scale}px`;
    rect.style.height = `${actor.pos.y * scale}px`;
  }));
}
