import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import Read from "./pages/Read";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/create" exact component={Create} />
          <Route path="/read" exact component={Read} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
