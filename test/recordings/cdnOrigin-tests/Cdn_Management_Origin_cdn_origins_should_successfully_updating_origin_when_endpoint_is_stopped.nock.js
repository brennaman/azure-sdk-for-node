// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '06adb0b3-baaa-4e5f-9df6-ca770f7902cd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .post('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/stop?api-version=2016-04-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint4770.azureedge-test.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '474',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/379a9d44-2944-4786-90f0-ed63dea816d8/profileresults/cdnTestProfile4205/endpointresults/cdnTestEndpoint4770?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': 'd3cff30d-48e7-41c9-b63b-f6060bf4681c',
  'x-ms-client-request-id': '31cceca7-aab4-4ea3-83fb-b916fdb14432',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/379a9d44-2944-4786-90f0-ed63dea816d8?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1166',
  'x-ms-correlation-request-id': '770d7c38-3572-4c1f-8ecb-baea9243f6cd',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230857Z:770d7c38-3572-4c1f-8ecb-baea9243f6cd',
  date: 'Mon, 25 Apr 2016 23:08:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .post('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/stop?api-version=2016-04-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint4770.azureedge-test.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '474',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/379a9d44-2944-4786-90f0-ed63dea816d8/profileresults/cdnTestProfile4205/endpointresults/cdnTestEndpoint4770?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': 'd3cff30d-48e7-41c9-b63b-f6060bf4681c',
  'x-ms-client-request-id': '31cceca7-aab4-4ea3-83fb-b916fdb14432',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/379a9d44-2944-4786-90f0-ed63dea816d8?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1166',
  'x-ms-correlation-request-id': '770d7c38-3572-4c1f-8ecb-baea9243f6cd',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230857Z:770d7c38-3572-4c1f-8ecb-baea9243f6cd',
  date: 'Mon, 25 Apr 2016 23:08:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/379a9d44-2944-4786-90f0-ed63dea816d8?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '4fafe793-73ae-4c77-a16b-de7ed898b6e3',
  'x-ms-client-request-id': '04388778-2b52-4929-8872-a42ca370f221',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14810',
  'x-ms-correlation-request-id': '3c8945cb-eba5-47fb-a95b-ef9fd19ae17b',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230928Z:3c8945cb-eba5-47fb-a95b-ef9fd19ae17b',
  date: 'Mon, 25 Apr 2016 23:09:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/379a9d44-2944-4786-90f0-ed63dea816d8?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '4fafe793-73ae-4c77-a16b-de7ed898b6e3',
  'x-ms-client-request-id': '04388778-2b52-4929-8872-a42ca370f221',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14810',
  'x-ms-correlation-request-id': '3c8945cb-eba5-47fb-a95b-ef9fd19ae17b',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230928Z:3c8945cb-eba5-47fb-a95b-ef9fd19ae17b',
  date: 'Mon, 25 Apr 2016 23:09:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'bec1d6aa-33ae-40d1-9d3c-9d167e15e3f4',
  'x-ms-client-request-id': '37a3b353-6a59-4fdf-a673-bbe644114696',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1165',
  'x-ms-correlation-request-id': 'bb31f54a-340d-43c1-a6f4-947665c5a6cd',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230929Z:bb31f54a-340d-43c1-a6f4-947665c5a6cd',
  date: 'Mon, 25 Apr 2016 23:09:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'bec1d6aa-33ae-40d1-9d3c-9d167e15e3f4',
  'x-ms-client-request-id': '37a3b353-6a59-4fdf-a673-bbe644114696',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1165',
  'x-ms-correlation-request-id': 'bb31f54a-340d-43c1-a6f4-947665c5a6cd',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230929Z:bb31f54a-340d-43c1-a6f4-947665c5a6cd',
  date: 'Mon, 25 Apr 2016 23:09:29 GMT',
  connection: 'close' });
 return result; }]];