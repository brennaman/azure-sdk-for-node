//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

var exports = module.exports;

/**
 * Table client exports.
 * @ignore
 */

var storage = require('azure-storage');

var TableService = storage.TableService;
exports.TableService = TableService;
exports.TableUtilities = storage.TableUtilities;
exports.TableQuery = storage.TableQuery;
exports.TableBatch = storage.TableBatch;

/**
 * Creates a new {@link TableService} object.
 * If no storageaccount or storageaccesskey are provided, the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables will be used.
 *
 * @method
 * @param {string} [storageAccountOrConnectionString]  The storage account or the connection string.
 * @param {string} [storageAccessKey]                  The storage access key.
 * @param {string} [host]                              The host address.
 * @param {object} [authenticationProvider]            The authentication provider.
 * @return {TableService}                              A new TableService object.
 * @tutorial getting-started
 *
 */
exports.createTableService = function (storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider) {
  return new TableService(storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider);
};

/**
 * Blob client exports.
 * @ignore
 */

var BlobService = storage.BlobService;
exports.BlobService = BlobService;

/**
 * Creates a new {@link BlobService} object.
 * If no storageaccount or storageaccesskey are provided, the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables will be used.
 *
 * @method
 * @param {string} [storageAccountOrConnectionString]  The storage account or the connection string.
 * @param {string} [storageAccessKey]                  The storage access key.
 * @param {string} [host]                              The host address.
 * @param {object} [authenticationProvider]            The authentication provider.
 * @return {BlobService}                               A new BlobService object.
 */
exports.createBlobService = function (storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider) {
  return new BlobService(storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider);
};

/**
 * Queue client exports.
 * @ignore
 */
var QueueService = storage.QueueService;
exports.QueueService = QueueService;

/**
 * Creates a new {@link QueueService} object.
 * If no storageAccount or storageAccessKey are provided, the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY
 * environment variables will be used.
 *
 * @method
 * @param {string} [storageAccountOrConnectionString]  The storage account or the connection string.
 * @param {string} [storageAccessKey]                  The storage access key.
 * @param {string} [host]                              The host address.
 * @param {object} [authenticationProvider]            The authentication provider.
 * @return {QueueService}                              A new QueueService object.
 */
exports.createQueueService = function (storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider) {
  return new QueueService(storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider);
};

/**
 * Service Bus client exports.
 * @ignore
 */
var azureSb = require('azure-sb');
var ServiceBusService = azureSb.ServiceBusService;
exports.ServiceBusService = ServiceBusService;

/**
 * Creates a new {@link ServiceBusService} object.
 *
 * @method
 * @param {string} [configOrNamespaceOrConnectionString]  The service bus namespace or other config information.
 * @param {string} [accessKey]                    The password.
 * @param {string} [issuer]                       The issuer.
 * @param {string} [acsNamespace]                 The acs namespace. Usually the same as the sb namespace with "-sb" suffix.
 * @param {string} [host]                         The host address.
 * @param {object} [authenticationProvider]       The authentication provider.
 * @return {ServiceBusService}                    A new ServiceBusService object.
 */
exports.createServiceBusService = azureSb.createServiceBusService;

/**
 * Notification hub client exports.
 * @ignore
 */

var NotificationHubService = azureSb.NotificationHubService;
exports.NotificationHubService = NotificationHubService;

/**
 * Creates a new {@link NotificationHubService} object.
 *
 * @method
 * @param {string} hubName                         The notification hub name.
 * @param {string} [endpointOrConnectionString]    The service bus endpoint or connection string.
 * @param {string} [sharedAccessKeyName]           The notification hub shared access key name.
 * @param {string} [sharedAccessKeyValue]          The notification hub shared access key value.
 * @return {NotificationHubService}                A new NotificationHubService object.
 */
exports.createNotificationHubService = azureSb.createNotificationHubService;

/**
 * Wrap service exports.
 * @ignore
 */

var WrapService = azureSb.WrapService;
exports.WrapService = WrapService;

/**
 * Creates a new WrapService object.
 *
 * @method
 * @param {string} acsHost                 The access control host.
 * @param {string} [issuer]                The service bus issuer.
 * @param {string} [accessKey]             The service bus issuer password.
 */
exports.createWrapService = azureSb.createWrapService;

/**
* Generated ManagementClient client exports.
* @ignore
*/

var azureManagement = require('azure-asm-mgmt');
exports.ManagementClient = azureManagement.ManagementClient;

/**
 * Creates a new {@link ManagementClient} object.
 *
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {ManagementClient}                        A new ManagementClient object.
 */
exports.createManagementClient = azureManagement.createManagementClient;

