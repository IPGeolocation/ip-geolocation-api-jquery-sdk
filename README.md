# IP Geolocation API JQuery SDK

## Introduction

IPGeolocation API is the solution to identify country code (ISO2 and ISO3 standard), country name, continent code, continent name, country capital, state/province, district, city, zip code, latitude and longitude of city, is country belongs to Europian Union, calling code, top level domain (TLD), languages, country flag, internet service provider (ISP), connection type, organization, geoname ID, currency code, currency name, time zone ID, time zone offset, current time in the time zone, is time zone in daylight saving time, and total daylight savings. This document provides important information to help you get up to speed with IPGeolocation API using IP Geolocation API JQuery SDK.

Developers can use this JQuery SDK for software and web projects related to, but not limited to:

* Display native language and currency
* Redirect based on the country
* Digital rights management
* Web log stats and analysis
* Auto-selection of country, state/province and city on forms
* Filter access from countries you do not do business with
* Geo-targeting for increased sales and click-through

## Quick Start Guide

In this document, you will go through the basic steps to use IP Geolocation API JQuery SDK.  
You need a valid 'IPGeolocation API key' to use this SDK. [Sign up](https://ipgeolocation.io/signup) here and get your free API key if you don't have one.

## System Requirements  

Internet connection is required to run this component.

## Installation
### CDN Link

Add the following script in your HTML page:

```html
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.0.1/ipgeolocation.min.js"></script>
```

## Geolocation Lookup

There are four ways to query geolocation from IPGeolocation API. You can use the following functions to get the geolocation as you require.

```javascript
// Query geolocation for the calling machine's IP address
ipgeoByApikey('YOUR_API_KEY');

// Query only specific geolocation fields e.g., 'country_code2,time_zone,currency' for the calling machine's IP address
ipgeoByApikeyAndFields('YOUR_API_KEY', 'country_code2,time_zone,currency');

// Query geolocation for an IP address e.g., '1.1.1.1'
ipgeoByApikeyAndIp('YOUR_API_KEY', '1.1.1.1');

// Query only specific geolocation fields e.g., 'country_code2,time_zone,currency' for an IP address e.g., '1.1.1.1'
ipgeoByApikeyFieldsAndIp('YOUR_API_KEY', 'geo,time_zone,currency', '1.1.1.1');
```

## Bulk Geolocations Lookup

To query geolocation for multiple IP addresses, you can call the following function with your API key and list of IP addresses.
**Note:** This function can only be used for paid subscriptions.

```javascript
// Query geolocation for multiple IP addresses
ipgeoByApikeyAndIps('YOUR_API_KEY', ['1.1.1.1','2.2.2.2','3.3.3.3']);
```

## Time Zone API

You can also query time zone information in four different ways. You can use the following functions to get the time zone information as you require.

```javascript
// Query time zone information for the calling machine's IP address
timezoneByApikey('YOUR_API_KEY');

// Query time zone information for an IP address e.g., '1.1.1.1'
timezoneByApikeyAndIp('YOUR_API_KEY', '1.1.1.1');

// Query time zone infomration for a time zone ID like 'America/New_York'
timezoneByApikeyAndTimezone('YOUR_API_KEY', 'America/New_York');

// Query time zone information by latitude and longitude of the location
timezoneByApikeyLatitudeAndLongitude('YOUR_API_KEY', '31.4816', '74.3551')
