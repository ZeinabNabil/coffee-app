import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
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
