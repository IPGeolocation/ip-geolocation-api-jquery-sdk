# ip-geolocation-api-jQuery-sdk

## Usage
```html
<script src="https://ipgeolocation.io/sdk/jquery/index.js"></script>
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
