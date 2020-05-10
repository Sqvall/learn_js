class Picture {
  constructor (width, height, pixels) {
    this.width = width;
    this.height = height;
    this.pixels = pixels;
  }

  static empty = (width, height, color) => {
    const pixels = new Array(width * height).fill(color);
    return new Picture(width, height, pixels);
  };

  pixel (x, y) {
    return this.pixels[x + y * this.width];
  };

  draw (pixels) {
    const copy = [...this.pixels];
    for (const { x, y, color } of pixels) {
      copy[x + y * this.width] = color;
    }
    return new Picture(this.width, this.height, copy);
  };
}

const updateState = (state, action) => {
  return { ...state, ...action };
};

const test = Picture.empty(10, 10, 'red');
console.log(test.draw([{ x: 5, y: 6, color: 'green' }]));
