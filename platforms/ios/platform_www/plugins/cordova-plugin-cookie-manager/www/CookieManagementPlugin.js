cordova.define("cordova-plugin-cookie-manager.CookieManagementPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.flush = function(arg0, success, error) {
  exec(success, error, 'CookieManagementPlugin', 'flush', [arg0]);
}

});
