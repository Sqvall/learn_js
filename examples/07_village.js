const roads = [
  'Дом Алисы-Дом Боба',
  'Дом Алисы-Склад',
  'Дом Алисы-Почта',
  'Дом Боба-Ратуша',
  'Дом Дарии-Дом Эрни',
  'Дом Дарии-Ратуша',
  'Дом Эрни-Дом Греты',
  'Дом Греты-Ферма',
  'Дом Греты-Магазин',
  'Рынок-Ферма',
  'Рынок-Почта',
  'Рынок-Магазин',
  'Рынок-Ратуша',
  'Магазин-Ратуша'
];

const buildGraph = (edges) => {
  // Build graph from roads
  const graph = {};
  const addEdge = (from, to) => {
    // Create or add edge
    if (graph[from] === undefined) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  };
  for (const [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
};

const roadGraph = buildGraph(roads);

class VillageState {
  constructor (place, parcels) {
    this.place = place;
    this.parcels = parcels; // parcel = посылка
  }

  move (destination) {
    // if destination not in road graph, return self
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      const parcels = this.parcels.map(p => {
        // move not delivered parcels
        if (p.place !== this.place) return p;
        return { place: destination, address: p.address };
        // if parcel need stay this place (filter -> new SET without delivered parcel)
      }).filter(p => p.place !== p.address);
      return new VillageState(destination, parcels);
    }
  }

  static random () {
    // Generate random parcel list
    const parcelCount = 5;
    const parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      const address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place === address);
      parcels.push({ place, address });
    }
    return new VillageState('Почта', parcels);
  }
}

const first = new VillageState('Почта', [{ place: 'Почта', address: 'Дом Алисы' }]);
const next = first.move('Дом Алисы');

console.log(first.place);
console.log(first.parcels);
console.log(next.place);
console.log(next.parcels);

const runRobot = (state, robot, memory) => {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Выполнено за ${turn} ходов`);
      break;
    }
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Переход в направлении ${action.direction}`);
  }
};

const randomPick = (array) => {
  // random pick element from array
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
};

const randomRobot = (state) => {
  // random robot
  // console.log(state);
  return { direction: randomPick(roadGraph[state.place]) };
};

// runRobot(VillageState.random(), randomRobot); // client code

const mailRoute = [
  // from simple example: create manual route
  'Дом Алисы', 'Склад', 'Дом Алисы', 'Дом Боба', 'Ратуша', 'Дом Дарии', 'Дом Эрни', // careful book error Сарай -> Склад
  'Дом Греты', 'Магазин', 'Дом Греты', 'Ферма', 'Рынок', 'Почта'
];

const routeRobot = (state, memory) => {
  // simple route robot with memory
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
};

runRobot(VillageState.random(), routeRobot, []); // client code
