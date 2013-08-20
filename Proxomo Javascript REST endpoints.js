//Auth

//applicationID = ID of the Application to authinicate.
//proxomoAPIKey = This is is the key you obtain from proxomo.com after you login
var token = ""
$.ajax({
    url: "https://service.proxomo.com/v09/json/security/accesstoken/get?applicationid=5iWGusSYgYl6Yz7k&proxomoAPIKey=8jEcXpINSVlNflyICelvuGJpiQDcdtSAazml7kYveZhnR",
    dataType: "json",
    success: function(msg) {
        token = msg.AccessToken;
    }
});


//AppData Add

$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{"Key":"AsyncKey","Value":"Value-1", "ObjectType":"PROXOMO"}',
    success: function(msg) {
        var id = msg;
    }
});


//AppData Get

//AppDataID = the ID of the data to retrieve
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/appdata/{AppDataID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
    	//Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//AppData Get All

$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
    	//Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//AppData update

$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{"ID":"IEa8enb39sIEs", "Key":"AsyncKey","Value":"NewValue", "ObjectType":"PROXOMO"}'
});



//AppData Delete

//AppDataID = the ID of the data to delete
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/appdata/{AppDataID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});



//AppData Search

//ObjectType = String - Type of object to search for
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/appdata/search/objecttype/{ObjectType}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
    	//Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Persons App Get

$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/security/persons",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
    	//Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});

//Person Create

//userName = username of new person - must be unique
//password = password of new person
//role = Must be either Admin or User
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/security/person/create?username={userName}&password={password}&role={role}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        var id = msg.PersonID;
    }
});



//Person Delete

//PersonID = the ID of the person to delete
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/security/person/{personID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});



//Persons Authenicate

//applicationID = the application to authenicate against
//userName = the username entered to check against the database
//password = the password enetered
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/security/person/authenticate?applicationid={applicationID}&username={userName}&password={password}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
    	//Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Persons Password Change

//userName = The user to change passwords with
//password = The new password
//resettoken = the PasswordResetToken given by the Password Request Change endpoint
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/security/person/passwordchange?username={userName}&password={password}&resettoken={passwordResetToken}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
    	//Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Persons Password Change Request

//userName = The user to change passwords with
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/security/person/passwordchange/request/{userName}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
    	//Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Update Role

//personID = ID of person to update role
//role = new role
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/security/person/update/role?personid={personID}&role={role}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});




//CustomData Add

$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/customdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{"TableName":"Test","ID":"testID1", "test":"test", "partitionKey": "myPartition"}',
    success: function(msg) {
        var id = msg;
    }
});



//Custom Data Delete

//Table = table the data is in
//ID = the ID of the data to delete
//ParitionKey = IF one was used when creating the object, you must specify it here
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/customdata/table/{tableName}/{CustomDataID}?paritionKey={ParitionKey}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});



//CustomData Get

//Table = table the data is in
//ID = the ID of the data to get
//ParitionKey = IF one was used when creating the object, you must specify it here
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/customdata/table/{tableName}/{CustomDataID}?paritionKey={ParitionKey}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
    	//Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//CustomData Update

//Table = table the data is in
//ID = the ID of the data to get
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/customdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{"TableName":"Test","ID":"testID1", "test":"newValue", "partitionKey":"myPartition"}'
});


//Event Add

$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
    '"EventName": "Test Event",'+
    '"Latitude": 37.416488999999999,'+
    '"MaxParticpants": 2,'+
    '"PersonName": "Tester",'+
    '"MaxParticipants": 0,'+
    '"Status": 0,'+
    '"Longitude": -122.01371,'+
    '"EndTime": "/Date(1329601556883+0000)/",'+
    '"MinParticipants": 100,'+
    '"StartTime": "/Date(1328996756883+0000)/",'+
    '"Description": "Test Event Descr",'+
    '"PersonID": "NM77fyFfH32sG9CK",'+
    '"Privacy": 2,'+
    '"LocationID": "EUTh8SnRpWyXi3Jp"'+
    '}',
    success: function(msg) {
        var id = msg;
    }
});


//Event Get

//EventID = the id of the event to look for
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Event Update

$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
    '"EventName": "Test Event",'+
    '"Latitude": 37.416488999999999,'+
    '"MaxParticpants": 2,'+
    '"PersonName": "Tester",'+
    '"MaxParticipants": 0,'+
    '"Status": 0,'+
    '"Longitude": -122.01371,'+
    '"EndTime": "/Date(1329601556883+0000)/",'+
    '"MinParticipants": 100,'+
    '"StartTime": "/Date(1328996756883+0000)/",'+
    '"Description": "Test Event Descr",'+
    '"PersonID": "NM77fyFfH32sG9CK",'+
    '"Privacy": 2,'+
    '"LocationID": "EUTh8SnRpWyXi3Jp"'+
    '}'
});



//Event Comment Add

