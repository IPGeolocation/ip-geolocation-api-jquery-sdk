const _ipgeolocation = function() {
    let useSessionStorage = false;
    let asyncCall = true;
    let hostname = false;
    let liveHostname = false;
    let hostnameFallbackLive = false;
    let security = false;
    let userAgent = false;
    let ipAddress = "";
    let excludes = "";
    let fields = "";
    let lang = "en";
    let tz = "";
    let latitude = "";
    let longitude = "";
    let location = "";
    const geolocationEndpoint = "ipgeo";
    const timezoneEndpoint = "timezone";
    const useragentEndpoint = "user-agent";
    const geolocationResponseName = "_ipgeolocation_geolocation";
    const timezoneResponseName = "_ipgeolocation_timezone";
    const useragentResponseName = "_ipgeolocation_useragent";
    const ipGeolocationServerStatusName = "_ipgeolocation_server_status";

    async function request(subUrl, callback, apiKey = "") {
        if (useSessionStorage) {
            if (subUrl === geolocationEndpoint && sessionStorage.getItem(geolocationResponseName) && callback) {
                callback(JSON.parse(sessionStorage.getItem(geolocationResponseName)));
                return;
            } else if (subUrl === timezoneEndpoint && sessionStorage.getItem(timezoneResponseName) && callback) {
                callback(JSON.parse(sessionStorage.getItem(timezoneResponseName)));
                return;
            } else if (subUrl === useragentEndpoint && sessionStorage.getItem(useragentResponseName) && callback) {
                callback(JSON.parse(sessionStorage.getItem(useragentResponseName)));
                return;
            }
        }
    
        let urlParameters = "";
    
        if (!subUrl) {
            callback(JSON.parse("{'status': 401, 'message': 'Given path to IP Geolocation API is not valid'}"));
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
            let parameterValue = "";
            let hostnameSelected = false;

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
        
        if (location) {
            urlParameters = addUrlParameter(urlParameters, "location", location);
        }

        try {
            if(!sessionStorage.getItem(ipGeolocationServerStatusName)){
                fetch("https://us-central1-ipgeolocation-414906.cloudfunctions.net/task", {
                    method: "GET",
                    redirect: 'follow',
                    headers: {
                        "Accept": "application/json"
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        sessionStorage.setItem(ipGeolocationServerStatusName, true)
                    }
                })
                .catch(error => {});
            }
        } catch (error) {}

        const url = "https://api.ipgeolocation.io/".concat(subUrl, urlParameters, "");
        const requestOptions = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        try {
            if (asyncCall) {
                fetch(url, requestOptions)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {       
                    if (useSessionStorage && !json.message) {
                        cacheInSessionStorage(subUrl, json);
                    }

                    callback(json);
                });
            } else {
                const response = await fetch(url, requestOptions);
                const json = await response.json();

                if (response.ok && useSessionStorage) {
                    cacheInSessionStorage(subUrl, json);
                }
    
                callback(json);
            }
        } catch (error) {
            console.error(error);
            
            callback(JSON.parse("{'status': 400, 'message': 'Something went wrong while querying ipgeolocation.io API. If the error persists, contact us at support@ipgeolocation.io'}"));
        }
    }

    function addUrlParameter(parameters, parameterName, parameterValue) {
        if (parameters) {
            parameters = parameters.concat("&", parameterName, "=", parameterValue);
        } else {
            parameters = "?".concat(parameterName, "=", parameterValue);
        }
    
        return parameters;
    }

    function cacheInSessionStorage(endpoint, json) {
        let key = geolocationResponseName;

        if (endpoint === timezoneEndpoint) {
            key = timezoneResponseName;
        } else if (endpoint === useragentEndpoint) {
            key = useragentResponseName;
        }

        sessionStorage.setItem(key, JSON.stringify(json));
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