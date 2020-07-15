var listContacts = function() {
    navigator.contactsPhoneNumbers.list(function(contacts) {
        var contactsElement = document.getElementById("content");
        contactsElement.innerHTML = '';

        for(var i = 0; i < contacts.length; i++) {
            
            var p = document.createElement("p");
            p.textContent = contacts[i].id + " - " + contacts[i].displayName

            contactsElement.appendChild(p);
            for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                var phone = contacts[i].phoneNumbers[j];
                console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber+ ")");
            }
        }
    });
}

var grantPushPermissions = function () {
    FirebasePlugin.grantPermission(function(hasPermission){
        window.alert("Permission was " + (hasPermission ? "granted" : "denied"));
    });
}

var getPushToken = function() {
    FirebasePlugin.getToken(function(fcmToken) {
        var contentElement = document.getElementById("content");
        contentElement.innerHTML = `
            <p>Firebase push token: </p>
            <code>${fcmToken}</code>
        `;
    }, function(error) {
        console.error(error);
    });    
}