//EventID = the ID to attach the comment to
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/comment ",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"PersonID": "NM77fyFfH32sG9CK",'+
        '"EventID": "laefC9diAkNws4hC",'+
        '"Comment": "EventComment",'+
        '"PersonName": "Test Comment Person"'+
    '}',
    success: function(msg) {
        var id = msg;
    }
});


//Event Comment Delete

//EventID = table the data is in
//CommentID = the ID of the data to delete
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/comment/{CommentID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Event Comments Get

//EventID = the id of the event to grab comments from
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/comments",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Event Comment Update

$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/comment",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"PersonID": "NM77fyFfH32sG9CK",'+
        '"EventID": "laefC9diAkNws4hC",'+
        '"Comment": "EventComment",'+
        '"PersonName": "Test Comment Person"'+
    '}'
});


//Event Participant Invite

//EventID = the event to create the invite for
//PersonID = the person to invite to the Event
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/participant/invite/personid/{PersonID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Event Participants Invite

//EventID = the event to create the invite for
//PersonID = the person to invite to the Event comma delimited
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/participants/invite/personids/{PersonIDs}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Event Participants Get

//EventID = the id of the event to grab participants from
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/participants",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Event Participant Delete

//EventID = id of the event that holds the participant
//EventParticipantID = the ID of the participant to delete
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/participant/{EventParticipantID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Event REquest Invite

//EventID = the event to create the invite for
//PersonID = the person that is requesting an invite
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/requestinvite/personid/{PersonID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Event RSVP

//EventID = the event to create the invite for
//PersonID = the person that is responding
//ParticipantStatus = an int from the ParticipantStatus enum
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/rsvp/personid/{PersonID}/participantstatus/{ParticipantStatus}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Event Search

//Latitude = the latitude of the centerpoint of the search area
//Longitude = the longitude of the centerpoint of the search area
//Distance = the radius of the search area
//Start = the start time to search between
//End = the end time to search between
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/events/search/latitude/{Latitude}/longitude/{Longitude}/distance/{Distance}/start/{Start}/end/{End}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Event Search by Person ID

//PersonID = the person to search for within events
//Start = the start time to search between
//End = the end time to search between
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/events/search/personid/{PersonID}/start/{Start}/end/{End}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Event AppData Add

//EventID = the ID to attach the appdata to
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"Key": "event-key",'+
        '"Value": "event-value",'+
        '"ObjectType": "PROXOMO"'+
    '}',
    success: function(msg) {
        var id = msg;
    }
});



//Event AppData Delete

//EventID = id of the event that holds the appdata
//AppDataID = the ID of the appdata to delete
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/appdata/{AppDataID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Event AppData Get

//EventID = the Id of the event that holds the appdata
//AppDataID = the Id of the appdata to get
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/appdata/{AppDataID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Event AppData Get All

//EventID = the Id of the event that holds the appdata
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Event AppData Update

//EventID = the event that holds the appdata to update
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/event/{EventID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"ID": "gwEVuBvsEobnmDuy",'+
        '"ObjectType": "PROXOMO",'+
        '"Value": "New Value",'+
        '"Key": "event-key"'+
    '}'
});



//Friends Get

//PersonID = The person to look up friends for
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/friends/personid/{PersonID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Friends Invite

//FriendA = The friend inviting
//FriendB = The invited friend
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/friend/invite/frienda/{FriendA}/friendb/{FriendB}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Friends Invite by Social Network

//FriendA = The friend inviting
//FriendB = The invited friend
//SocialNetwork = an int representing a socialnetwork from the SocialNetwork enum
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/friend/invite/frienda/{FriendA}/friendb/{FriendB}/socialnetwork/{SocialNetwork}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});



//Friends Response

//FriendA = The friend inviting
//FriendB = The invited friend
//FriendResponse = an int from the FriendResponse enum
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/friend/respond/frienda/{FriendA}/friendb/{FriendB}/friendresponse/{FriendResponse}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Friends SocialNetwork Get

//PersonID = The person to look up friends for
//Socialnetwork = an int from the SocialNetwork enum
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/friends/personid/{PersonID}/socialnetwork/{SocialNetwork}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Friends SocialNetwork App Get

//PersonID = The person to look up friends for
//Socialnetwork = an int from the SocialNetwork enum
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/friends/app/personid/{PersonID}/socialnetwork/{SocialNetwork}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//GeoCode by Address

//address = The address to search for
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/geo/lookup/address/{address}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Reverse GeoCode

//latitude = the latitude to search for
//longitude = the longitude to search for
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/geo/lookup/latitude/{latitude}/longitude/{longitude}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//GeoCode by IP Address

//ipAddress = the IP address to search for
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/geo/lookup/ip/{ipAddress}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});




//Location Add

