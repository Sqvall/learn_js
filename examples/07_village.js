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
}

const first = new VillageState('Почта', [{ place: 'Почта', address: 'Дом Алисы' }]);
const next = first.move('Дом Алисы');

console.log(first.place);
console.log(first.parcels);
console.log(next.place);
console.log(next.parcels);
