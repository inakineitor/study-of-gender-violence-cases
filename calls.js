const parse = require('csv-parse/lib/sync');
const { readFileSync } = require('fs');
// require('colors');

const { classifyCallerDescription, classifyGender, classifyCallerRealtionshipWithKidsPresent, classifyViolenceTypes, parseInteger, classifyAgeRange, classifyRelationshipBetweenAggressorAndVictim, classifyCallDerivation, parseTimestamp, classifyProvinceName } = require('./helpers');

/* Importing CSV file */
const callsCsvString = readFileSync('./calls.csv', { encoding: 'utf8' });

/* Parsing CSV file */
let parsedCalls = parse(callsCsvString, {
  columns: true,
  skip_empty_lines: true,
});

/* Printing the datafrane keys */
// const callKeys = Object.keys(parsedCalls[0]);
// console.log('===== Keys in Call Data ====='.green);
// for (const key of callKeys) {
//   console.log(key);
// }
// console.log();

/* Processing dataframe types */
const calls = parsedCalls.map(call => {
  const processedCall = {
    caseId: parseInteger(call.caso_id),
    caller: {
      description: classifyCallerDescription(call.llamante_descripcion),
      gender: classifyGender(call.llamante_genero),
      relationshipWithKidsPresent: classifyCallerRealtionshipWithKidsPresent(call.llamante_vinculo_ninios_presentes),
    },
    violenceTypes: classifyViolenceTypes(call.violencia_tipo),
    victims: {
      age: parseInteger(call.victima_edad),
      ageRange: classifyAgeRange(call.victima_rango_etario),
      gender: classifyGender(call.victima_genero),
      number: parseInteger(call.victima_cantidad),
    },
    agressors: {
      number: parseInteger(call.agresor_cantidad),
      gender: classifyGender(call.agresor_genero),
      relationshipWithVictim: classifyRelationshipBetweenAggressorAndVictim(call.agresor_relacion_victima),
    },
    derivation: classifyCallDerivation(call.llamado_derivacion),
    timestamp: parseTimestamp(call.llamado_fecha_hora),
    province: {
      name: classifyProvinceName(call.llamado_provincia),
      id: parseInteger(call.llamado_provincia_id),
    },
  };

  processedCall.isADomesticViolenceCase = !(processedCall.callerDescription === 'NOT_A_CASE_OF_DOMESTIC_VIOLENCE' || (Array.isArray(processedCall.violenceTypes) && processedCall.violenceTypes[0] === 'NOT_A_CASE_OF_DOMESTIC_VIOLENCE') || processedCall.derivation === 'NOT_A_CASE_OF_DOMESTIC_VIOLENCE');

  return processedCall;
});

module.exports = calls;
