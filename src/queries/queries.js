import gql from "graphql-tag";

export const GET_USERS = gql`
  query {
    fetchUsers {
      id
      firstName
      lastName
      name
    }
  }
`;

export const GET_USER_FOLLOWERS = gql`
  query fetchUserFollowers($id: ID!) {
      fetchUserFollowers(id: $id){
        id
        firstName
        lastName
        name
      }
    }
`;