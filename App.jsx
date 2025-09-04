import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddItem from "./AddItem";
import NotFound from "./NotFound";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>AffordMed React App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Item</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;