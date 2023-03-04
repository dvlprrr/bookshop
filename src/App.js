import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Books from "./pages/Books/Books";
import Authors from "./pages/Authors/Authors";
import Footer from "./components/Footer/Footer"
import Journal from "./pages/Journal/Journal"
import News from "./pages/News/News";
import About from "./pages/About/About";
const Page = styled.div`
  font-family: 'Montserrat';
`

function App() {
  return (
    <Page>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Page>
  );
}

export default App;
