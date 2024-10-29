let hospital = {};
let doctors = [];
let gyuszi = {};
let peti = {};
let patients1 = [];
let patients2 = [];

const bence = {
    name: "Bence",
    age: 25,
    hight: 175 + "cm",
    weight: 99 + "kg",
    married: true,
    id: 1,
};

const gabor = {
    name: "Gábor",
    age: 31,
    hight: 180 + "cm",
    weight: 88 + "kg",
    married: false,
    id: 2,
};

const mari = {
    name: "Mari",
    age: 20,
    hight: 160 + "cm",
    weight: 55 + "kg",
    married: false,
    id: 3,
};

const cicok = {
    name: "Cicok",
    age: 40,
    hight: 172 + "cm",
    weight: 68 + "kg",
    married: true,
    id: 4,
};

patients1 = [ bence , gabor ];
patients2 = [ mari , cicok ];

gyuszi = {
    name: "Gyuszi",
    patients1,
};

peti = {
    name: "Peti",
    patients2,
};

doctors = [ gyuszi , peti ];

hospital = {
    name: "Gáspár Jenő",
    doctors,
};

console.log(hospital.doctors[0].patients1[0]);
console.log(hospital.doctors[0].patients1[1]);
console.log(hospital.doctors[1].patients2[0]);
console.log(hospital.doctors[1].patients2[1]);

module.exports = hospital;