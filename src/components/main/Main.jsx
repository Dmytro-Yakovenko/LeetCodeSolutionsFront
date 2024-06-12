import React from "react";

import "./main.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Main = () => {
    const allProblems = useSelector(state=>Object.values(state.problems.problems))
  return (
    <main className="main">

<div className="container">
        
        <ul>
          {allProblems.map((item) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link to={item.id}>Show Solution</Link>
            </li>
          ))}
        </ul>
      </div>

    </main>
   
  );
};

export default Main;
