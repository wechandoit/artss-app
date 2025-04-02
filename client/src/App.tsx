import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PatientsPage from "./pages/patients.tsx";
import Notifications from "./pages/notifications";
import Settings from "./pages/settings";
import Help from "./pages/help";

function App() {
  // the page to render
  const [currentPage, setCurrentPage] = useState("/");

  // function to set page based on sidebar selection
  const handleSelect = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <Router basename="/">
      <div className="flex">
        <Sidebar page={currentPage} onSelect={handleSelect} />
        <div className="flex-col w-full">
          <Header />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patients" element={<PatientsPage />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;