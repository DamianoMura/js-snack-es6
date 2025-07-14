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
//inizializziamo lighterBike con il primo oggetto dell'array 
let lighterBike = bikes[0];
//cicliamo l'array usando la lunghezza dell'array come limite per l'indice
for (let i=0 ; i<bikes.length ; i++){
  //se trova un peso minore, lighterBike acquisisce il nuovo oggetto
  if(bikes[i].weight<lighterBike.weight)
    lighterBike = bikes[i];
}
console.log(lighterBike)


// ## Snack2\*\*

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const newTeams = [];
const teams = [
  {
    name:"Atletic PHP",
    points:0,
    faulsAgainist:0
  },
  {
    name:"A.C. Java",
    points:0,
    faulsAgainist:0
  },
  {
    name:"F.C. Python",
    points:0,
    faulsAgainist:0
  },
  {
    name:"Real JavaScript",
    points:0,
    faulsAgainist:0
  },
  {
    name:"Franco",
    points:0,
    faulsAgainist:0
  }
];
//inizializzo una arrow function per inserire numeri casuali nelle proprietà points e faulsAgainist
let random = () => {
  for (let i=0 ; i<teams.length ; i++ ){
    //genero i numeri random e li piazzo nell'oggetto come proprietà points e faulsAgainist
    teams[i].points=Math.floor(Math.random()*100);
    teams[i].faulsAgainist=Math.floor(Math.random()*1000);
    //inserisco le 2 proprietà nel nuovo array...
    newTeams[i]={
      name:teams[i].name,
      faulsAgainist:teams[i].faulsAgainist
    }
   
  }
  console.log(teams)
  console.log(newTeams)

}


// istruzioni corpo programma

random();