import React, { useEffect, useState } from 'react';
import "./modal.css";
import { useDispatch, useSelector } from 'react-redux';
import { showModalAction } from '../../store/reducers/modalReducer';
import AceEditor from "react-ace";

const Modal = () => {
    const dispatch = useDispatch();
    const choices = useSelector(state => state.answer.answer);
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        const answer = choices.reduce((acc, curr) => {
            acc += `Question:\n ${curr.question}\n Answer:\n ${curr?.answer[0]?.message?.content}\n `;
            return acc;
        }, "");
        setAnswer(answer);
    }, [choices]);

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span onClick={() => dispatch(showModalAction(false))} className="close">&times;</span>
                <div>
                    <AceEditor
                        placeholder="Placeholder Text"
                        mode="javascript"
                        theme="monokai"
                        name="editor"
                        style={{ width: "100%", maxWidth: "600px" }}
                        fontSize={16}
                        lineHeight={28}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={answer}
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{ 
                            useWorker: false,
                            displayIndentGuides: false,
                            highlightActiveLine: true,
                            showLineNumbers: true,
                            tabSize: 2,
                            wrap: true // This will enable text wrapping
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;
