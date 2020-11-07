cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-audio-recorder.AudioRecorder",
      "file": "plugins/cordova-plugin-audio-recorder/www/AudioRecorder.js",
      "pluginId": "cordova-plugin-audio-recorder",
      "clobbers": [
        "navigator.device.audiorecorder"
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
      "id": "cordova-plugin-qr-barcode-scanner.BarcodeScanner",
      "file": "plugins/cordova-plugin-qr-barcode-scanner/www/barcodescanner.js",
      "pluginId": "cordova-plugin-qr-barcode-scanner",
      "clobbers": [
        "cordova.plugins.barcodeScanner"
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
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-audio-recorder": "1.1.0",
    "cordova-plugin-browsersync-gen2": "1.1.7",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-contacts-phonenumbers": "0.0.12",
    "cordova-plugin-enable-multidex": "0.2.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-jsinjection": "1.1.0",
    "cordova-plugin-qr-barcode-scanner": "8.0.3",
    "cordova-plugin-remote-injection": "0.5.2",
    "cordova-plugin-statusbar": "2.4.3",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.6.8",
    "cordova-plugin-firebasex": "11.0.3"
  };
});