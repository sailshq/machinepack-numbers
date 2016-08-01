module.exports = {


  friendlyName: 'Convert string to number',


  description: 'Convert the given input string to a number.',


  extendedDescription: 'This machine specifically converts "numeric" strings (e.g. "123", "-5", "4.56" and "1.23e+50") to numbers.  If the string is not numeric, an error will be triggered.  If you need to convert _any_ string to a number (defaulting to zero) use the "Construct value" machine from the "Util" pack.  Note that the strings "Infinity" and "-Infinity" will also trigger an error.',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    string: {
      description: 'The string to convert to a number.',
      example: '123'
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Number',
      outputDescription: 'The value obtained by converting the input string to a number.',
      outputExample: 123
    }
  },


  fn: function(inputs, exits) {


    // Attempt to convert the input value to a number.
    var converted = +inputs.string;

    // If the result is NaN, Infinity or -Infinity, trigger the `error` exit.
    if (isNaN(converted) || converted === Infinity || converted === -Infinity) {
      return exits.error('The given string could not be converted to a number.');
    }

    // Otherwise return the converted value through the `success` exit.
    return exits.success(converted);

  },



};
