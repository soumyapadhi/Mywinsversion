import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme";
import Header from "../components/ui/Header";
import Memo from "./Memo";
import Home from "./Home";
import table from "./table";
import paper from "../components/ui/paper";
import Oneview from "./gmp";
import login from "../components/ui/login";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
         <Header/>
         <Switch>
          <Route exact path="/" component={() => <div>Test</div>} />
          <Route exact path="/Home"
          render={props => (
            <Home
            {...props}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            />
           )}
          />
          <Route exact path="/Memo Delete"
          render={props => (
            <Memo Delete
            {...props}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            />
           )}
          />
          <Route exact path="/simple table" component={table} />
          <Route exact path="/GMP"
          render={props => (
            <Oneview
            {...props}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            />
           )}
          />
          <Route exact path="/login" component={login} />
         </Switch>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
