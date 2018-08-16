# IPGeolocation API JQuery SDK

## Basic Usage
Add the following script in your page:
```html
<script src="https://cdn.jsdelivr.net/npm/ip-geolocation-api-jquery-sdk@1.0.0/ipgeolocation.min.js"></script>
```
## Geolocation Lookup
```html
ipgeoByApikey('YOUR_API_KEY')
ipgeoByApikeyAndIp('YOUR_API_KEY', '1.1.1.1')
ipgeoByApikeyAndFields('YOUR_API_KEY', 'geo,time_zone,currency')
ipgeoByApikeyFieldsAndIp('YOUR_API_KEY', 'geo,time_zone,currency', '1.1.1.1')
```
## Bulk Geolocations Lookup
```html
ipgeoByApikeyAndIps('YOUR_API_KEY', ['1.1.1.1','2.2.22.2','34.1.1.3'])
```
## Time Zone API
```html
timezoneByApikey('YOUR_API_KEY')
timezoneByApikeyAndIp('YOUR_API_KEY', '1.1.1.1')
timezoneByApikeyAndTimezone('YOUR_API_KEY', 'America/Los_Angeles')

// Query time zone information by latitude and longitude of the location
timezoneByApikeyLatitudeAndLongitude('YOUR_API_KEY', '31.4816', '74.3551')
```
