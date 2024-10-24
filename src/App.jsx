import Blog from "./componants/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogInfo from "./componants/BlogInfo";
import Shimmer from "./componants/Shimmer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />}></Route>
          <Route path="/Shimmer" element={<Shimmer />}></Route>

          <Route path="/Blog/:id" element={<BlogInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
