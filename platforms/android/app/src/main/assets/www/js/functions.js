var listContacts = function() {
    navigator.contactsPhoneNumbers.list(function(contacts) {
        var contactsElement = document.getElementById("contacts");
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