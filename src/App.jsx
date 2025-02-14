import { BrowserRouter, Route, Routes } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import Generate from "./pages/Generate/Generate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path="generate" element={<Generate />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
