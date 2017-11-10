/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the AlertingVstsBugtrackerSettings class.
 * @constructor
 * VSTS bugtracker specific settings
 *
 * @member {string} vstsProjectId
 * 
 * @member {string} vstsProjectUri
 * 
 * @member {string} [vstsProjectName]
 * 
 * @member {string} [vstsAccountName]
 * 
 * @member {string} [vstsAreaPath]
 * 
 * @member {object} [vstsDefaultPayload]
 * 
 */
function AlertingVstsBugtrackerSettings() {
  AlertingVstsBugtrackerSettings['super_'].call(this);
}

util.inherits(AlertingVstsBugtrackerSettings, models['AlertingBugtrackerSettings']);

/**
 * Defines the metadata of AlertingVstsBugtrackerSettings
 *
 * @returns {object} metadata of AlertingVstsBugtrackerSettings
 *
 */
AlertingVstsBugtrackerSettings.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'vsts',
    type: {
      name: 'Composite',
      className: 'AlertingVstsBugtrackerSettings',
      modelProperties: {
        callbackUrl: {
          required: false,
          serializedName: 'callback_url',
          type: {
            name: 'String'
          }
        },
        ownerName: {
          required: true,
          serializedName: 'owner_name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        vstsProjectId: {
          required: true,
          serializedName: 'vsts_project_id',
          type: {
            name: 'String'
          }
        },
        vstsProjectUri: {
          required: true,
          serializedName: 'vsts_project_uri',
          type: {
            name: 'String'
          }
        },
        vstsProjectName: {
          required: false,
          serializedName: 'vsts_project_name',
          type: {
            name: 'String'
          }
        },
        vstsAccountName: {
          required: false,
          serializedName: 'vsts_account_name',
          type: {
            name: 'String'
          }
        },
        vstsAreaPath: {
          required: false,
          serializedName: 'vsts_area_path',
          type: {
            name: 'String'
          }
        },
        vstsDefaultPayload: {
          required: false,
          serializedName: 'vsts_default_payload',
          type: {
            name: 'Object'
          }
        }
      }
    }
  };
};

module.exports = AlertingVstsBugtrackerSettings;