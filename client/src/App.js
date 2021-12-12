import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes/Routes";
import { LoginContext } from "./context/loginContext";

function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <LoginContext.Provider value={{ loginUser, setLoginUser }}>
      <GlobalStyle />
      <Routes loginUser={loginUser} setLoginUser={setLoginUser} />
    </LoginContext.Provider>
  );
}

export default App;
