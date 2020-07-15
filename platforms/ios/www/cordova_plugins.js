cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-contacts-phonenumbers.contactsPhoneNumbers",
      "file": "plugins/cordova-plugin-contacts-phonenumbers/www/contactsPhoneNumbers.js",
      "pluginId": "cordova-plugin-contacts-phonenumbers",
      "clobbers": [
        "navigator.contactsPhoneNumbers"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-browsersync-gen2": "1.1.7",
    "cordova-plugin-contacts-phonenumbers": "0.0.12"
  };
});