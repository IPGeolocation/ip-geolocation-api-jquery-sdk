# IP Geolocation API JQuery SDK

## Introduction

[IPGeolocation API](https://ipgeolocation.io) is the solution to identify country code (ISO2 and ISO3 standard), country name, continent code, continent name, country capital, state/province, district, city, zip code, latitude and longitude of city, is country belongs to Europian Union, calling code, top level domain (TLD), languages, country flag, internet service provider (ISP), connection type, organization, geoname ID, currency code, currency name, time zone ID, time zone offset, current time in the time zone, is time zone in daylight saving time, and total daylight savings. This document provides important information to help you get up to speed with IPGeolocation API using IP Geolocation API JQuery SDK.

**Note:** This SDK is compatible with Vanilla JS and doesn't require JQuery as we have dropped the JQuery dependencies from v1.1.2 in this SDK.

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

**Note:** Complete documentation to use this SDK is also available at [IP Geolocation API JQuery SDK Documentation](https://ipgeolocation.io/documentation/ip-geolocation-api-jquery-sdk.html).

## System Requirements  

Internet connection is required to run this component.

## Documentation
Use the following URL to visit documentation
[https://ipgeolocation.io/documentation.html](https://ipgeolocation.io/documentation.html)

## Installation
### CDN Link

Add the following script in your HTML page:

```html
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.1.3/ipgeolocation.min.js"></script>
```

## Geolocation Lookup

You can use this SDK without an API key if you're using the _Request Origin_ feaure on IP Geolocation API.  
Here are a few different ways of querying Geolocation for an IP address from IP Geolocation API.

```javascript
// Function to handle the response from IP Geolocation API.
// "response" is a JSON object returned from IP Geolocation API.
function handleResponse(response) {
    console.log(response);
}

// Get geolocation for the calling machine's IP address with an API key (optional, if you're using "Request Origin" feature at IP Geolocation API)
_ipgeolocation.getGeolocation(handleResponse, "YOUR_API_KEY");

// Don't pass the API key if you're using the "Request Origin" feature at IP Geolocation API
_ipgeolocation.getGeolocation(handleResponse);

// Toggle sessionStorage usage to store API response on client-side. (This is very handy as it will help users to avoid making duplicate API calls for a single visitor.)
_ipgeolocation.enableSessionStorage(true);

// Toggle API calls' async behavior. By default, async is true.
_ipgeolocation.makeAsyncCallsToAPI(false);

// Get geolocation for an IP address "1.1.1.1"
_ipgeolocation.setIPAddress("1.1.1.1");
_ipgeolocation.getGeolocation(handleResponse, "YOUR_API_KEY");

// Get geolocation for an IP address "1.1.1.1" in Russian language **
_ipgeolocation.setLanguage("ru");
_ipgeolocation.setIPAddress("1.1.1.1");
_ipgeolocation.getGeolocation(handleResponse, "YOUR_API_KEY");

// Get the specific geolocation fields "country_code2,time_zone,currency" for the calling machine's IP address
_ipgeolocation.setFields("geo,time_zone,currency");
_ipgeolocation.getGeolocation(handleResponse, "YOUR_API_KEY");

// Get the specified geolocaiton fields like "country_code2,time_zone,currency" for an IP address "1.1.1.1" and skip the "ip" field in the response
_ipgeolocation.setFields("geo,time_zone,currency");
_ipgeolocation.setIPAddress("1.1.1.1");
_ipgeolocation.setExcludes("country_code2");
_ipgeolocation.getGeolocation(handleResponse, "YOUR_API_KEY");

// Get geolocation along with hostname, security detail and user-agent detail.
_ipgeolocation.includeHostname(true);
_ipgeolocation.includeSecurity(true);
_ipgeolocation.includeUserAgent(true);
_ipgeolocation.getGeolocation(handleResponse, "YOUR_API_KEY");
```
## Time Zone API

Here are a few examples to query Time Zone information from Timezone API.

```javascript
// Function to handle the response from IP Geolocation API.
// "response" is a JSON object returned from IP Geolocation API.
function handleResponse(response) {
    console.log(response);
}

// Get time zone information for the calling machine's IP address with an API key (optional, if you're using "Request Origin" feature at IP Geolocation API)
_ipgeolocation.getTimezone(handleResponse, "YOUR_API_KEY");

// Don't pass the API key if you're using the "Request Origin" feature at IP Geolocation API
_ipgeolocation.getTimezone(handleResponse);

// Toggle sessionStorage usage to store API response on client-side. (This is very handy as it will help users to avoid making duplicate API calls for a single visitor.)
_ipgeolocation.enableSessionStorage(true);

// Toggle API calls' async behavior. By default, async is true.
_ipgeolocation.makeAsyncCallsToAPI(false);

// Get time zone information for an IP address "1.1.1.1" and geolocation information in Italian language **
_ipgeolocation.setIPAddress("1.1.1.1");
_ipgeolocation.setLanguage("it");
_ipgeolocation.getTimezone(handleResponse, "YOUR_API_KEY");

// Get time zone infomration for a time zone "America/New_York"
_ipgeolocation.setTimeZone("America/Los_Angeles");
_ipgeolocation.getTimezone(handleResponse, "YOUR_API_KEY");

// Get time zone information by coordinates of the location
_ipgeolocation.setCoordinates("31.4816", "74.3551");
_ipgeolocation.getTimezone(handleResponse, "YOUR_API_KEY");

// Get time zone information by location
_ipgeolocation.setLocation("Amman, Jordan");
_ipgeolocation.getTimezone(handleResponse, "YOUR_API_KEY");
```

## Time Zone API

Here are a few examples to query Time Zone information from Timezone API.

```javascript
// Function to handle the response from IP Geolocation API.
// "response" is a JSON object returned from IP Geolocation API.
function handleResponse(response) {
    console.log(response);
}

// Toggle sessionStorage usage to store API response on client-side. (This is very handy as it will help users to avoid making duplicate API calls for a single visitor.)
_ipgeolocation.enableSessionStorage(true);

// Toggle API calls' async behavior. By default, async is true.
_ipgeolocation.makeAsyncCallsToAPI(false);

// Get User Agent detail.
_ipgeolocation.getUserAgent(handleResponse, "YOUR_API_KEY");
```

## Example

Here is a sample code to use IP Geolocation API using JQuery SDK:

```javascript
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.1.3/ipgeolocation.min.js"></script>

<script>
    // On call to IPGeolocation API on each page during a user's visit, API response will be served from sessionStorage after the first page.
    _ipgeolocation.enableSessionStorage(true);

    let ip = sessionStorage.getItem("ip");
    let country_name = sessionStorage.getItem("country_name");
    let country_code2 = sessionStorage.getItem("country_code2");
            
    if (!ip || !country_name || !country_code2) {
        _ipgeolocation.makeAsyncCallsToAPI(false);
        _ipgeolocation.setFields("country_name,country_code2");
        _ipgeolocation.getGeolocation(handleResponse, "YOUR_API_KEY");
    }

    function handleResponse(json) {
        ip = json.ip;
        country_name = json.country_name;
        country_code2 = json.country_code2;
    }
                
    $(document).ready(function() {
        alert("Hello " + country_name + "!");
    });
</script>
```

** IPGeolocation provides geolocation information in the following languages:
* English (en)
* German (de)
* Russian (ru)
* Japanese (ja)
* French (fr)
* Chinese Simplified (cn)
* Spanish (es)
* Czech (cs)
* Italian (it)

By default, geolocation information is returned into English. Response in a language other than English is available to paid users only.