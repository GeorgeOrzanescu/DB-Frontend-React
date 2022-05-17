import { Route, HashRouter, Routes } from "react-router-dom";

import Details from "./pages/Details";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details/:articleId" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
