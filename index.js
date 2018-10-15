        function ipgeoByApikeyFieldsAndIp(apikey="", fields="" ,ip="") {
	return request("ipgeo", apikey, fields, ip,"");
	};

	function ipgeoByApikeyAndFields(apikey="", fields="") {
	return request("ipgeo", apikey, fields, "","");
	};

	function ipgeoByApikeyAndIp(apikey="", ip="") {
	return request("ipgeo", apikey, "", ip,"");
	}
	 
        function ipgeoByApikeyAndIps(apikey="", ips="") {
	return postRequest("ipgeo-bulk", apikey, ips);
	}

	function ipgeoByApikey(apikey=""){
	return request("ipgeo", apikey, "", "","")
	}


	function timezoneByApikeyAndIp(apikey="" ,ip="") {
	return request("timezone", apikey, "", ip, "");
	}

	function timezoneByApikeyAndTz(apikey="", tz="") {
	return request("timezone", apikey, "", "",tz);
	}
        
        function timezoneByApikey(apikey="") {
	return request("timezone", apikey, "", "","");
	}

        function timezoneByApikeyLatitudeAndLongitude(apikey="", latitude="", longitude=""){
        return request("timezone", apikey, "", "","", latitude, longitude);
        }

	function request(subUrl=null, apiKey="",fields="",ip="", tz="", latitude="", longitude=""){
        var responseData;
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

      $.ajax({
	     type: "GET",
	     url: "https://api.ipgeolocation.io/"+URL+"",
             contentType: "application/json; charset=utf-8",
             dataType: "json",
	     async: false,
	     success: function (data, status, jqXHR) {
                  responseData = data;
		 return data;
	     },
	     error: function (data, jqXHR, status) {
                  responseData = data.responseText;
		 return data.responseText;
	     }
            });
        return responseData;

	}

	function postRequest(subUrl=null, apiKey="", ips=""){
	     $.ajax({
		     type: "POST",
		     url: "https://api.ipgeolocation.io/"+subUrl+"?apiKey="+apiKey+"",
		     data: JSON.stringify({"ips": ips}),// now data come in this function
		     contentType: "application/json; charset=utf-8",
		     crossDomain: true,
		     dataType: "json",
                     async: false,
		     success: function (data, status, jqXHR) {
		         responseData = data;
                         return data;
		     },
		     error: function (data, jqXHR, status) {
                         responseData = data.responseText;
                         return data.responseText;
		     }
		  });
   return responseData;

	}

