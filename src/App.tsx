import { BrowserRouter, Routes, Route } from "react-router";
import Page from "./pages/page/page";
import "./scss/App.scss";
import ComicsPage from "./pages/comicsPage/comicsPage";

const App = () => {
  return (
    <BrowserRouter basename="/twoWebCamp">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/comics" element={<ComicsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
