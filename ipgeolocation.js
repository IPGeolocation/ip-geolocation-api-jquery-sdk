        function geolocation(callback) {
	request("ipgeo", "", "", "", "", "", "", callback)
	} 

        function geolocationByAPIkey(apikey="",callback) {
        request("ipgeo", apikey, "", "", "", "", "", callback)
	}        
        
        function geolocationByIP(ip="",callback) {
	request("ipgeo", "", "", ip, "", "", "", callback)
	}

        function geolocationByAPIkeyAndIP(apikey="", ip="", callback) {
        request("ipgeo", apikey, "", ip, "", "", "", callback)
	}

        function geolocationByFieldsAndIP(fields="", ip="", callback) {
        request("ipgeo", "", fields, ip, "", "", "", callback)
	}	

        function geolocationByAPIkeyFieldsAndIp(apikey="", fields="", ip="", callback) {
	request("ipgeo", apikey, fields, ip, "", "", "", callback)
	}

	function geolocationByFields(fields="", callback) {
	request("ipgeo", "", fields, "", "", "", "", callback)
	}

	function geolocationByAPIkeyAndFields(apikey="", fields="", callback) {
	request("ipgeo", apikey, fields, "", "", "", "", callback)
	}

	function timezoneByIP(ip="", callback) {
	request("timezone", "", "", ip, "", "", "", callback)
	}

	function timezoneByAPIKeyAndIP(apikey="", ip="", callback) {
	request("timezone", apikey, "", ip, "", "", "", callback)
	}

        function timezoneByTz(tz="", callback) {
	request("timezone", "", "", "", tz, "", "", callback)
	}

	function timezoneByAPIKeyAndTz(apikey="", tz="", callback) {
	request("timezone", apikey, "", "", tz, "", "", callback)
	}
        
        function timezone(callback) {
	request("timezone", "", "", "", "", "", "", callback)
	}

        function timezoneByAPIKey(apikey="", callback) {
	request("timezone", apikey, "", "", "", "", "", callback)
	}

        function timezoneByLatitudeAndLongitude(latitude="", longitude="", callback){
	request("timezone", "", "", "", "", latitude, logitude, callback)
        }

        function timezoneByAPIKeyLatitudeAndLongitude(apikey="", latitude="", longitude="", callback){
	request("timezone", apikey, "", "", "", latitude, logitude, callback)
        }




	function request(subUrl=null, apiKey="",fields="",ip="", tz="", latitude="", longitude="", callback){
	var URL = "";
	if(apiKey){
	URL = subUrl;
	URL = URL + ("?apiKey=" + apiKey);
	if(fields){
	URL = URL + "&fields=";
	URL = URL + fields;
	}
	if(ip){
	URL = URL + "&ip=";
	URL = URL + ip;
	}
        if(tz){
	URL = URL + "&tz=";
	URL = URL + tz;
	}
        if(latitude){
        URL = URL + "&lat=";
	URL = URL + latitude;
        }
        if(longitude){
        URL = URL + "&long=";
	URL = URL + longitude;
        }

	}

	$.ajax(
        {
           async: true,
	  method: "GET",
	  url: "https://api.ipgeolocation.io/"+URL+"",
	  contentType: "application/json; charset=utf-8",
	  dataType: "json",
	  success: function (data, status, jqXHR) {
          if(callback) {
           callback(data);
           }
	  },
	  error: function (data, jqXHR, status) {
          if(callback) {
           callback(data.responseText);
           }
	  }
	 } );
    
	}
