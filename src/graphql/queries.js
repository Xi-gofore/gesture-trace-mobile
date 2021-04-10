/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoord = /* GraphQL */ `
  query GetCoord($id: ID!) {
    getCoord(id: $id) {
      id
      x
      y
      createdAt
      updatedAt
    }
  }
`;
export const listCoords = /* GraphQL */ `
  query ListCoords(
    $filter: ModelCoordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        x
        y
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
