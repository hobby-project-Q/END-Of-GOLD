import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import "./style/reset.css";
import "./style/common.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
