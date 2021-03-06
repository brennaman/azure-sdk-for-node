// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadla7204/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4833?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name belongs to another resource.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '76f1aaba-f1fb-4fc9-ac8c-c058be9e5c34',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '0b4cd376-c112-4460-a7f7-d547ab978149',
  'x-ms-routing-request-id': 'CENTRALUS:20170323T204932Z:0b4cd376-c112-4460-a7f7-d547ab978149',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:49:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadla7204/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4833?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name belongs to another resource.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '76f1aaba-f1fb-4fc9-ac8c-c058be9e5c34',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '0b4cd376-c112-4460-a7f7-d547ab978149',
  'x-ms-routing-request-id': 'CENTRALUS:20170323T204932Z:0b4cd376-c112-4460-a7f7-d547ab978149',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:49:31 GMT',
  connection: 'close' });
 return result; }]];