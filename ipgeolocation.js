var _ipgeolocation = function() {
    var useSessionStorage = false;
    var asyncCall = true;
    var hostname = false;
    var liveHostname = false;
    var hostnameFallbackLive = false;
    var security = false;
    var userAgent = false;
    var ipAddress = "";
    var excludes = "";
    var fields = "";
    var lang = "en";
    var tz = "";
    var latitude = "";
    var longitude = "";
    var location = "";
    var geolocationEndpoint = "ipgeo";
    var timezoneEndpoint = "timezone";
    var useragentEndpoint = "user-agent";
    var geolocationResponseName = "_ipgeolocation_geolocation";
    var timezoneResponseName = "_ipgeolocation_timezone";
    var useragentResponseName = "_ipgeolocation_useragent";

    function request(subUrl, callback, apiKey = "") {
        if (useSessionStorage) {
            if (subUrl == geolocationEndpoint && sessionStorage.getItem(geolocationResponseName) && callback) {
                callback(JSON.parse(sessionStorage.getItem(geolocationResponseName)));
                return;
            } else if (subUrl == timezoneEndpoint && sessionStorage.getItem(timezoneResponseName) && callback) {
                callback(JSON.parse(sessionStorage.getItem(timezoneResponseName)));
                return;
            } else if (subUrl == useragentEndpoint && sessionStorage.getItem(useragentResponseName) && callback) {
                callback(JSON.parse(sessionStorage.getItem(useragentResponseName)));
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
        
        if (hostname || security || userAgent) {
            var parameterValue = "";
            var hostnameSelected = false;

            if (hostname) {
                parameterValue = "hostname";
                hostnameSelected = true;
            } else if (hostnameFallbackLive) {
                parameterValue = "hostnameFallbackLive";
                hostnameSelected = true;
            } else if (liveHostname) {
                parameterValue = "liveHostname";
                hostnameSelected = true;
            }

            if (security) {
                if (hostnameSelected) {
                    parameterValue = parameterValue + ",security";
                } else {
                    parameterValue = "security";
                }
            }

            if (userAgent) {
                if (hostnameSelected || security) {
                    parameterValue = parameterValue + ",useragent";
                } else {
                    parameterValue = "useragent";
                }
            }

            urlParameters = addUrlParameter(urlParameters, "include", parameterValue);
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
        
        if (location){
            urlParameters = addUrlParameter(urlParameters, "location", location);
        }

        var httpRequest;

        if (window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }

        httpRequest.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (useSessionStorage && this.status == 200) {
                    key = geolocationResponseName;

                    if (subUrl == timezoneEndpoint) {
                        key = timezoneResponseName;
                    }

                    sessionStorage.setItem(key, this.responseText);
                }
    
                if (callback) {
                    callback(JSON.parse(this.responseText));
                }
            }
        };

        httpRequest.open("GET", "https://api.ipgeolocation.io/".concat(subUrl, urlParameters, ""), asyncCall);
        httpRequest.setRequestHeader("Accept", "application/json");
        httpRequest.send();
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
        includeHostname: function(h = false) {
            hostname = h;
        },
        includeHostnameFallbackLive: function(h = false) {
            hostnameFallbackLive = h;
        },
        includeLiveHostname: function(h = false) {
            liveHostname = h;
        },
        includeSecurity: function(s = false) {
            security = s;
        },
        includeUserAgent: function(u = false) {
            userAgent = u;
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
        setIPAddress: function(ip = "") {
            ipAddress = ip;
        },
        setTimeZone: function(t = "") {
            tz = t;
        },
        setCoordinates: function(la = "", lo = "") {
            latitude = la;
            longitude = lo;
        },
        setLocation: function(loc = "") {
            location = loc;
        },
        getGeolocation: function(callback, apiKey = "") {
            request(geolocationEndpoint, callback, apiKey);
        },
        getTimezone: function(callback, apikey = "") {
            request(timezoneEndpoint, callback, apikey);
        },
        getUserAgent: function(callback, apikey = "") {
            request(useragentEndpoint, callback, apikey);
        }
    };
}();