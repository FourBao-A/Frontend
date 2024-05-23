import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Search from "pages/Search";
import SearchDetail from "pages/SerachDetail";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Root />}>
          <Route path="search" element={<Search />} />
          <Route path="search/:id" element={<SearchDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
