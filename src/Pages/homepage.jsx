import React from "react";
import { useEffect, useState } from "react";
import Cards from "./cards";
function Homepage() {
  const [state, set] = useState([]);
  useEffect(() =>
    {fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((r) => r.json())
      .then((d) => set(d))},[]
  );
  return (
    <div className="home">
      {state.map((obj) => 
        <Cards name={obj?.name} username={obj?.username} mail={obj?.email} id={obj.id} />
      )}
    </div>
  );
}
export default Homepage;
