// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '06adb0b3-baaa-4e5f-9df6-ca770f7902cd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'da02f6c4-2a78-43f2-b0b6-d3ef96439066',
  'x-ms-client-request-id': '97dde1d4-fb94-4c36-8a84-2214f17b92cb',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14823',
  'x-ms-correlation-request-id': '0ba9b0e6-e860-4c2c-8fd8-3fcdbb936959',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184813Z:0ba9b0e6-e860-4c2c-8fd8-3fcdbb936959',
  date: 'Wed, 27 Apr 2016 18:48:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'da02f6c4-2a78-43f2-b0b6-d3ef96439066',
  'x-ms-client-request-id': '97dde1d4-fb94-4c36-8a84-2214f17b92cb',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14823',
  'x-ms-correlation-request-id': '0ba9b0e6-e860-4c2c-8fd8-3fcdbb936959',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184813Z:0ba9b0e6-e860-4c2c-8fd8-3fcdbb936959',
  date: 'Wed, 27 Apr 2016 18:48:13 GMT',
  connection: 'close' });
 return result; }]];