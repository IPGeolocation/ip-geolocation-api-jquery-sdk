var ipAddressParameter = "";
var excludesParameter = "";
var fieldsParameter = "";
var langParameter = "";
var tzParameter = "";
var latitudeParameter = "";
var longitudeParameter = "";

function setIPAddressParameter (ip = "") {
    ipAddressParameter = ip;
}

function setExcludesParameter (excludes = "") {
    excludesParameter = excludes;
}

function setFieldsParameter (fields = "") {
    fieldsParameter = fields;
}

function setLanguageParameter (lang = "") {
    langParameter = lang;
}

function setTimezoneParameter (tz = "") {
    tzParameter = tz;
}

function setCoordinatesParameter (latitude = "", longitude = "") {
    latitudeParameter = latitude;
    longitudeParameter = longitude;
}

function getGeolocation (apiKey = "", callback) {
    request("ipgeo", apiKey, callback)
}

function getTimezone (apikey = "", callback) {
    request("timezone", apikey, callback)
}

function request (subUrl = null, apiKey = "", callback) {
    var url = "";
    
    if (apiKey) {
        url = subUrl + "?apiKey=" + apiKey;
    } else {
        if (callback) {
            callback({"status": 401, "message": "You cannot use IP Geolocation API without an API Key"});
        }
        return;
    }

    if (excludesParameter) {
        url = url + "&excludes=" + excludesParameter;
    }
        
    if (fieldsParameter) {
        url = url + "&fields=" + fieldsParameter;
    }

    if (ipAddressParameter) {
        url = url + "&ip=" + ipAddressParameter;
    }

    if (langParameter) {
        url = url + "&lang=" + langParameter;
    }
    
    if (tzParameter) {
        url = url + "&tz=" + tzParameter;
    }
    
    if (latitudeParameter && longitudeParameter) {
        url = url + "&lat=" + latitudeParameter + "&long=" + longitudeParameter;
    }

    $.ajax ({
        async: true,
        method: "GET",
        url: "https://api.ipgeolocation.io/" + url + "",
        contentType: "application/json",
        dataType: "json",
        success: function (data, status, jqXHR) {
            if (callback) {
                callback(data);
            }
        },
        error: function (data, jqXHR, status) {
            if (callback) {
                callback(data.responseText);
            }
        }
    });
}
