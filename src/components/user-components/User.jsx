import React, { useState } from "react";
import FollowersList from "./FollowersList";

const User = ({ user }) => {

  const [state, setState] = useState(false);

  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{user.name}</h2>
        <p className="mt-2 text-gray-600">{user.firstName}</p>
        <p className="mt-2 text-gray-600">{user.lastName}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="text-xl font-medium text-indigo-500"
          onClick={() => setState(!state)}
        >
          Show followers
        </button>
      </div>
      {state && <FollowersList userId={user.id} />}
    </div>
  );
};

export default User;
