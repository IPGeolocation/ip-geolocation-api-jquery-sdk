# IP Geolocation API JQuery SDK

## Introduction

[IPGeolocation API](https://ipgeolocation.io) is the solution to identify country code (ISO2 and ISO3 standard), country name, continent code, continent name, country capital, state/province, district, city, zip code, latitude and longitude of city, is country belongs to Europian Union, calling code, top level domain (TLD), languages, country flag, internet service provider (ISP), connection type, organization, geoname ID, currency code, currency name, time zone ID, time zone offset, current time in the time zone, is time zone in daylight saving time, and total daylight savings. This document provides important information to help you get up to speed with IPGeolocation API using IP Geolocation API JQuery SDK.

Developers can use this JQuery SDK for software and web projects related to, but not limited to:

1. Display native language and currency
2. Redirect based on the country
3. Digital rights management
4. Web log stats and analysis
5. Auto-selection of country, state/province and city on forms
6. Filter access from countries you do not do business with
7. Geo-targeting for increased sales and click-through

## Quick Start Guide

You need a valid 'IPGeolocation API key' to use this SDK. [Sign up](https://ipgeolocation.io/signup) here and get your free API key if you don't have one.

**Note:** Complete documentation to use this SDK is also available at [IP Geolocation API JQuery SDK Documentation](https://ipgeolocation.io/documentation/ip-geolocation-api-jquery-sdk-201809051507).

## System Requirements  

Internet connection is required to run this component.

## Installation
### CDN Link

Add the following script in your HTML page:

```html
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.0.5/ipgeolocation.min.js"></script>
```

## Geolocation Lookup

You can use this SDK without an API key if you're using the _Request Origin_ feaure on IP Geolocation API.  
Here are a few different ways of querying Geolocation for an IP address from IP Geolocation API.

```javascript
// Function to handle the response from IP Geolocation API.
// **response** is a JSON object returned from IP Geolocation API.
function handleResponse(response) {
    console.log(response);
}

// Query geolocation for the calling machine's IP address with an API key (optional, if you're using _Request Origin_ feature at IP Geolocation API)
getGeolocation(handleResponse, "YOUR_API_KEY");

// To use the _Request Origin_ feature at IP Geolocation API, you skip the API key parameter.
getGeolocation(handleResponse);

// Query geolocation for an IP address e.g., '1.1.1.1'
setIPAddressParameter("1.1.1.1");
getGeolocation(handleResponse, "YOUR_API_KEY");

// Query only specific geolocation fields e.g., 'country_code2,time_zone,currency' for the calling machine's IP address
setFieldsParameter("geo,time_zone,currency");
getGeolocation(handleResponse, "YOUR_API_KEY");

// Query only specific fields like 'country_code2,time_zone,currency' for an IP address like '1.1.1.1' and skip the 'ip' field in the response
setFieldsParameter("geo,time_zone,currency");
setIPAddressParameter("1.1.1.1");
setExcludesParameter("ip");
getGeolocation(handleResponse, "YOUR_API_KEY");
```
## Time Zone API

Here are a few different ways of querying Time Zone information from IP Geolocation API.

```javascript
// Function to handle the response from IP Geolocation API.
// **response** is a JSON object returned from IP Geolocation API.
function handleResponse(response) {
    console.log(response);
}

// Query time zone information for the calling machine's IP address with an API key (optional, if you're using _Request Origin_ feature at IP Geolocation API)
getTimezone(handleResponse, "YOUR_API_KEY");

// To use the _Request Origin_ feature at IP Geolocation API, you skip the API key parameter.
getTimezone(handleResponse);

// Query time zone information for an IP address e.g., '1.1.1.1'
setIPAddressParameter("1.1.1.1");
getTimezone(handleResponse, "YOUR_API_KEY");

// Query time zone infomration for a time zone ID like 'America/New_York'
setTimezoneParameter("America/Los_Angeles");
getTimezone(handleResponse, "YOUR_API_KEY");

// Query time zone information by latitude and longitude of the location
setCoordinatesParameter("31.4816", "74.3551");
getTimezone(handleResponse, "YOUR_API_KEY");
```

## Example

Here is a sample code to use IP Geolocation API using JQuery SDK:

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.0.5/ipgeolocation.min.js"></script>

<script>
    var ip = sessionStorage.getItem("ip");
    var country_name = sessionStorage.getItem("country_name");
    var country_code2 = sessionStorage.getItem("country_code2");
            
    if (!ip || !country_name || !country_code2) {
        setAsync(false);
        setFieldsParameter("country_name,country_code2");
        getGeolocation(handleGeolocationResponse, "YOUR_API_KEY");
    }

    function handleGeolocationResponse(json) {
        ip = json.ip;
        country_name = json.country_name;
        country_code2 = json.country_code2;

        sessionStorage.setItem("ip", ip);
        sessionStorage.setItem("country_name", country_name);
        sessionStorage.setItem("country_code2", country_code2);
    }
                
    $(document).ready(function() {
        alert("Hello " + country_name + "!");
    });
</script>
```
