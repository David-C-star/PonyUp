/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDevices = /* GraphQL */ `
  subscription OnCreateDevices {
    onCreateDevices {
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
export const onUpdateDevices = /* GraphQL */ `
  subscription OnUpdateDevices {
    onUpdateDevices {
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
export const onDeleteDevices = /* GraphQL */ `
  subscription OnDeleteDevices {
    onDeleteDevices {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
      id
      deviceID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
      id
      deviceID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
      id
      deviceID
      createdAt
      updatedAt
    }
  }
`;
