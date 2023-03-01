import styled from "styled-components";

import Header from "./components/Header";
import Slider from "./components/Slider";

const Page = styled.div`
  font-family: 'Montserrat';
  /* width: 1440px;
  margin: 0 auto; */
`

function App() {
  return (
    <Page>
      <Header />
      <Slider />
    </Page>
  );
}

export default App;
