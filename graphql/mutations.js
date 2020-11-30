/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDevices = /* GraphQL */ `
  mutation CreateDevices(
    $input: CreateDevicesInput!
    $condition: ModelDevicesConditionInput
  ) {
    createDevices(input: $input, condition: $condition) {
      id
      name
      description
      temperature
      contraction
      gps
      createdAt
      updatedAt
    }
  }
`;
export const updateDevices = /* GraphQL */ `
  mutation UpdateDevices(
    $input: UpdateDevicesInput!
    $condition: ModelDevicesConditionInput
  ) {
    updateDevices(input: $input, condition: $condition) {
      id
      name
      description
      temperature
      contraction
      gps
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevices = /* GraphQL */ `
  mutation DeleteDevices(
    $input: DeleteDevicesInput!
    $condition: ModelDevicesConditionInput
  ) {
    deleteDevices(input: $input, condition: $condition) {
      id
      name
      description
      temperature
      contraction
      gps
      createdAt
      updatedAt
    }
  }
`;
