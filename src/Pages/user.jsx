import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "./cards";
function User() {
  const [state, set] = useState({});
  const param = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
      .then((r) => r.json())
      .then((d) => set(d));
  }, [param.id]);
  return (
    <div>
      <Cards
        name={state?.name}
        username={state?.username}
        mail={state?.email}
      />
    </div>
  );
}

export default User;