/**
 * SqlManagementService client exports.
 * @ignore
 */
var azureSqlMgmt = require('azure-asm-sql');
var SqlManagementService = azureSqlMgmt.SqlManagementService;
exports.ASMSqlManagementService = SqlManagementService;

/**
 * Creates a new {@link SqlManagementService} object.
 * @method
 * @param {string} subscriptionId                                       The subscription ID for the account.
 * @param {object} authentication                                       The authentication object for the client.
 *                                                                     You must use either keyfile/certfile or keyvalue/certvalue
 *                                                                      to provide a management certificate to authenticate
 *                                                                      service requests.
 * @param {string} [authentication.keyfile]                             The path to a file that contains the PEM encoded key
 * @param {string} [authentication.certfile]                            The path to a file that contains the PEM encoded certificate
 * @param {string} [authentication.keyvalue]                            A string that contains the PEM encoded key
 * @param {string} [authentication.certvalue]                           A string that contains the PEM encoded certificate
 * @param {object} [hostOptions]                                        The host options to override defaults.
 * @param {string} [hostOptions.host='management.core.windows.net']     The management endpoint.
 * @param {string} [hostOptions.apiversion='2012-03-01']                The API vesion to be used.
 * @return {SqlManagementService}                                       A new SqlManagementService object.
 */
exports.createASMSqlManagementService = azureSqlMgmt.createSqlManagementService;

/**
 * SQL service exports.
 * @ignore
 */

var SqlService = azureSqlMgmt.SqlService;
exports.SqlService = SqlService;

/**
 *
 * Creates a new SqlService object
 *
 * The SqlService object allows you to perform management operations against databases
 * created using Microsoft Azure SQL Database.
 * @method
 * @param {string} serverName                   The SQL server name.
 * @param {string} administratorLogin           The SQL Server administrator login.
 * @param {string} administratorLoginPassword   The SQL Server administrator login password.
 * @param {string} [host]                       The host for the service.
 * @param {string} [acsHost]                    The acs host.
 * @param {object} [authenticationProvider]     The authentication provider.
 */
exports.createSqlService = azureSqlMgmt.createSqlService;


/**
 * HDInsightService client exports.
 * @ignore
 */
var azureHDInsight = require('azure-asm-hdinsight');
var HDInsightService = azureHDInsight.HDInsightService;

/**
 * Creates a new {@link HDInsightService} object.
 * @method
 * @param {string} subscriptionId                                       The subscription ID for the account.
 * @param {object} authentication                                       The authentication object for the client.
 *                                                                      You must use either keyfile/certfile or keyvalue/certvalue
 *                                                                      to provide a management certificate to authenticate
 *                                                                      service requests.
 * @param {string} [authentication.keyfile]                             The path to a file that contains the PEM encoded key
 * @param {string} [authentication.certfile]                            The path to a file that contains the PEM encoded certificate
 * @param {string} [authentication.keyvalue]                            A string that contains the PEM encoded key
 * @param {string} [authentication.certvalue]                           A string that contains the PEM encoded certificate
 * @param {object} [hostOptions]                                        The host options to override defaults.
 * @param {string} [hostOptions.host='management.core.windows.net']     The management endpoint.
 * @param {string} [hostOptions.apiversion='2012-03-01']                The API vesion to be used.
 * @return {HDInsightService}                                           A new HDInsightService object.
 */
exports.createHDInsightService = azureHDInsight.createHDInsightService;

/**
 * Generated ServiceBusManagementClient client exports.
 * @ignore
 */

var azureServiceBus = require('azure-asm-sb');
exports.ServiceBusManagementClient = azureServiceBus.ServiceBusManagementClient;

/**
 * Creates a new {@link ServiceBusManagementClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {ServiceBusManagementClient}              A new ServiceBusManagementClient object.
 */
exports.createServiceBusManagementClient = azureServiceBus.createServiceBusManagementClient;

/**
 * WebsiteManagementService client exports.
 * @ignore
 */

var azureWebSite = require('azure-asm-website');
var WebsiteManagementService = azureWebSite.WebsiteManagementService;
exports.ASMWebsiteManagementService = WebsiteManagementService;

/**
 * Creates a new {@link WebsiteManagementService} object.
 *
 * @deprecated Use {@link createWebSiteManagementClient} instead.
 * @method
 * @param {string} subscriptionId          The subscription ID for the account.
 * @param {object} authentication                                       The authentication object for the client.
 *                                                                      You must use either keyfile/certfile or keyvalue/certvalue
 *                                                                      to provide a management certificate to authenticate
 *                                                                      service requests.
 * @param {string} [authentication.keyfile]                             The path to a file that contains the PEM encoded key
 * @param {string} [authentication.certfile]                            The path to a file that contains the PEM encoded certificate
 * @param {string} [authentication.keyvalue]                            A string that contains the PEM encoded key
 * @param {string} [authentication.certvalue]                           A string that contains the PEM encoded certificate
 * @param {object} [hostOptions]                                        The host options to override defaults.
 * @param {string} [hostOptions.host='management.core.windows.net']     The management endpoint.
 * @param {string} [hostOptions.apiversion='2012-03-01']                The API vesion to be used.
 * @return {WebsiteManagementService}                                   A new WebsitemanagementService object.
 */
