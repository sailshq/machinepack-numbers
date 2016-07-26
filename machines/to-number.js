module.exports = {


  friendlyName: 'Convert to number',


  description: 'Convert the given input value to a number.',


  extendedDescription: 'If the value cannot be converted to a number, the `NaN` exit will be triggered.',


  cacheable: true,


  sync: true,


  inputs: {

    value: {
      description: 'The value to convert to a number.',
      example: '==='
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Number',
      outputDescription: 'The value obtained by converting the input value to a number.',
      outputExample: 123
    },

    nan: {
      friendlyName: 'Not a number',
      description: 'The input value could not be converted to a number.'
    }

  },


  fn: function(inputs, exits) {

    // Special case for arrays -- always trigger `nan`, because
    // empty array or arrays with a single numeric value will otherwise
    // be cast as a number, which is not what we want.
    if (Array.isArray(inputs.value)) {
      return exits.nan();
    }

    // Attempt to convert the input value to a number.
    var converted = +inputs.value;

    // If the result is NaN, trigger the `nan` exit.
    if (isNaN(converted)) {
      return exits.nan();
    }

    // Otherwise return the converted value through the `success` exit.
    return exits.success(converted);

  },



};
