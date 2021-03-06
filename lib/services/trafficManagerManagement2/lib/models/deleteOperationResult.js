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
 * Initializes a new instance of the DeleteOperationResult class.
 * @constructor
 * The result of the request or operation.
 * @member {boolean} [operationResult] The result of the operation or request.
 * 
 */
function DeleteOperationResult() {
}

/**
 * Defines the metadata of DeleteOperationResult
 *
 * @returns {object} metadata of DeleteOperationResult
 *
 */
DeleteOperationResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeleteOperationResult',
    type: {
      name: 'Composite',
      className: 'DeleteOperationResult',
      modelProperties: {
        operationResult: {
          required: false,
          readOnly: true,
          serializedName: 'boolean',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = DeleteOperationResult;
