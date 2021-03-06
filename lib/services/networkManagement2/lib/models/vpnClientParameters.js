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

/**
 * @class
 * Initializes a new instance of the VpnClientParameters class.
 * @constructor
 * VpnClientParameters
 *
 * @member {string} processorArchitecture VPN client Processor Architecture.
 * Possible values are: 'AMD64' and 'X86'. Possible values include: 'Amd64',
 * 'X86'
 *
 */
function VpnClientParameters() {
}

/**
 * Defines the metadata of VpnClientParameters
 *
 * @returns {object} metadata of VpnClientParameters
 *
 */
VpnClientParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VpnClientParameters',
    type: {
      name: 'Composite',
      className: 'VpnClientParameters',
      modelProperties: {
        processorArchitecture: {
          required: true,
          serializedName: 'ProcessorArchitecture',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = VpnClientParameters;
