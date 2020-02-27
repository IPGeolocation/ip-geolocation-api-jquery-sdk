var _ipgeolocation = function() {
    var useSessionStorage = false;
    var asyncCall = true;
    var ipAddress = "";
    var excludes = "";
    var fields = "";
    var lang = "en";
    var tz = "";
    var latitude = "";
    var longitude = "";

    function request(subUrl, callback, apiKey = "") {
        if (useSessionStorage) {
            if (subUrl == "ipgeo" && sessionStorage.getItem("_ipGeolocation") && callback) {
                callback(JSON.parse(sessionStorage.getItem("_ipGeolocation")));
                return;
            } else if (subUrl == "timezone" && sessionStorage.getItem("_ipTimeZone") && callback) {
                callback(JSON.parse(sessionStorage.getItem("_ipTimeZone")));
                return;
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
    
        if (ipAddress) {
            urlParameters = addUrlParameter(urlParameters, "ip", ipAddress);
        }
            
        if (fields) {
            urlParameters = addUrlParameter(urlParameters, "fields", fields);
        }
    
        if (excludes) {
            urlParameters = addUrlParameter(urlParameters, "excludes", excludes);
        }
    
        if (lang) {
            urlParameters = addUrlParameter(urlParameters, "lang", lang);
        }
        
        if (tz) {
            urlParameters = addUrlParameter(urlParameters, "tz", tz);
        }
        
        if (latitude && longitude) {
            urlParameters = addUrlParameter(urlParameters, "lat", latitude);
            urlParameters = addUrlParameter(urlParameters, "long", longitude);
        }
    
        $.ajax ({
            async: asyncCall,
            method: "GET",
            url: "https://api.ipgeolocation.io/".concat(subUrl, urlParameters, ""),
            contentType: "application/json",
            dataType: "json",
            success: function (result, status, xhr) {
                if (useSessionStorage) {
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

    function addUrlParameter(parameters, parameterName, parameterValue) {
        if (parameters) {
            parameters = parameters.concat("&", parameterName, "=", parameterValue);
        } else {
            parameters = "?".concat(parameterName, "=", parameterValue);
        }
    
        return parameters;
    }

    return {
        enableSessionStorage: function(e = false) {
            useSessionStorage = e;
        },
        makeAsyncCallsToAPI: function(a = true) {
            asyncCall = a;
        },
        setIPAddress: function(ip = "") {
            ipAddress = ip;
        },
        setFields: function(f = "") {
            fields = f;
        },
        setExcludes: function(e = "") {
            excludes = e;
        },
        setLanguage: function(l = "en") {
            lang = l;
        },
        setTimeZone: function(t = "") {
            tz = t;
        },
        setCoordinates: function(latitude = "", longitude = "") {
            latitudeParameter = latitude;
            longitudeParameter = longitude;
        },
        getGeolocation: function(callback, apiKey = "") {
            request("ipgeo", callback, apiKey);
        },
        getTimezone: function(callback, apikey = "") {
            request("timezone", callback, apikey);
        }
    }
}();