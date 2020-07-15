cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-contacts-phonenumbers.contactsPhoneNumbers",
      "file": "plugins/cordova-plugin-contacts-phonenumbers/www/contactsPhoneNumbers.js",
      "pluginId": "cordova-plugin-contacts-phonenumbers",
      "clobbers": [
        "navigator.contactsPhoneNumbers"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-jsinjection.jsinjection",
      "file": "plugins/cordova-plugin-jsinjection/www/jsinjection.js",
      "pluginId": "cordova-plugin-jsinjection",
      "clobbers": [
        "jsinjection"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-browsersync-gen2": "1.1.7",
    "cordova-plugin-contacts-phonenumbers": "0.0.12",
    "cordova-plugin-remote-injection": "0.5.2",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-wkwebview-engine": "1.2.1",
    "cordova-plugin-jsinjection": "1.1.0",
    "cordova-plugin-statusbar": "2.4.3"
  };
});