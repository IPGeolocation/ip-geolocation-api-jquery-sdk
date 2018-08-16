# ip-geolocation-api-jQuery-sdk

## Usage
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
timezoneByApikeyAndTz('YOUR_API_KEY', 'Asia/Karachi')
```
