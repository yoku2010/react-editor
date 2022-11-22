import React, { useState } from "react";
import Editor from "./components/editor/Editor";

const App = (): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <div className="editor-container">
      <Editor
        editorHtml={value}
        onChange={setValue}
        placeholder={"Start your contant..."}
      />
    </div>
  );
};

export default App;