exports.createASMWebsiteManagementService = azureWebSite.createWebsiteManagementService;

/**
 * Generated NetworkManagementClient client exports.
 * @ignore
 */

var azureNetwork = require('azure-asm-network');
exports.ASMNetworkManagementClient = azureNetwork.NetworkManagementClient;

/**
 * Creates a new {@link NetworkManagementClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {NetworkManagementClient}          A new NetworkManagementClient object.
 */
exports.createASMNetworkManagementClient = azureNetwork.creatNetworkManagementClient;

var asmTrafficManager = require('azure-asm-trafficmanager');
exports.ASMTrafficManagerManagementClient = asmTrafficManager.TrafficManagerManagementClient;

/**
 * Creates a new TrafficManagerManagementClient object.
 *
 * NOTE: These APIs are still in development and should not be used.
 *
 * @param {string} [credentials.subscriptionId]      The subscription identifier.
 * @param {string} [credentials.token]               The access token.
 * @param {string} [baseUri]                         The base uri.
 * @param {array}  [filters]                         Optional array of service filters
 * @return {TrafficManagerManagementClient}          A new TrafficManagerManagementClient object.
 */
exports.createASMTrafficManagerManagementClient = asmTrafficManager.createTrafficManagerManagementClient;

/**
 * Generated SqlManagementClient client exports.
 * @ignore
 */
exports.ASMSqlManagementClient = azureSqlMgmt.SqlManagementClient;

/**
 * Creates a new {@link SqlClient} object.
 * @method
 * @param {string} [credentials.subscriptionId]      The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [baseUri]                         The base uri.
 * @return {SqlClient}                               A new SqlClient object.
 */
exports.createASMSqlManagementClient = azureSqlMgmt.createSqlManagementClient;

/**
 * Generated StorageManagementClient client exports.
 * @ignore
 */
var azureStorage = require('azure-asm-storage');
exports.ASMStorageManagementClient = azureStorage.StorageManagementClient;

/**
 * Creates a new {@link StorageManagementClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {StorageManagementClient}                 A new StorageManagementClient object.
 */
exports.createASMStorageManagementClient = azureStorage.createStorageManagementClient;

/**
 * Generated StoreClient client exports.
 * @ignore
 */
var azureStore = require('azure-asm-store');
exports.ASMStoreManagementClient = azureStore.StoreManagementClient;

/**
 * Creates a new {@link StoreManagementClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {StoreManagementClient}                   A new StoreManagementClient object.
 */
exports.createASMStoreManagementClient = azureStore.createStoreManagementClient;

/**
 * Generated SubscriptionClient client exports.
 * @ignore
 */

var azureASMSubscription = require('azure-asm-subscription');
exports.ASMSubscriptionClient = azureASMSubscription.SubscriptionClient;

/**
 * Creates a new {@link SubscriptionClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a TokenCloudCredentials instance)
 * @param {string} [baseUri]                         The base uri.
 * @return {SubscriptionClient}                      A new SubscriptionClient object.
 */
exports.createASMSubscriptionClient = azureASMSubscription.createSubscriptionClient;

/**
 * Generated WebsiteManagementService client exports.
 * @ignore
 */
exports.ASMWebSiteManagementClient = azureWebSite.WebSiteManagementClient;

exports.ASMWebSiteExtensionsClient = azureWebSite.WebSiteExtensionsClient;

/**
 * Creates a new {@link WebSiteManagementClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {WebSiteManagementClient}                 A new WebSiteManagementClient object.
 */
exports.createASMWebSiteManagementClient = azureWebSite.createWebSiteManagementClient;

/**
 * Creates a new {@link WebSiteExtensionsClient} object.
 * @method
 * @param {string} siteName                          The site name.
 * @param {string} credentials.username              The username.
 * @param {string} credentials.password              The password.
 * @param {string} [baseUri]                         The base uri.
 * @return {WebSiteManagementClient}                 A new WebSiteManagementClient object.
 */
exports.createASMWebSiteExtensionsClient = azureWebSite.createWebSiteExtensionsClient;

/**
 * ScmService client exports.
 * @ignore
 */

