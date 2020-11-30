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
      gps
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
        gps
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
