import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import GoogleAuthButton from "./components/GoogleAuthButton";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/dashboard" Component={Dashboard} />
        {/* Add more routes as needed */}
      </Routes>
      <GoogleAuthButton />
    </Router>
  );
};

export default App;
