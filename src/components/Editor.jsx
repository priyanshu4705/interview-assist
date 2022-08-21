import MonacoEditor from "react-monaco-editor";
import React from "react";

const Editor = () => {
  const lanoptions = [
    { label: "C++", value: "c++" },
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
  ];
  const [currentlan, setCurrentlan] = React.useState("c++");
  const handlelanChange = (e) => {
    setCurrentlan(e.target.value);
  };

  let value = ["function x() {", '\tconsole.log("Hello world!");', "}"].join(
    "\n"
  );
  let language = "javascript";
  const handleEditorChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <Dropdown
        label="Change Language"
        options={lanoptions}
        value={currentlan}
        onChange={handlelanChange}
      />
      <p> current lan : {currentlan}</p>
      <MonacoEditor
        width="800"
        height="600"
        language={currentlan}
        theme="vs-dark"
        value={value}
        onChange={handleEditorChange}
      />
    </>
  );
};
const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Editor;
