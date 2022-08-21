import MonacoEditor from 'react-monaco-editor';

const Editor = () => {
  let value = [
    'function x() {',
    '\tconsole.log("Hello world!");',
    '}'
  ].join('\n');
  let language = 'javascript';
  const handleEditorChange = (value) => {
    console.log(value);
  }
  return (
    <MonacoEditor
    width="800"
    height="600"
    language="javascript"
    theme="vs-dark"
    value={value}
    onChange={handleEditorChange}
    
  />
  )
};

export default Editor;
