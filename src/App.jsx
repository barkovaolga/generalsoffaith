import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Videos from "./pages/Videos/Videos";
import Biographies from "./pages/Biographies/Biographies";
import Community from "./pages/Community/Community";
import Books from "./pages/Books/Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/biographies" element={<Biographies />} />
        <Route path="/community" element={<Community />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
