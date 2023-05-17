// Style
import "./css/App.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Landing from "./components/Landing";
import Auth from "./components/Authentication/Auth";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
