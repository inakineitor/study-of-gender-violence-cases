const parse = require('csv-parse/lib/sync');
const { readFileSync } = require('fs');
// require('colors');

const {
  classifyGender,
  classifyViolenceTypes,
  parseInteger,
  classifyRelationshipBetweenAggressorAndVictim,
  parseTimestamp,
  parseBoolean,
  classifyNationality,
} = require('./helpers');

/* Importing CSV file */
const interventionsCsvString = readFileSync('./interventions.csv', { encoding: 'utf8' });

/* Parsing CSV file */
let parsedInterventions = parse(interventionsCsvString, {
  columns: true,
  skip_empty_lines: true,
});

/* Printing the datafrane keys */
const interventionKeys = Object.keys(parsedInterventions[0]);
// console.log('===== Keys in Intervention Data ====='.green);
// for (const key of interventionKeys) {
//   console.log(key);
// }
// console.log();

/* Processing dataframe types */
const interventions = parsedInterventions.map(intervention => ({
  caseId: parseInteger(intervention.caso_id),
  timestamp: parseTimestamp(intervention.intervencion_fecha_hora),
  victim: {
    pregnant: parseBoolean(intervention.victima_embarazo),
    age: parseInteger(intervention.victima_edad),
    gender: classifyGender(intervention.victima_genero),
    nationality: classifyNationality(intervention.victima_nacionalidad),
    disabled: parseBoolean(intervention.victima_discapacidad),
  },
  violenceTypes: classifyViolenceTypes(intervention.violencia_tipo),
  aggressor: {
    relationshipWithVictim: classifyRelationshipBetweenAggressorAndVictim(intervention.agresor_relacion_victima),
  },
}));

module.exports = interventions;
