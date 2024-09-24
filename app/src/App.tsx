import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header/header";
import Content from "./components/content";
import { BrowserRouter as Router } from "react-router-dom";

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
          <Content page={currentPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
