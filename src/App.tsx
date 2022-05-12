import { Route, BrowserRouter, Routes } from "react-router-dom";

import Details from "./pages/Details";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
