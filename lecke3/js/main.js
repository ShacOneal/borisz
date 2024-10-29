const hospital = require("./database2");

const doctors = hospital.doktorok;
const patients = [];
const height = [];
const weight = [];
const age = [];
const insurance = [];
const gyogyszerek = [];

for (i = 0; i < doctors.length; i++) {
  patients.push(...doctors[i].paciensek);
}

for (i = 0; i < patients.length; i++) {
  height.push(Number.parseInt(patients[i].magassag));
  weight.push(Number.parseInt(patients[i].suly));
  age.push(patients[i].kor);
  insurance.push(patients[i].insurance);
  gyogyszerek.push([]);
}

for (i = 0; i < patients.length; i++) {
  if (height[i] > 175) {
    gyogyszerek[i].push("Brufen");
  }
}

for (i = 0; i < patients.length; i++) {
  if (weight[i] < 70 && age[i] <= 30) {
    gyogyszerek[i].push("Bensedin");
  }
}

for (i = 0; i < patients.length; i++) {
  if (weight[i] > 100 && insurance[i] === true) {
    gyogyszerek[i].push("Glucophage");
  }
}

for (i = 0; i < patients.length; i++) {
  if (age[i] > 60 && insurance[i] === true) {
    gyogyszerek[i].push("Diclophen");
  }
}

for (i = 0; i < patients.length; i++) {
  if (gyogyszerek[i][0] === undefined) {
    gyogyszerek[i] = null;
  }
}

for (i = 0; i < patients.length; i++) {
  console.log(patients[i].nev + ": " + gyogyszerek[i]);
}
