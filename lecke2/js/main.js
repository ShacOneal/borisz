const hospital = require("../../lecke1/js/main.js");

const doctors = [ hospital.doctors[0] , hospital.doctors[1] ];
const patients = [
    doctors[0].patients1[0] ,
    doctors[0].patients1[1] , 
    doctors[1].patients2[0] , 
    doctors[1].patients2[1]
]

const patientsData1 = 
doctors[0].name + 
"'s patient's name is " + 
patients[0].name + 
", and his/her age is " + 
patients[0].age + "."
;

const patientsData2 = 
doctors[0].name + 
"'s patient's name is " + 
patients[1].name + 
", and his/her age is " + 
patients[1].age + "."
;

const patientsData3 = 
doctors[1].name + 
"'s patient's name is " + 
patients[2].name + 
", and his/her age is " + 
patients[2].age + "."
;

const patientsData4 = 
doctors[1].name + 
"'s patient's name is " + 
patients[3].name + 
", and his/her age is " + 
patients[3].age + "."
;

console.log(patientsData1);
console.log(patientsData2);
console.log(patientsData3);
console.log(patientsData4);