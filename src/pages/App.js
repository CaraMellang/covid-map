import { createGlobalStyle } from "styled-components";
import Main from "./Main";

function App() {
  return (
    <>
      <GlobalStyled />
      <Main />
    </>
  );
}
const GlobalStyled = createGlobalStyle`
html , body , #root{
  /* height:100%; */
  background: #181818;
  /* background: #181818; */
  /* #121212 */
  font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
}
a, a:link, a:visited , a:hover , a:focus{
  text-decoration:none;
  color:unset
}
`;

export default App;
