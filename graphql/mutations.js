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
      accx
      accy
      accz
      gyx
      gyy
      gyz
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
      accx
      accy
      accz
      gyx
      gyy
      gyz
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
      accx
      accy
      accz
      gyx
      gyy
      gyz
      createdAt
      updatedAt
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      deviceID
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      deviceID
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      deviceID
      createdAt
      updatedAt
    }
  }
`;
