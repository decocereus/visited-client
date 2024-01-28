import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const handleThemeChange = () => {
    setIsDark(!isDark);
  };
  return (
    <div
      className={
        isDark
          ? `dark w-screen h-screen flex items-center justify-center flex-col gap-2`
          : `w-screen h-screen flex items-center justify-center flex-col gap-2`
      }
    >
      <Header handleThemeChange={handleThemeChange} />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
