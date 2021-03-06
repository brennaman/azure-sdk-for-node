/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the VirtualMachineConfiguration class.
 * @constructor
 * @summary The configuration for compute nodes in a pool based on the Azure
 * Virtual Machines infrastructure.
 *
 * @member {object} [imageReference] A reference to the Azure Virtual Machines
 * Marketplace image to use. This property and osDisk are mutually exclusive
 * and one of the properties must be specified.
 *
 * @member {string} [imageReference.publisher] For example, Canonical or
 * MicrosoftWindowsServer.
 *
 * @member {string} [imageReference.offer] For example, UbuntuServer or
 * WindowsServer.
 *
 * @member {string} [imageReference.sku] For example, 14.04.0-LTS or
 * 2012-R2-Datacenter.
 *
 * @member {string} [imageReference.version] A value of 'latest' can be
 * specified to select the latest version of an image. If omitted, the default
 * is 'latest'.
 *
 * @member {object} [osDisk] A reference to the OS disk image to use. This
 * property can be specified only if the Batch account was created with its
 * poolAllocationMode property set to 'UserSubscription'. This property and
 * imageReference are mutually exclusive and one of the properties must be
 * specified.
 *
 * @member {array} [osDisk.imageUris] All the VHDs must be identical and must
 * reside in an Azure Storage account within the same subscription and same
 * region as the Batch account. For best performance, it is recommended that
 * each VHD resides in a separate Azure Storage account. Each VHD can serve
 * upto 20 Windows compute nodes or 40 Linux compute nodes. You must supply
 * enough VHD URIs to satisfy the 'targetDedicated' property of the pool. If
 * you do not supply enough VHD URIs, the pool will partially allocate compute
 * nodes, and a resize error will occur.
 *
 * @member {string} [osDisk.caching] none - The caching mode for the disk is
 * not enabled. readOnly - The caching mode for the disk is read only.
 * readWrite - The caching mode for the disk is read and write. The default
 * value for caching is none. For information about the caching options see:
 * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 *
 * @member {string} nodeAgentSKUId The SKU of the Batch node agent to be
 * provisioned on compute nodes in the pool. The Batch node agent is a program
 * that runs on each node in the pool, and provides the command-and-control
 * interface between the node and the Batch service. There are different
 * implementations of the node agent, known as SKUs, for different operating
 * systems. You must specify a node agent SKU which matches the selected image
 * reference. To get the list of supported node agent SKUs along with their
 * list of verified image references, see the 'List supported node agent SKUs'
 * operation.
 *
 * @member {object} [windowsConfiguration] Windows operating system settings on
 * the virtual machine. This property must not be specified if the
 * imageReference or osDisk property specifies a Linux OS image.
 *
 * @member {boolean} [windowsConfiguration.enableAutomaticUpdates] If omitted,
 * the default value is true.
 *
 */
function VirtualMachineConfiguration() {
}

/**
 * Defines the metadata of VirtualMachineConfiguration
 *
 * @returns {object} metadata of VirtualMachineConfiguration
 *
 */
VirtualMachineConfiguration.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineConfiguration',
    type: {
      name: 'Composite',
      className: 'VirtualMachineConfiguration',
      modelProperties: {
        imageReference: {
          required: false,
          serializedName: 'imageReference',
          type: {
            name: 'Composite',
            className: 'ImageReference'
          }
        },
        osDisk: {
          required: false,
          serializedName: 'osDisk',
          type: {
            name: 'Composite',
            className: 'OSDisk'
          }
        },
        nodeAgentSKUId: {
          required: true,
          serializedName: 'nodeAgentSKUId',
          type: {
            name: 'String'
          }
        },
        windowsConfiguration: {
          required: false,
          serializedName: 'windowsConfiguration',
          type: {
            name: 'Composite',
            className: 'WindowsConfiguration'
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineConfiguration;
