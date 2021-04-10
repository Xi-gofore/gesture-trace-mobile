/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoord = /* GraphQL */ `
  mutation CreateCoord(
    $input: CreateCoordInput!
    $condition: ModelCoordConditionInput
  ) {
    createCoord(input: $input, condition: $condition) {
      id
      x
      y
      createdAt
      updatedAt
    }
  }
`;
export const updateCoord = /* GraphQL */ `
  mutation UpdateCoord(
    $input: UpdateCoordInput!
    $condition: ModelCoordConditionInput
  ) {
    updateCoord(input: $input, condition: $condition) {
      id
      x
      y
      createdAt
      updatedAt
    }
  }
`;
export const deleteCoord = /* GraphQL */ `
  mutation DeleteCoord(
    $input: DeleteCoordInput!
    $condition: ModelCoordConditionInput
  ) {
    deleteCoord(input: $input, condition: $condition) {
      id
      x
      y
      createdAt
      updatedAt
    }
  }
`;
