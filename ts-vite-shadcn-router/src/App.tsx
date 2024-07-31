import { Route, Routes } from "react-router-dom";

import Layout from "./layout";
import NotFound from "./not-found";

import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