exports.ASMScmService = azureWebSite.ScmService;

/**
 * Creates a new {@link ScmService} object.
 * @method
 * @param {object} authentication          The authentication object for the client.
 *                                         You must use a auth/pass for basic authentication.
 * @param {string} [authentication.user]   The basic authentication username.
 * @param {string} [authentication.pass]   The basic authentication password.
 * @param {object} [hostOptions]           The host options to override defaults.
 * @param {string} [hostOptions.host]      The SCM repository endpoint.
 * @return {ScmService}                    A new WebsitemanagementService object.
 */
exports.createASMScmService = azureWebSite.createScmService;

/**
 * Generated ComputeManagementClient client exports.
 * @ignore
 */
var azureCompute = require('azure-asm-compute');
exports.ASMComputeManagementClient = azureCompute.ComputeManagementClient;

/**
 * Creates a new {@link ComputeManagementClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {ComputeManagementClient}                 A new ComputeManagementClient object.
 */
exports.createASMComputeManagementClient = azureCompute.createComputeManagementClient;

/**
 * Generated GalleryClient client exports.
 * @ignore
 */
var gallery = require('azure-gallery');
exports.ARMGalleryClient = gallery.GalleryClient;

/**
 * Creates a new {@link GalleryClient} object.
 * @method
 * @param {object} credentials            The credentials object (typically, a TokenCloudCredentials instance)
 * @param {string} [baseUri]              The base uri
 * @param {Array} [filters]               Extra filters to attach to the client
 * @return {GalleryClient}                A new GalleryClient object.
 */
exports.createARMGalleryClient = gallery.createGalleryClient;

/**
 * Generated SchedulerManagementClient client exports.
 * @ignore
 */
var azureSchedulerManagement = require('azure-asm-scheduler');
exports.ASMSchedulerManagementClient = azureSchedulerManagement.SchedulerManagementClient;

/**
 * Creates a new {@link SchedulerManagementClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {SchedulerManagementClient}               A new SchedulerManagementClient object.
 */
exports.createASMSchedulerManagementClient = azureSchedulerManagement.createSchedulerManagementClient;

/**
 * Generated SchedulerClient client exports.
 * @ignore
 */
var azureScheduler = require('azure-scheduler');
exports.SchedulerClient = azureScheduler.SchedulerClient;

/**
 * Creates a new {@link SchedulerClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {SchedulerClient}                         A new SchedulerClient object.
 */
exports.createSchedulerClient = azureScheduler.createSchedulerClient;

/**
 * Generated monitoring client exports.
 * @ignore
 */
var azureMonitoring = require('azure-monitoring');

exports.EventsClient = azureMonitoring.EventsClient;

/**
 * Creates a new {@link EventsClient} object.
 * @method
 * @param {object} credentials            The credentials, typically a TokenCloudCredential
 * @param {string} [baseUri]              The base uri.
 * @param {array} [filters]               Extra request filters to add
 * @return {EventsClient}                A new EventsClient object.
 */
exports.createEventsClient = azureMonitoring.createEventsClient;

exports.AlertsClient = azureMonitoring.AlertsClient;

/**
 * Creates a new {@link AlertsClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {AlertsClient}                            A new AlertsClient object.
 */
// TODO: uncomment when monitoring is published
// exports.createAlertsClient = azureMonitoring.createAlertsClient;

/**
 * Generated AutoScaleClient client exports.
 * @ignore
 */
exports.AutoScaleClient = azureMonitoring.AutoScaleClient;

/**
 * Creates a new {@link AutoScaleClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {AutoScaleClient}                         A new AutoScaleClient object.
 */
exports.createAutoScaleClient = azureMonitoring.createAutoScaleClient;

/**
 * Generated MetricsClient client exports.
 * @ignore
 */
exports.MetricsClient = azureMonitoring.MetricsClient;

/**
 * Creates a new {@link MetricsClient} object.
 * @method
 * @param {object} credentials                       The credentials object (typically, a CertificateCloudCredentials instance)
 * @param {string} credentials.subscriptionId        The subscription identifier.
 * @param {string} [credentials.cert]                The cert value.
 * @param {string} [credentials.key]                 The key value.
 * @param {string} [credentials.pem]                 The PEM file data.
 * @param {string} [baseUri]                         The base uri.
 * @return {MetricsClient}                           A new MetricsClient object.
 */
exports.createMetricsClient = azureMonitoring.createMetricsClient;

/**
 * Key Vault client exports.
 * @ignore
 */
var azureKeyVault = require('azure-keyvault');

/** Identifier of the resource on which Key Vault users and service principals must authenticate.
 */
exports.KEYVAULT_RESOURCE_ID = azureKeyVault.RESOURCE_ID;