//EventID = the ID to attach the appdata to
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'
        '"Longitude": 100,'+
        '"Address1": "100 main",'+
        '"City": "Dallas",'+
        '"Latitude": 0,'+
        '"LocationSecurity": 1,'+
        '"Name": "Test Location Name"'+
    '}',
    success: function(msg) {
        var id = msg;
    }
});



//Location Delete

//LocationID = the ID of the location to delete
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location/{locationID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Location Get

//locationID = the ID of the location to get
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location/{locationID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Location Update

$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"Latitude": 0,'+
        '"Address1": "100 main",'+
        '"City": "PmBKInQGW4YEwiWz",'+
        '"Name": "Test Location Name",'+
        '"LocationSecurity": 1,'+
        '"Longitude": 100,'+
        '"ID": "PmBKInQGW4YEwiWz"'+
    '}'
});



//Location Get Categories

$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Location Search by Address

//Address = the address to search for
//Other parameters are avaible, see documentation for more information
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/locations/search?address={Address}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Location Search by GPS

//latitude = the latitude to find locations at
//longitude = the longitude to find locations at
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/locations/search/latitude/{latitude}/longitude/{longitude}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Location Search by IP

//ipAddress = ip address to search for
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/locations/search/ip/{ipAddress}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Location AppData Add

//LocationID = ID of location to add appdata to
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location/{LocationID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"Key": "Location",'+
        '"Value": "Test Value",'+
        '"ObjectType": "PROXOMO"'+
    '}',
    success: function(msg) {
        var id = msg;
    }
});



//Location AppData Delete

//LocationID = the ID of the location that holds the appdata
//AppDataID = the ID of the appdata to delete
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location/{LocationID}/appdata/{AppDataID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Location App Update

//LocationID = the ID of the location that holds the appdata
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location/{LocationID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"ID": "W937UidEniY8n9f",'+
        '"Key": "Location",'+
        '"Value": "Test Value",'+
        '"ObjectType": "PROXOMO"'+
    '}'
});



//Location AppData Get

//locationID = the ID of the location that holds the appdata
//AppDataID = the ID of the app data to get
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location/{LocationID}/appdata/{AppDataID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});



//Location AppData Get all

//locationID = the ID of the location that holds the appdata
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/location/{LocationID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Person Get

//PersonID = Id of the person to get
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person/{PersonID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Person App Update

$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"FacebookID": "705389667",'+
        '"UTCOffset": -5,'+
        '"EmailAddress": "joe@proxomo.com",'+
        '"FirstName": "Joe",'+
        '"TwitterID": "",'+
        '"EmailAlerts": false,'+
        '"MobileVerified": false,'+
        '"ImageURL": "http://profile.ak.fbcdn.net/hprofile-ak-snc4/369197_705389667_1468404193_q.jpg",'+
        '"MobileVerificationStatus": 0,'+
        '"EmailVerified": true,'+
        '"MobileVerificationCode": "biXVAjb3ilbRltDC",'+
        '"MobileAlerts": false,'+
        '"LastName": "Blow",'+
        '"EmailVerificationCode": "2JY73iQaJojbTCHs",'+
        '"EmailVerificationStatus": 0,'+
        '"ID": "NM77fyFfH32sG9CK",'+
        '"UserName": "",'+
        '"FullName": "Joe Proxomo",'+
        '"LastLogin": "/Date(1328929167000+0000)/",'+
        '"MobileNumber": ""'+
    '}'
});




//Person AppData Add

//PersonID = ID of person to add appdata to
$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person/{PersonID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"Key": "Person",'+
        '"Value": "Test Value",'+
        '"ObjectType": "PROXOMO"'+
    '}',
    success: function(msg) {
        var id = msg;
    }
});



//Person AppData Delete

//PersonID = the ID of the person that holds the appdata
//AppDataID = the ID of the appdata to delete
$.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person/{PersonID}/appdata/{AppDataID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: ''
});


//Person App Update

//LocationID = the ID of the location that holds the appdata
$.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person/{PersonID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '{'+
        '"ID": "W937UidEniY8n9f",'+
        '"Key": "Person",'+
        '"Value": "Test Value",'+
        '"ObjectType": "PROXOMO"'+
    '}'
});


//Person AppData Get

//PersonID = Id of the person that holds the appdata
//AppDataID = the ID of the app data to get
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person/{PersonID}/appdata/{AppDataID}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Person AppData Get All

//PersonID = Id of the person that holds the appdata
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person/{PersonID}/appdata",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Person Locations Get

//PersonID = Id of the person that holds the appdata
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person/{PersonID}/locations",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});


//Person SocialNetworkInfo Get

//PersonID = Id of the person that holds the socialnetworkinfo
//SocialNetwork = an int from the SocialNetwork enum
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url:    "https://service.proxomo.com/v09/json/person/{PersonID}/socialnetworkinfo/socialnetwork/{SocialNetwork}",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token);
    },
    data: '',
    success: function(msg) {
        //Print object to body for proof
        $('body').append(JSON.stringify(msg))
    }
});