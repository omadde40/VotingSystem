import React from "react";
import "./Style/Index.css";
import { Link } from "react-router-dom";
import useAuthListener from "../Hooks/use-auth-listener";
function Index() {
  const { user } = useAuthListener();
  return (
    <div className="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/220px-Emblem_of_India.svg.png"
        alt="votinglogo"
      />
      <h3>Welcome to Aadhaar-Voting</h3>

      <Link to={user ? "/voting" : "/login"}>
        <button className="button1" type="submit">
          Vote Here
        </button>
      </Link>

      <Link to="ragister">
        <button className="button1" type="submit">
          Ragister Youself
        </button>
      </Link>
    </div>
  );
}

export default Index;
