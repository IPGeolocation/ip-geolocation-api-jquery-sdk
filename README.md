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
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.0.4/ipgeolocation.min.js"></script>
```

## Geolocation Lookup

There are four ways to query geolocation from IPGeolocation API. You can use the following functions to get the geolocation as you require.

```javascript
// Query geolocation for the calling machine's IP address
// Without API key
geolocation(geoResponse)
// with API key
geolocationByAPIkey('YOUR_API_KEY', geoResponse)

// Query geolocation for an IP address e.g., '1.1.1.1'
// Without API key
geolocationByIP('1.1.1.1', geoResponse)
// With API key
geolocationByAPIkeyAndIP('YOUR_API_KEY', '1.1.1.1', geoResponse)

// Query only specific geolocation fields e.g., 'country_code2,time_zone,currency' for the calling machine's IP address
// Without API key
geolocationByFields('geo,time_zone,currency', geoResponse)
// With API key
geolocationByAPIkeyAndFields('YOUR_API_KEY', 'geo,time_zone,currency', geoResponse)

// Query only specific geolocation fields e.g., 'country_code2,time_zone,currency' for an IP address e.g., '1.1.1.1'
// Without API key
geolocationByFieldsAndIP('geo,time_zone,currency', '1.1.1.1', geoResponse)
// With API key
geolocationByAPIkeyFieldsAndIp('YOUR_API_KEY', 'geo,time_zone,currency', '1.1.1.1', geoResponse)
```
## Time Zone API

You can also query time zone information in four different ways. You can use the following functions to get the time zone information as you require.

```javascript
// Query time zone information for the calling machine's IP address
// Without API key
timezone(timezoneResponse)
// With API key
timezoneByAPIKey('YOUR_API_KEY', timezoneResponse)

// Query time zone information for an IP address e.g., '1.1.1.1'
// Without API key
timezoneByIP('1.1.1.1', timezoneResponse)
// With API key
timezoneByAPIKeyAndIP('YOUR_API_KEY', '1.1.1.1', timezoneResponse)

// Query time zone infomration for a time zone ID like 'America/New_York'
// Without API key
timezoneByTz('America/Los_Angeles', timezoneResponse)
// with API key
timezoneByAPIKeyAndTz('YOUR_API_KEY', 'America/Los_Angeles', timezoneResponse)

// Query time zone information by latitude and longitude of the location
// Without API key
timezoneByLatitudeAndLongitude( '31.4816', '74.3551', timezoneResponse)
// With API key
timezoneByAPIKeyLatitudeAndLongitude('YOUR_API_KEY', '31.4816', '74.3551', timezoneResponse)
```

## Example

Here is a sample code to use IP Geolocation API using JQuery SDK:

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.0.4/ipgeolocation.min.js"></script>

<script>
    var ip = sessionStorage.getItem('ip');
    var country_name = sessionStorage.getItem('country_name');
    var country_code2 = sessionStorage.getItem('country_code2');
            
    if (!ip || !country_name || !country_code2) {
        var json = geolocationByFields('country_name,country_code2', geoResponse);
        ip = json.ip;
        country_name = json.country_name;
        country_code2 = json.country_code2;
                
        sessionStorage.setItem('ip', ip);
        sessionStorage.setItem('country_name', country_name);
        sessionStorage.setItem('country_code2', country_code2);
    }
                
    $(document).ready(function() {
        alert('Hello ' + country_name + '!');
    });
    
    function geoResponse(data){
    console.log(data);
    }
</script>
```
