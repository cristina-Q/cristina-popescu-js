let calculateRectangleArea = (L, l) => {
  return L * l;
};

console.warn(`
  Calculeaza suprafata de tapet necesara pentru
  o camera de 6 pe 4 m cu tavan inalt de 2.5m,
  stiind ca exista o usa de 2.2 pe 1.5 si o
  suprafata de ferestre de 2 pe 1.5.
`);
let longWallSurface = calculateRectangleArea(6, 2.5);
let shortWallSurface = calculateRectangleArea(4, 2.5);
let totalWallSurface = 2 * (longWallSurface + shortWallSurface);
let doorSurface = calculateRectangleArea(2.2, 1.5);
let windowSurface = calculateRectangleArea(2, 1.5);
console.log(`
  Suprafata de tapet este:
  ${totalWallSurface - doorSurface - windowSurface}.
`);

console.warn(`
  Creaza o functie wrapper numita
  calculateSquareArea()
  pentru calculateRectangleArea()
  care sa primeasca ca parametru latura
  unui patrat si sa calculeze suprafata acestuia.
`);
let calculateSquareArea = (l) => {
  let squareArea = calculateRectangleArea(l, l);

  return squareArea;
};
console.log(`Patratul are ${calculateSquareArea(2)}mp.`);

console.warn(`
  3. Calculeaza suprafata de tapet necesara pentru
  o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind
  ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.
`);
longWallSurface = calculateRectangleArea(12, 2.5);
shortWallSurface = calculateRectangleArea(9, 2.5);
totalWallSurface = 2 * (longWallSurface + shortWallSurface);
doorSurface = calculateRectangleArea(3, 2);
windowSurface = calculateRectangleArea(3, 3);
console.log(`
  Suprafata de tapet este:
  ${totalWallSurface - doorSurface - windowSurface}.
`);

console.warn(`
4. Creaza o functie wrapper pentru calculateRectangleArea() care sa
primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial,
apoi latimea si lungimea altui dreptunghi. Functia se va numi
aggregateSurfaceArea().
`);

let aggregateSurfaceArea = (L1, l1, L2, l2) => {
  let rectangleArea1 = calculateRectangleArea(L1, l1);
  let rectangleArea2 = calculateRectangleArea(L2, l2);

  return rectangleArea1 + rectangleArea2;
};

console.warn(`
5. Folosind aceasta noua functie calculeaza suprafata totala a doua
dreptunghiuri de 48 pe 92 si 51 pe 102.
`);

console.log(` Grand Total Area: ${aggregateSurfaceArea(48, 92, 51, 102)}`);
