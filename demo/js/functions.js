var listContacts = function () {
    navigator.contactsPhoneNumbers.list(function (contacts) {
        var contactsElement = document.getElementById("content");
        contactsElement.innerHTML = '';

        for (var i = 0; i < contacts.length; i++) {

            var p = document.createElement("p");
            p.textContent = contacts[i].id + " - " + contacts[i].displayName

            contactsElement.appendChild(p);
            for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                var phone = contacts[i].phoneNumbers[j];
                console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber + ")");
            }
        }
    });
}

var grantPushPermissions = function () {
    FirebasePlugin.grantPermission(function (hasPermission) {
        window.alert("Permission was " + (hasPermission ? "granted" : "denied"));
    });
}

var getPushToken = function () {
    FirebasePlugin.getToken(function (fcmToken) {
        var contentElement = document.getElementById("content");
        contentElement.innerHTML = `
            <p>Firebase push token: </p>
            <code>${fcmToken}</code>
        `;
    }, function (error) {
        console.error(error);
    });
}

var shareDialog = function () {
    var options = {
        message: 'share this', // not supported on some apps (Facebook, Instagram)
        subject: 'the subject', // fi. for email
        //        files: ['', ''], // an array of filenames either locally or remotely
        url: 'https://www.website.com/foo/#bar?a=b',
        chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
        iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
    };

    var onSuccess = function (result) {
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    };

    var onError = function (msg) {
        console.log("Sharing failed with message: " + msg);
    };

    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);


}

var showCamera = function () {
    var cameraOptions = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }

    var onSuccess = function (result) {

    }

    var onError = function (msg) {
        console.log("Sharing failed with message: " + msg);
    };

    navigator.camera.getPicture(onSuccess, onError, cameraOptions);
}

var captureAudio = function () {
    var onSuccess = function (result) {
        console.log("Capture success: " + JSON.stringify(result));
    }

    var onError = function (msg) {
        console.log("Capture failed: " + JSON.stringify(msg));
    };


    navigator.device.audiorecorder.recordAudio(onSuccess, onError, null, '#fff', '#000');
}

var scanQrCode = function () {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
                  "Result: " + result.text + "\n" +
                  "Format: " + result.format + "\n" +
                  "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: true, // Android, launch with the torch switched on (if available)
            saveHistory: true, // Android, save scan history (default false)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true, // iOS
            disableSuccessBeep: false // iOS and Android
        }
    );
}
