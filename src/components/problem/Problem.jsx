import React, { useState } from "react";
import "./problem.css";

import { useSelector } from "react-redux";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript"; // Импорт режима JavaScript
import "ace-builds/src-noconflict/theme-monokai"; // Импорт темы оформления

const Problem = () => {
  const [solution, setSolution] = useState("");
  const problem = useSelector((state) => state.problems.problem);
  const handleClick = () => {};

  return (
    <main className="problem-main">
      <div className="container">
        <div className="problem-wrapper">
          <div className="problem-content">
            <h4 className="problem-title">{problem.title}</h4>
            <p>{problem.level}</p>
            <ul className="problem-text">
              {problem?.description?.split("\n").map((item, index) => (
                <li key={index}>
                  {item.includes("Example") ? (
                    <>
                      <p>{item}</p> <img src={`${problem.imgUrl}`} alt="" />
                    </>
                  ) : (
                    <p>{item}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="problem-ace-editor">
            <button className="problem-button" onClick={handleClick}>Check</button>

            <AceEditor
              placeholder="Placeholder Text"
              mode="javascript"
              theme="monokai"
              name="blah2"
              style={{ width: "900px", zIndex: 1 }}
              fontSize={16}
              lineHeight={28}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={solution}
              editorProps={{ $blockScrolling: true }}
              onChange={(e) => setSolution(e)}
            />
          </div>
        </div>

        {/* <img src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1718726342/Screen_Shot_2024-06-18_at_8.58.38_AM_ru71nm.png" alt={problem.title} /> */}
      </div>
    </main>
  );
};

export default Problem;
