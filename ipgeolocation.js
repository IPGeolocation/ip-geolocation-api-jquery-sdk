var ess = false;
var asyncParameter = true;
var ipAddressParameter = "";
var excludesParameter = "";
var fieldsParameter = "";
var langParameter = "";
var tzParameter = "";
var latitudeParameter = "";
var longitudeParameter = "";

function enableSessionStorage(enable = false) {
    ess = enable;
}

function setAsync(async = true) {
    asyncParameter = async;
}

function setIPAddressParameter(ip = "") {
    ipAddressParameter = ip;
}

function setExcludesParameter(excludes = "") {
    excludesParameter = excludes;
}

function setFieldsParameter(fields = "") {
    fieldsParameter = fields;
}

function setLanguageParameter(lang = "") {
    langParameter = lang;
}

function setTimezoneParameter(tz = "") {
    tzParameter = tz;
}

function setCoordinatesParameter(latitude = "", longitude = "") {
    latitudeParameter = latitude;
    longitudeParameter = longitude;
}

function getGeolocation(callback, apiKey = "") {
    request("ipgeo", callback, apiKey);
}

function getTimezone(callback, apikey = "") {
    request("timezone", callback, apikey);
}

function addUrlParameter(parameters, parameterName, parameterValue) {
    if (parameters) {
        parameters = parameters.concat("&", parameterName, "=", parameterValue);
    } else {
        parameters = "?".concat(parameterName, "=", parameterValue);
    }
    
    return parameters;
}

function request(subUrl, callback, apiKey = "") {
    if (ess) {
        if (subUrl == "ipgeo" && sessionStorage.getItem("_ipGeolocation") && callback) {
            callback(JSON.parse(sessionStorage.getItem("_ipGeolocation")));
        } else if (subUrl == "timezone" && sessionStorage.getItem("_ipTimeZone") && callback) {
            callback(JSON.parse(sessionStorage.getItem("_ipTimeZone")));
        }
    }

    var urlParameters = "";

    if (!subUrl) {
        callback(JSON.parse("{'status': 401, message: 'Given path to IP Geolocation API is not valid'}"));
        return;
    }
    
    if (apiKey) {
        urlParameters = addUrlParameter(urlParameters, "apiKey", apiKey);
    }

    if (excludesParameter) {
        urlParameters = addUrlParameter(urlParameters, "excludes", excludesParameter);
    }
        
    if (fieldsParameter) {
        urlParameters = addUrlParameter(urlParameters, "fields", fieldsParameter);
    }

    if (ipAddressParameter) {
        urlParameters = addUrlParameter(urlParameters, "ip", ipAddressParameter);
    }

    if (langParameter) {
        urlParameters = addUrlParameter(urlParameters, "lang", langParameter);
    }
    
    if (tzParameter) {
        urlParameters = addUrlParameter(urlParameters, "tz", tzParameter);
    }
    
    if (latitudeParameter && longitudeParameter) {
        urlParameters = addUrlParameter(urlParameters, "lat", latitudeParameter);
        urlParameters = addUrlParameter(urlParameters, "long", longitudeParameter);
    }

    $.ajax ({
        async: asyncParameter,
        method: "GET",
        url: "https://api.ipgeolocation.io/".concat(subUrl, urlParameters, ""),
        contentType: "application/json",
        dataType: "json",
        success: function (result, status, xhr) {
            if (ess) {
                if (subUrl == "ipgeo") {
                    sessionStorage.setItem("_ipGeolocation", JSON.stringify(result));
                } else if (subUrl == "timezone") {
                    sessionStorage.setItem("_ipTimeZone", JSON.stringify(result));
                }
            }

            if (callback) {
                callback(result);
            }
        },
        error: function (xhr, status, error) {
            if (callback) {
                callback(JSON.parse(xhr.responseText));
            }
        }
    });
}