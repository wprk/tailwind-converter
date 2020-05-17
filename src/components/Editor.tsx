import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const Editor = ({ id, contents = '', mode, onChange, onFocus, onPaste, placeholder }: any) => (
  <div className="mt-1 relative rounded-md shadow-sm">
    <AceEditor
      className="w-4/5"
      placeholder={placeholder}
      mode={mode}
      theme="github"
      name={id}
      onChange={onChange}
      onFocus={onFocus}
      onPaste={onPaste}
      value={contents}
      setOptions={{
        enableLiveAutocompletion: true,
        tabSize: 2
      }}
    />
  </div>
)

export default Editor
