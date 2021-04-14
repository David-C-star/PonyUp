/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevices = /* GraphQL */ `
  query GetDevices($id: ID!) {
    getDevices(id: $id) {
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
export const listDevicess = /* GraphQL */ `
  query ListDevicess(
    $filter: ModelDevicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevicess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      deviceID
      createdAt
      updatedAt
    }
  }
`;
export const listUserss = /* GraphQL */ `
  query ListUserss(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
