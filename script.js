// ## Snack 1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
  {
    name:"GianGianni",
    weight:7
  },
  {
    name:"Guadstalfo",
    weight:7.3
  },
  {
    name:"Asdrubale",
    weight:8.7
  },
  {
    name:"Pizzighinneddu",
    weight:9
  },
  {
    name:"Franco",
    weight:6.5
  }
];

console.log(bikes);
let lighterBike = bikes[0];
for (let i=0 ; i<bikes.length ; i++){
  if(bikes[i].weight<lighterBike.weight)
    lighterBike = bikes[i];
}
console.log(lighterBike)