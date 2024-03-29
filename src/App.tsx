import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAuthHandler from "./components/GoogleAuthHandler";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const handleThemeChange = () => {
    setIsDark(!isDark);
  };
  return (
    <div
      className={
        isDark
          ? `dark h-full w-full flex flex-col items-start justify-start`
          : `h-full w-full flex flex-col items-start justify-start`
      }
    >
      <Header handleThemeChange={handleThemeChange} />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route
            path="/api/v1/auth/google/callback"
            Component={GoogleAuthHandler}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