/**
 * Initializes a new instance of the KeyVaultClient class.
 * @constructor
 *
 * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.KeyVaultClient = azureKeyVault.KeyVaultClient;

/**
 * Creates a new {@linkcode KeyVaultClient} object.
 *
 * @param {object} [credentials]     The credentials, typically a {@linkcode KeyVaultCredentials} object. If null, an authentication filter must be provided.
 
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createKeyVaultClient = azureKeyVault.createKeyVaultClient;

/**
 * Key Vault management client exports.
 * @ignore
 */

var AzureKeyVaultManagement = require('azure-arm-keyvault');
exports.KeyVaultManagementClient = AzureKeyVaultManagement;
/**
 * Creates a new instance of the KeyVaultManagementClient.
 *
 * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createKeyVaultManagementClient =  function (credentials, subscriptionId, options) {
  return new AzureKeyVaultManagement(credentials, subscriptionId, null, options);
};


/**
 * Service Runtime exports.
 * @ignore
 */

exports.RoleEnvironment = require('./serviceruntime/roleenvironment');

var azureCommon = require('azure-common');

/**
 * Creates a new CertificateCloudCredentials object.
 * Either a pair of cert / key values need to be pass or a pem file location.
 * @method
 * @param {string} credentials.subscription  The subscription identifier.
 * @param {string} [credentials.cert]        The certificate.
 * @param {string} [credentials.key]         The certificate key.
 * @param {string} [credentials.pem]         The PEM file content.
 * @return {CertificateCloudCredentials}
 */
exports.createCertificateCloudCredentials = azureCommon.createCertificateCloudCredentials;

/**
 * Creates a new BasicAuthenticationCloudCredentials object.
 * Either a pair of cert / key values need to be pass or a pem file location.
 * @method
 * @param {string} credentials.username            The username.
 * @param {string} credentials.password            The password.
 * @return {BasicAuthenticationCloudCredentials}
 */
exports.createBasicAuthenticationCloudCredentials = azureWebSite.createBasicAuthenticationCloudCredentials;

exports.Constants = azureCommon.Constants;
exports.ServiceClient = azureCommon.ServiceClient;
exports.ServiceClientConstants = azureCommon.ServiceClientConstants;
exports.ConnectionStringParser = azureCommon.ConnectionStringParser;
exports.Logger = azureCommon.Logger;
exports.WebResource = azureCommon.WebResource;
exports.Validate = azureCommon.validate;
exports.date = azureCommon.date;

exports.ServiceSettings = azureCommon.ServiceSettings;
exports.ServiceBusSettings = azureCommon.ServiceBusSettings;
exports.ServiceManagementSettings = azureCommon.ServiceManagementSettings;
exports.StorageServiceSettings = azureCommon.StorageServiceSettings;

// Credentials
exports.CertificateCloudCredentials = azureCommon.CertificateCloudCredentials;
exports.TokenCloudCredentials = azureCommon.TokenCloudCredentials;
exports.AnonymousCloudCredentials = azureCommon.AnonymousCloudCredentials;
exports.SharedAccessSignature = storage.SharedAccessSignature;
exports.SharedKey = storage.SharedKey;
exports.SharedKeyLite = storage.SharedKeyLite;
exports.SharedKeyTable = storage.SharedKeyTable;
exports.SharedKeyLiteTable = storage.SharedKeyLiteTable;

// Other filters
exports.LinearRetryPolicyFilter = azureCommon.LinearRetryPolicyFilter;
exports.ExponentialRetryPolicyFilter = azureCommon.ExponentialRetryPolicyFilter;
exports.UserAgentFilter = azureCommon.UserAgentFilter;
exports.ProxyFilter = azureCommon.ProxyFilter;
exports.LogFilter = azureCommon.LogFilter;

/**
 * Check if the application is running in the Microsoft Azure Emulator.
 * @property {boolean} isEmulated   `true` if the application is running in the emulator; otherwise, `false`.
 */
exports.isEmulated = function (host) {
  return azureCommon.ServiceClient.isEmulated(host);
};

/*
 * Configuration
 */

var sdkconfig = azureCommon.SdkConfig;
exports.config = sdkconfig;
exports.configure = azureCommon.configure;
exports.dumpConfig = exports.dumpConfig;

