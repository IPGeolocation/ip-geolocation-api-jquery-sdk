# IP Geolocation API JQuery SDK

## Overview
The official **JQuery Library/SDK** for **[IPGeolocation.io](https://ipgeolocation.io)**'s set of APIs, provides a quick, developer friendly, way to access IP Location, threat intelligence, Timezone, Astronomy, ASN, Abuse Contact, and user-agent data. Lookup your own IP or provide any IPv4, IPv6 or domain name to get structured results in jquery, without the need for manual HTTP handling.

- [IP Geolocation API](https://ipgeolocation.io/ip-location-api.html): Get all-in-one unified solution for **location** (city, locality, state, country, etc.), **currency**, **network** (AS number, ASN name, organization, asn type, date of allocation, company/ISP name, company type, company domain), **timezone** , **useragent** string parsing, **security** (threat score, is_tor, is_bot, proxy_provider, cloud_provider), and **abuse contact** (route/CIDR network, country, address, email, phone numbers) information.
- [IP Security API](https://ipgeolocation.io/ip-security-api.html): Get security, network, location, hostname, timezone and useragent parsing.
- [ASN API](https://ipgeolocation.io/asn-api.html): Get ASN details along with peers, upstreams, downstreams, routes, and raw WHOIS.
- [Abuse Contact API](https://ipgeolocation.io/ip-abuse-contact-api.html): Get abuse emails, phone numbers, kind, organization, route/CIDR network and country.
- [Astronomy API](https://ipgeolocation.io/astronomy-api.html): Get sunrise, sunset, moonrise, moonset, moon phases with precise twilight period times in combination with location information.
- [Timezone API](https://ipgeolocation.io/timezone-api.html): Get timezone name, multiple time formats, daylight saving status and its details along with location information.
- [Timezone Convert API](https://ipgeolocation.io/timezone-api.html): Convert time between timezone names, geo coordinates, location addresses, IATA codes, ICAO codes, or UN/LOCODE.
- [User Agent API](https://ipgeolocation.io/user-agent-api.html): Get browser, Operating System, and device info from single or multiple Useragent string parsing.

This library aims to empower developers to integrate threat intelligence, personalization, fraud prevention, compliance, and analytics features directly into web based applications. Whether you're enriching signup forms with ip geolocation data, localizing content, embedding threat intelligence in back-end systems, or converting time zones and currencies, the library ensures seamless, scalable integration with IPGeolocation.io's global API infrastructure.

Based on:
- API version: 1.0

> [!IMPORTANT]
> We recommend using our [JavaScript SDK](https://ipgeolocation.io/documentation/ip-geolocation-api-javascript-sdk.html) instead. That is based upon API v2.0.

**Official Release:**
- Available on [![npm version](https://img.shields.io/npm/v/ip-geolocation-api-jquery-sdk?color=brightgreen)](https://www.npmjs.com/package/ip-geolocation-api-jquery-sdk)
- Source Code: [**GitHub Repository**](https://github.com/IPGeolocation/ip-geolocation-api-jquery-sdk)

## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [API Documentation Links](#api-documentations)
4. [Authentication Setup](#authentication-setup)
    - [How to Get Your API Key](#how-to-get-your-api-key)
    - [ApiKeyAuth](#apikeyauth)
5. [IP Geolocation Lookup Examples](#ip-geolocation-lookup-examples)
6. [Time Zone API Lookup Examples](#time-zone-api-lookup-examples)
7. [User Agent API Lookup Examples](#user-agent-api-lookup-examples)
8. [Practical use case](#practical-use-case)
9. [Supported Languages](#supported-languages)

## Requirements
- NPM or Yarm Package manager
- API Key from [IPGeolocation.io](https://ipgeolocation.io)


## Installation
### CDN Link
Add the following script in your HTML page:
```html
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.1.4/ipgeolocation.min.js"></script>
```

> [!NOTE] 
> This SDK is compatible with Vanilla JS and doesn't require JQuery as we have dropped the JQuery dependencies from v1.1.2 in this SDK.

## API Documentations

The documentation below corresponds to the available APIs:
- [**Overview**](https://ipgeolocation.io/documentation.html)
- [**IP GeoLocation API**](https://ipgeolocation.io/documentation/ip-location-api.html)
- [**IP Security API**](https://ipgeolocation.io/documentation/ip-security-api.html)
- [**ASN API**](https://ipgeolocation.io/documentation/asn-api.html)
- [**IP Abuse Contact API**](https://ipgeolocation.io/documentation/ip-abuse-contact-api.html)
- [**Timezone API**](https://ipgeolocation.io/documentation/timezone-api.html)
- [**User-Agent API**](https://ipgeolocation.io/documentation/user-agent-api.html)
- [**Astronomy API**](https://ipgeolocation.io/documentation/astronomy-api.html)

For a detailed comparison of what each plan offers, visit the [Pricing Page](https://ipgeolocation.io/pricing.html).

## Authentication Setup
To authenticate API requests, you'll need an API key from [ipgeolocation.io](https://ipgeolocation.io).

### How to Get Your API Key

1. **Sign up** here: [https://app.ipgeolocation.io/signup](https://app.ipgeolocation.io/signup)
2. **(optional)** Verify your email, if you signed up using email.
3. **Log in** to your account: [https://app.ipgeolocation.io/login](https://app.ipgeolocation.io/login)
4. After logging in, navigate to your **Dashboard** to find your API key: [https://app.ipgeolocation.io/dashboard](https://app.ipgeolocation.io/dashboard)

<a id="ApiKeyAuth"></a>
### ApiKeyAuth

Once you have the key, you can use it as follows:
```javascript
function handleResponse(response) {
    console.log(response);
}

_ipgeolocation.getGeolocation(handleResponse, "YOUR_API_KEY");
```

## IP Geolocation Lookup Examples

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
## Time Zone API Lookup Examples

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

## User Agent API Lookup Examples

Here are a few examples to parse the user-agent information from User Agent API.

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

## Practical use case

Here is a sample code to use IP Geolocation API using JQuery SDK:

```html
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.1.4/ipgeolocation.min.js"></script>

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
## Supported Languages
IPGeolocation provides geolocation information in the following languages:
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