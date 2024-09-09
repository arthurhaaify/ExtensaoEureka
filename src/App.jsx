import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Lista from "./components/Lista/Lista";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="*" element={<Lista />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
