import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Search from "pages/Search";
import SearchDetail from "pages/SerachDetail";
import Forms from "pages/Forms";
import MyPage from "pages/MyPage";
import ReviseInfo from "pages/ReviseInfo";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Root/>}>
          <Route path="" element={<Search/>}/>
          <Route path="search/:id" element={<SearchDetail/>}/>
          <Route path="forms" element={<Forms/>}/>
          <Route path="forms/:id" element={<Forms/>}/>
          <Route path="myPage" element={<MyPage/>}/>
          <Route path="reviseInfo" element={<ReviseInfo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