var resourceManagement = require('azure-arm-resource');
exports.ResourceManagementClient = resourceManagement.ResourceManagementClient;
/**
 * Creates a new instance of the ARM ResourceManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createResourceManagementClient = function (credentials, subscriptionId, options) {
  return new resourceManagement.ResourceManagementClient(credentials, subscriptionId, null, options);
};

exports.ARMFeatureClient = resourceManagement.FeatureClient;
/**
 * Creates a new instance of the ARM FeatureManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMFeatureManagementClient = function (credentials, subscriptionId, options) {
  return new resourceManagement.FeatureClient(credentials, subscriptionId, null, options);
};

exports.ARMSubscriptionClient = resourceManagement.SubscriptionClient;
/**
 * Creates a new instance of the ARM SubscriptionManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMSubscriptionManagementClient = function (credentials, options) {
  return new resourceManagement.SubscriptionClient(credentials, null, options);
};

exports.ARMManagementLockClient = resourceManagement.ManagementLockClient;
/**
 * Creates a new instance of the ARM Resource ManagementLockClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createResourceManagementLockClient = function (credentials, subscriptionId, options) {
  return new resourceManagement.ManagementLockClient(credentials, subscriptionId, null, options);
};

exports.ARMPolicyClient = resourceManagement.PolicyClient;
/**
 * Creates a new instance of the PolicyClient class.
 *
 * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createResourcePolicyClient = function (credentials, subscriptionId, options) {
  return new resourceManagement.PolicyClient(credentials, subscriptionId, null, options);
};

var AzureARMStorage = require('azure-arm-storage');
exports.ARMStorageManagementClient = AzureARMStorage;

/**
 * Creates a new instance of the ARM StorageManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMStorageManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMStorage(credentials, subscriptionId, null, options);
};

var AzureARMNetwork = require('azure-arm-network');
exports.ARMNetworkManagementClient = AzureARMNetwork;

/**
 * Creates a new instance of the ARM NetworkManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMNetworkManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMNetwork(credentials, subscriptionId, null, options);
};

var AzureARMCompute = require('azure-arm-compute');
exports.ARMComputeManagementClient = AzureARMCompute;

/**
 * Creates a new instance of the ARM ComputeManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMComputeManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMCompute(credentials, subscriptionId, null, options);
};

var AzureARMRedis = require('azure-arm-rediscache');
exports.ARMRedisCacheManagementClient = AzureARMRedis;

/**
 * Creates a new instance of the ARM RedisCacheManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMRedisCacheManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMRedis(credentials, subscriptionId, null, options);
};

var AzureARMWebSite = require('azure-arm-website');
exports.ARMWebSiteManagementClient = AzureARMWebSite;
/**
 * Creates a new instance of the ARM WebsiteManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMWebsiteManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMWebSite(credentials, subscriptionId, null, options);
};

var AzureGraph = require('azure-graph');
exports.GraphManagementClient = AzureGraph;
/**
 * Creates a new instance of the ARM GraphRbacManagementClient class.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} tenantID - Gets or sets the tenant Id.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 */
exports.createGraphManagementClient = function (credentials, tenantId, options) {
  return new AzureGraph(credentials, tenantId, null, options);
};

var AzureARMCdn = require('azure-arm-cdn');
exports.ARMCdnManagementClient = AzureARMCdn;
/**
 * Creates a new instance of the ARM CdnManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMCdnManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMCdn(credentials, subscriptionId, null, options);
};

var AzureARMAuthorization = require('azure-arm-authorization');
exports.ARMAuthorizationManagementClient = AzureARMAuthorization;
/**
 * Creates a new instance of the ARM AuthorizationManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMAuthorizationManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMAuthorization(credentials, subscriptionId, null, options);
};

var AzureARMDns = require('azure-arm-dns');
exports.ARMDnsManagementClient = AzureARMDns;
/**
 * Creates a new instance of the DnsManagementClient class.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createARMDnsManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMDns(credentials, subscriptionId, null, options);
};

var AzureARMHDInsight = require('azure-arm-hdinsight');
exports.ARMHDInsightManagementClient = AzureARMHDInsight.HDInsightManagementClient;
/**
 * Creates a new HDInsightManagementClient object 
 * The HDInsightManagementClient object is used to perform cluster CRUD operations on the Microsoft Azure HDInsight Service.
 *
 * @param {string} [credentials.subscriptionId]      The subscription identifier.
 * @param {string} [credentials.token]               The access token.
 * @param {string} [baseUri]                         The base uri.
 * @param {array}  [filters]                         Optional array of service filters
 * @return {HDInsightManagementClient}               A new HDInsightManagementClient object.
 */
exports.createARMHDInsightManagementClient = AzureARMHDInsight.createHDInsightManagementClient;

