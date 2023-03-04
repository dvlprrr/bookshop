import styled from "styled-components";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const Page = styled.div`
  font-family: 'Montserrat';
`

function App() {
  return (
    <Page>
      <Header />
      <Main />
    </Page>
  );
}

export default App;
