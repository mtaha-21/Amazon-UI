import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
