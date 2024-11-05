const hospital = require("./database2");

const doctors = hospital.doktorok;

// Mi igaz, meg mi nem igaz
// undefined, 0, null, nan, false

//numbers.filter, numbers.find, numbers.map, numbers.reduce
// filter - uj listat ad vissza, amely elemei igazat return-oznek a minifunkciobol
// find - a legelso igazat adja ki az elemek kozott
// map - amit returnolsz azt adja az elem helyere
// reduce - osszeszedes egy akkumuatorba
//acc+1
//newAcc=(acc+1)+2
//newAcc=(acc+1+2)+3
//newAcc=(acc+1+2+3)+4
// forEach - egy EZ for ciklus az osszes elemnek

const numbers = [1, 2, 3, 5, 7];
function maxiFunctio(number) {
  if (number > 6) {
    return true;
  } else {
    return false;
  }
}
const miniFunctio = (number) => number > 6;

function filter(lista, maxiFunction) {
  console.log(lista, maxiFunction);
  let newLista = [];
  for (i = 0; i < lista.length; i++) {
    if (maxiFunction(lista[i])) {
      newLista.push(lista[i]);
    }
  }
  return newLista;
}

console.log(
  numbers.reduce((acc, number) => {
    console.log(acc);
    return acc + number;
  }, 0)
);

//console.log(miniFunctio, miniFunctio());

const patients = doctors.reduce((accumulator, doctor) => {
  return [...accumulator, ...doctor.paciensek];
}, []);

patients.forEach(({ nev, magassag, suly, kor, insurance }) => {
  //console.log({ nev, magassag, suly, kor, insurance });
  let medicine = [];
  if (Number.parseInt(magassag) > 175) {
    medicine.push("Brufen");
  }
  console.log(Number.parseInt(suly) < 75 && kor < 30);
  if (Number.parseInt(suly) < 75 && kor < 30) {
    medicine.push("Bensedin");
  }
  if (Number.parseInt(suly) > 100 && insurance) {
    medicine.push("Glucophage");
  }
  if (Number.parseInt(kor) > 60 && insurance) {
    medicine.push("Diclophen");
  }
  console.log(medicine.length);
  if (!medicine.length) {
    medicine = null;
  }

  console.log(nev, " kell hogy kapjon : ", medicine);
});

// - Ha valaki magasabb mint 175cm - annak kell adni Brufen-t
// - Ha valaki soványabb mint 70kg - annak kell adni Bensedin-t
// - Ha valaki harminc évtől idősebb nem szabad, hogy Bensedin-t kapjon
// - Ha valaki kövérebb mint 100kg - annak kell adni Glucophage-t
// - Ha valaki idősebb 60 tól - annak kell adni Diclophen-t
// - Ha valakinek nincs biztosítása, nem kaphat Glucophage-t, se Diclophen-t

// {
//   nev: "Bubó",
//   paciensek: [Szamanta, Szanella, Zsofia],
// };

//console.log(patients);
// const patients = [];
// const height = [];
// const weight = [];
// const age = [];
// const insurance = [];
// const gyogyszerek = [];

// for (i = 0; i < doctors.length; i++) {
//   patients.push(...doctors[i].paciensek);
// }

// for (i = 0; i < patients.length; i++) {
//   height.push(Number.parseInt(patients[i].magassag));
//   weight.push(Number.parseInt(patients[i].suly));
//   age.push(patients[i].kor);
//   insurance.push(patients[i].insurance);
//   gyogyszerek.push([]);
// }

// for (i = 0; i < patients.length; i++) {
//   if (height[i] > 175) {
//     gyogyszerek[i].push("Brufen");
//   }
// }

// for (i = 0; i < patients.length; i++) {
//   if (weight[i] < 70 && age[i] <= 30) {
//     gyogyszerek[i].push("Bensedin");
//   }
// }

// for (i = 0; i < patients.length; i++) {
//   if (weight[i] > 100 && insurance[i] === true) {
//     gyogyszerek[i].push("Glucophage");
//   }
// }

// for (i = 0; i < patients.length; i++) {
//   if (age[i] > 60 && insurance[i] === true) {
//     gyogyszerek[i].push("Diclophen");
//   }
// }

// for (i = 0; i < patients.length; i++) {
//   if (gyogyszerek[i][0] === undefined) {
//     gyogyszerek[i] = null;
//   }
// }

// for (i = 0; i < patients.length; i++) {
//   console.log(patients[i].nev + ": " + gyogyszerek[i]);
// }
