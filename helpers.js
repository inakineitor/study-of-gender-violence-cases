const classifyCallerDescription = callerDescription => {
  switch (callerDescription) {
    case 'Comisaría':
      return 'POLICE_STATION';
    case 'Otro Particular':
      return 'ANOTHER_INDIVIDUAL';
    case 'Víctima':
      return 'VICTIM';
    case 'Otra Institución':
      return 'ANOTHER_INSTITUTION';
    case 'Familiar de la víctima':
      return 'RELATIVE';
    case 'Profesionales PVCV':
      return 'VIOLENCE_VICTIMS_PROFESSIONALS';
    case 'Ns/Nc':
      return undefined;
    // return 'UNKNOWN';
    case 'Vecina/o de la víctima':
      return 'NEIGHBOUR';
    case 'Otro sobre un caso que no es violencia familiar':
      return 'NOT_A_CASE_OF_DOMESTIC_VIOLENCE';
    default:
      return undefined;
  }
};

const classifyGender = gender => {
  switch (gender) {
    case 'Masculino':
      return 'MALE';
    case 'Femenino':
      return 'FEMALE';
    case 'NS/NC':
      return undefined;
    // return 'UNKNOWN';
    case 'Transgénero':
    case 'Trans':
      return 'TRANSGENDER';
    default:
      return undefined;
  }
};

const classifyCallerRealtionshipWithKidsPresent = callerRelationshipWithKidsPresent => {
  switch (callerRelationshipWithKidsPresent) {
    case 'Madre':
      return 'MOTHER';
    case 'Padre':
      return 'FATHER';
    case 'Hermana/o':
      return 'SIBLING';
    case 'Otro familiar':
      return 'REALTIVE';
    case 'Otro no familiar':
      return 'NON_RELATIVE';
    case 'Sin datos':
      return undefined;
    // return 'UNKNOWN';
    case 'No hay niñas/os':
      return 'NO_KIDS_PRESENT';
    default:
      return undefined;
  }
};

const classifyViolenceTypes = violenceTypes => {
  switch (violenceTypes) {
    case 'Económica':
      return ['ECONOMIC'];
    case 'Económica y física':
      return ['ECONOMIC', 'PHYSICAL'];
    case 'Física':
      return ['PHYSICAL'];
    case 'Física y sexual':
      return ['PHYSICAL', 'SEXUAL'];
    case 'Sexual':
      return ['SEXUAL'];
    case 'Otras':
      return ['OTHER'];
    case 'Psicológica':
      return ['PSYCHOLOGICAL'];
    case 'No es un caso de Vio':
      return ['NOT_A_CASE_OF_DOMESTIC_VIOLENCE'];
    default:
      return undefined;
  }
};

const parseInteger = string => {
  const number = parseInt(string);
  return Number.isNaN(number) ? undefined : number;
};

const classifyAgeRange = ageRange => {
  const numbers = ageRange.match(/\d+/g);
  if (numbers === null) return undefined;
  if (numbers.length === 1) return [numbers[0], Infinity];
  if (numbers.length === 2) return [numbers[0], numbers[1]];
  return undefined;
};

const classifyRelationshipBetweenAggressorAndVictim = relationshipBetweenAggressorAndVictim => {
  switch (relationshipBetweenAggressorAndVictim) {
    case 'Espos@/compañer@ actual':
      return 'CURRENT_PARTNER';
    case 'Otro no conviviente':
      return 'ANOTHER_NON_COHABITOR';
    case 'Ns/Nc':
    case 'NS/NC':
      return undefined;
    // return 'UNKNOWN';
    case 'Herman@':
      return 'SIBLING';
    case 'Madre':
      return 'MOTHER';
    case 'Padre':
      return 'FATHER';
    case 'Ex espos@/pareja':
      return 'FORMER_PARTNER';
    case 'Hij@':
      return 'CHILD';
    case 'Pareja de la madre/padre':
      return 'PARTNER_OF_PARENT';
    case 'Otro conviviente':
      return 'ANOTHER_COHABITOR';
    case 'Abuel@':
      return 'GRANDPARENT';
    default:
      return undefined;
  }
};

const classifyCallDerivation = callDerivation => {
  switch (callDerivation) {
    case 'La víctima no aceptó la intervención de Equipos Móviles':
      return 'VICTIM_DID_NOT_ACCEPT_INTERVENTION_FROM_MOBILE_UNITS';
    case 'Llamante solicitó información y/o orientación':
      return 'CALLER_SOLICITED_INFORMATION_AND_OR_ORIENTATION';
    case 'Intervención Equipos Móviles a donde se encontrara la/s víctima/s':
      return 'MOBILE_UNITS_INTERVENED';
    case 'Se planificó intervención para otro momento':
      return 'INTERVENTION_WAS_PLANNED_FOR_ANOTHER_MOMENT';
    case 'No intervino equipo móvil por tratarse de un caso fuera de CABA':
      return 'NO_MOBILE_UNIT_INTERVENED_BECAUSE_THE_CASE_WAS_OUTSIDE_CABA';
    case 'No había móviles y/o Equipos para realizar la intervención':
      return 'NO_MOBILE_UNITS_WERE_AVAILABLE';
    case 'Está interviniendo o se deriva a otra institución':
      return 'IS_INTERVENING_OR_IS_DERIVED_TO_ANOTHER_INSTITUTION';
    case 'No se trata de un caso de violencia familiar':
      return 'NOT_A_CASE_OF_DOMESTIC_VIOLENCE';
    default:
      return undefined;
  }
};

const parseTimestamp = timestamp => {
  return new Date(timestamp);
};

const classifyProvinceName = provinceName => {
  switch (provinceName) {
    case 'Ciudad Autónoma de Buenos Aires':
      return 'Ciudad Autónoma de Buenos Aires';
    default:
      return undefined;
  }
};

const parseBoolean = boolean => {
  switch (boolean) {
    case 'SI':
      return true;
    case 'NO':
      return false;
    case 'NS/NC':
    default:
      return undefined;
  }
};

const classifyNationality = nationality => {
  switch (nationality) {
    case 'Argentina':
      return 'ARGENTINIAN';
    case 'Boliviana':
      return 'BOLIVIAN';
    case 'Brasileña':
      return 'BRAZILIAN';
    case 'Otra':
      return 'ANOTHER';
    case 'Paraguaya':
      return 'PARAGUAYAN';
    case 'Peruana':
      return 'PERUVIAN';
    case 'NS/NC':
    default:
      return undefined;
  }
};

module.exports = {
  classifyCallerDescription,
  classifyGender,
  classifyCallerRealtionshipWithKidsPresent,
  classifyViolenceTypes,
  parseInteger,
  classifyAgeRange,
  classifyRelationshipBetweenAggressorAndVictim,
  classifyCallDerivation,
  parseTimestamp,
  classifyProvinceName,
  parseBoolean,
  classifyNationality,
};
