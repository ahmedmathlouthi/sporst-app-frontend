import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_FOLLOWERS } from "../../queries/queries";

const FollowersList = (props) => {
  const { loading, error, data } = useQuery(GET_USER_FOLLOWERS, {
    variables: { id: props.userId },
  });
  if (loading) return "Loading...";
  if (error) return `Error ${error.message}`;

  return (
    <div>
      {data.fetchUserFollowers.length ? (
        data.fetchUserFollowers.map((follower) => (
          <ul key={follower.id} class="list-disc">
            <li>{follower.firstName} {follower.lastName}</li>
          </ul>
        ))
      ) : (
        <p>there are no followers</p>
      )}
    </div>
  );
};

export default FollowersList;
