import React from "react";
import { useQuery } from "@apollo/react-hooks";
import User from "./User";
import { GET_USERS } from "../../queries/queries";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return "Loading...";
  if (error) return `Error ${error.message}`;

  return (
    <div className="flex flex-wrap justify-center items-center pb-16 space-x-4">
      {data.fetchUsers.length ? data.fetchUsers.map((user) => (
        <User key={user.id} user={user} />
      )):
      <p className="text-center">There are no users</p>
      }
    </div>
  );
};
export default UserList;