var AzureARMHDInsightJobs = require('azure-arm-hdinsight-jobs');
exports.ARMHDInsightJobManagementClient = AzureARMHDInsightJobs.HDInsightJobManagementClient;
/**
 * Creates a new HDInsightJobManagementClient object 
 * The HDInsightJobManagementClient object is used to submit jobs on the Microsoft Azure HDInsight Service.
 *
 * @param {string} [credentials.subscriptionId]      The subscription identifier.
 * @param {string} [credentials.token]               The access token.
 * @param {string} [baseUri]                         The base uri.
 * @param {array}  [filters]                         Optional array of service filters
 * @return {HDInsightJobManagementClient}            A new HDInsightJobManagementClient object.
 */
exports.createARMHDInsightJobManagementClient = AzureARMHDInsightJobs.createHDInsightJobManagementClient;

var AzureARMCommerce = require('azure-arm-commerce');
exports.ARMCommerceManagementClient = AzureARMCommerce.UsageAggregationManagementClient;
/**
 * Creates a new CommerceManagementClient object.
 *
 * @param {string} [credentials.subscriptionId]      The subscription identifier.
 * @param {string} [baseUri]                         The base uri.
 * @param {array}  [filters]                         Optional array of service filters
 * @return {UsageAggregationManagementClient}        A new UsageAggregationManagementClient object.
 */
exports.createARMCommerceManagementClient = AzureARMHDInsightJobs.createUsageAggregationManagementClient;

var AzureARMInsights = require('azure-arm-insights');
exports.ARMInsightsManagementClient = AzureARMInsights.InsightsManagementClient;
/**
 * @class
 * Initializes a new instance of the InsightsManagementClient class.
 * @constructor
 *
 * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
 *
 * @param {string} subscriptionId - The Azure subscription Id.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 * @return {InsightsManagementClient}                A new InsightsManagementClient object.
*/
exports.createInsightsManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMInsights.InsightsManagementClient(credentials, subscriptionId, null, options);
};

var AzureInsights = require('azure-insights');
exports.InsightsClient = AzureInsights.InsightsClient;
/**
 * @class
 * Initializes a new instance of the InsightsClient class.
 * @constructor
 *
 * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
 *
 * @param {string} subscriptionId - The Azure subscription Id.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 * @return {InsightsClient}                          A new InsightsClient object.
*/
exports.createInsightsClient = function (credentials, subscriptionId, options) {
  return new AzureInsights.InsightsClient(credentials, subscriptionId, null, options);
};

var AzureARMDatalakeAnalytics = require('azure-arm-datalake-analytics');
exports.DataLakeAnalyticsAccountClient = AzureARMDatalakeAnalytics.DataLakeAnalyticsAccountClient;
exports.DataLakeAnalyticsJobClient = AzureARMDatalakeAnalytics.DataLakeAnalyticsJobClient;
exports.DataLakeAnalyticsCatalogClient = AzureARMDatalakeAnalytics.DataLakeAnalyticsCatalogClient;

