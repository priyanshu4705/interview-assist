import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Editor from "./components/Editor";
import WhiteBoard from "./components/WhiteBoard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="editor" element={<Editor />} />
          <Route path="whiteboard" element={<WhiteBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
