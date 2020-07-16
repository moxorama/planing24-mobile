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
      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-wkwebview-engine",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview",
      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview.js",
      "pluginId": "cordova-plugin-wkwebview-engine",
      "clobbers": [
        "window.WkWebView"
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
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
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
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-androidx": "2.0.0",
    "cordova-plugin-androidx-adapter": "1.1.1",
    "cordova-plugin-firebasex": "10.1.1",
    "cordova-plugin-enable-multidex": "0.2.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.6.8"
  };
});