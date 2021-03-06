/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PartitionHealth class.
 * @constructor
 * The health of the partition
 * @member {array} [healthEvents]
 * 
 * @member {string} [aggregatedHealthState] Possible values include:
 * 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
 * 
 * @member {string} [partitionId]
 * 
 * @member {array} [replicaHealthStates]
 * 
 */
function PartitionHealth() {
}

/**
 * Defines the metadata of PartitionHealth
 *
 * @returns {object} metadata of PartitionHealth
 *
 */
PartitionHealth.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PartitionHealth',
    type: {
      name: 'Composite',
      className: 'PartitionHealth',
      modelProperties: {
        healthEvents: {
          required: false,
          serializedName: 'HealthEvents',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'HealthEventElementType',
                type: {
                  name: 'Composite',
                  className: 'HealthEvent'
                }
            }
          }
        },
        aggregatedHealthState: {
          required: false,
          serializedName: 'AggregatedHealthState',
          type: {
            name: 'String'
          }
        },
        partitionId: {
          required: false,
          serializedName: 'PartitionId',
          type: {
            name: 'String'
          }
        },
        replicaHealthStates: {
          required: false,
          serializedName: 'ReplicaHealthStates',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'PartitionHealthReplicaHealthStatesItemElementType',
                type: {
                  name: 'Composite',
                  className: 'PartitionHealthReplicaHealthStatesItem'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = PartitionHealth;