/**
 * Creates a new instance of the DataLakeAnalyticsJobManagementClient class.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {string} adlaJobDnsSuffix - Gets the DNS suffix used as the base for all Azure Data Lake Analytics Job service requests.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createDataLakeAnalyticsJobManagementClient = function (credentials, subscriptionId, adlaJobDnsSuffix, options) {
  return new AzureARMDatalakeAnalytics.DataLakeAnalyticsJobClient(credentials, subscriptionId, adlaJobDnsSuffix, options);
};

/**
 * Creates a new instance of the DataLakeAnalyticsCatalogManagementClient class.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {string} adlaCatalogDnsSuffix - Gets the DNS suffix used as the base for all Azure Data Lake Analytics Catalog service requests.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createDataLakeAnalyticsCatalogManagementClient = function (credentials, subscriptionId, adlaCatalogDnsSuffix, options) {
  return new AzureARMDatalakeAnalytics.DataLakeAnalyticsCatalogClient(credentials, subscriptionId, adlaCatalogDnsSuffix, options);
};

/**
 * Creates a new instance of the DataLakeAnalyticsAccountManagementClient class.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createDataLakeAnalyticsAccountManagementClient = function(credentials, subscriptionId, options) {
  return new AzureARMDatalakeAnalytics.DataLakeAnalyticsAccountClient(credentials, subscriptionId, options);
};

var AzureARMDatalakeStore = require('azure-arm-datalake-store');
exports.DatalakeStoreAccountClient = AzureARMDatalakeStore.DataLakeStoreAccountClient;
exports.DataLakeStoreFileSystemClient = AzureARMDatalakeStore.DataLakeStoreFileSystemClient;

/**
 * Creates a new instance of the DataLakeStoreAccountManagementClient class.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createDataLakeStoreAccountManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMDatalakeStore.DataLakeStoreAccountClient(credentials, subscriptionId, options);
};

/**
 * Creates a new instance of the DataLakeStoreFileSystemManagementClient class.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {string} adlsFileSystemDnsSuffix - Gets the URI used as the base for all cloud service requests.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.DataLakeStoreFileSystemManagementClient = function(credentials, subscriptionId, adlsFileSystemDnsSuffix, options) {
  return new AzureARMDatalakeStore.DataLakeStoreFileSystemClient(credentials, subscriptionId, adlsFileSystemDnsSuffix, options);
};

var AzureBatch = require('azure-arm-batch');
exports.BatchManagementClient = AzureBatch;

/**
 * Creates a new instance of the ARM BatchManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createBatchManagementClient = function (credentials, subscriptionId, options) {
  return new AzureBatch(credentials, subscriptionId, null, options);
};

var AzureBatchService = require('azure-batch');
exports.BatchServiceClient = AzureBatchService;

/**
 * Creates a new instance of the BatchServiceClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createBatchServiceClient = function (credentials, baseUri, options) {
  return new AzureBatchService(credentials, baseUri, options);
};


var AzureServerManagement = require('azure-arm-servermanagement');
exports.ServerManagementClient = AzureServerManagement;

/**
 * Creates a new instance of the ServerManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createServerManagementClient = function (credentials, subscriptionId, options) {
  return new AzureServerManagement(credentials, subscriptionId, null, options);
};

var AzurePowerBIEmbeddedManagementClient = require('azure-arm-powerbiembedded');
exports.PowerBIEmbeddedManagementClient = AzurePowerBIEmbeddedManagementClient;

/**
 * Creates a new instance of the PowerBIEmbeddedManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createPowerBIEmbeddedManagementClient = function (credentials, subscriptionId, options) {
  return new AzurePowerBIEmbeddedManagementClient(credentials, subscriptionId, null, options);
};

var AzureNotificationHubsManagementClient = require('azure-arm-notificationhubs');
exports.NotificationHubsManagementClient = AzureNotificationHubsManagementClient;

/**
 * Creates a new instance of the NotificationHubsManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createNotificationHubsManagementClient = function (credentials, subscriptionId, options) {
  return new AzureNotificationHubsManagementClient(credentials, subscriptionId, null, options);
};

var AzureIotHubManagementClient = require('azure-arm-iothub');
exports.IotHubManagementClient = AzureIotHubManagementClient;

/**
 * Creates a new instance of the IotHubManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createIotHubManagementClient = function (credentials, subscriptionId, options) {
  return new AzureIotHubManagementClient(credentials, subscriptionId, null, options);
};

var AzureDevTestLabsClient = require('azure-arm-devtestlabs');
exports.DevTestLabsClient = AzureDevTestLabsClient;

/**
 * Creates a new instance of the IotHubManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createDevTestLabsClient = function (credentials, subscriptionId, options) {
  return new AzureDevTestLabsClient(credentials, subscriptionId, null, options);
};

var AzureTrafficManagerManagementClient = require('azure-arm-trafficmanager');
exports.TrafficManagerManagementClient = AzureTrafficManagerManagementClient;

/**
 * Creates a new instance of the TrafficManagerManagementClient.
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createTrafficManagerManagementClient = function (credentials, subscriptionId, options) {
  return new AzureTrafficManagerManagementClient(credentials, subscriptionId, null, options);
};

var AzureARMAnalysisServices = require('azure-arm-analysisservices');
exports.analysisServicesManagementClient = AzureARMAnalysisServices.AnalysisServicesManagementClient;

/**
 * Creates a new instance of the AnalysisServicesManagementClient class.
 *
 * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
 *
 * @param {string} subscriptionId - A unique identifier of a Microsoft Azure subscription. The subscription id forms part of the URI for every service call.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client API Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
exports.createAnalysisServicesManagementClient = function (credentials, subscriptionId, options) {
  return new AzureARMAnalysisServices.AnalysisServicesManagementClient(credentials, subscriptionId, null, options);
};

var msRestAzure = require('ms-rest-azure');

exports.interactiveLogin = msRestAzure.interactiveLogin;
exports.loginWithServicePrincipalSecret = msRestAzure.loginWithServicePrincipalSecret;
exports.loginWithUsernamePassword = msRestAzure.loginWithUsernamePassword;
exports.AzureEnvironment = msRestAzure.AzureEnvironment;
exports.ApplicationTokenCredentials = msRestAzure.ApplicationTokenCredentials;
exports.DeviceTokenCredentials = msRestAzure.DeviceTokenCredentials;
exports.UserTokenCredentials = msRestAzure.UserTokenCredentials;
exports.BaseResource = msRestAzure.BaseResource;
exports.GenericAzureServiceClient = msRestAzure.AzureServiceClient;

var msRest = require('ms-rest');
exports.RequestObject = msRest.WebResource;