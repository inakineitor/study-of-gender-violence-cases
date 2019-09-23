require('colors');
const { mean, sum } = require('simple-statistics');

const calls = require('./calls');
const interventions = require('./interventions');

console.log(calls.length);
console.log(interventions.length);

console.log(calls);

const numberOfFemaleVictims = sum(calls.filter(call => call.victims.gend<er === 'FEMALE').map(call => call.victims.number || 1));
const numberOfMaleVictims = sum(calls.filter(call => call.victims.gender === 'MALE').map(call => call.victims.number || 1));
const totalNumberOfVictims = numberOfFemaleVictims + numberOfMaleVictims;

console.log(`Percentage of female victims: ${numberOfFemaleVictims / totalNumberOfVictims}`.green);
