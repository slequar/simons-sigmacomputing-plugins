import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Clock from "./plugins/clock";
import OnLoad from "./plugins/onLoad";
import Echo from "./plugins/echo";
import Comparator from "./plugins/comparator";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/onload" element={<OnLoad />} />
        <Route path="/echo" element={<Echo />} />
        <Route path="/comparator" element={<Comparator />} />
      </Routes>
    </Router>
  );
}

export default App;
