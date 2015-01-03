var dependents = require('dependents');
var isCallingFunction = require('is-calling-function');

module.exports = function(options) {
  var success = options.success;

  options.success = function(err, dependents) {
    var callers = dependents.filter(function(dependent) {
      return isCallingFunction(dependent, functionName);
    });

    if (err) {
      success(err);
      return;
    }

    success(null, callers);
  };

  dependents(options);
};