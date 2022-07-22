import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./ReactComponents/pages/Home/Home";
import Error from "./ReactComponents/pages/Error/Error";
import Crew from "./ReactComponents/pages/Crew/Crew";

import "./App.css";

function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
