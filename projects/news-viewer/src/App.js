import { useCallback, useState } from "react";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import {Route,Routes} from 'react-router-dom'
import NewsPage from "./NewsPage";



function App() {

  return (
    <Routes>
      <Route path="/" element={<NewsPage/>}/>
      <Route path="/:category" element={<NewsPage/>}/>
    </Routes>
  );
}

export default App;
