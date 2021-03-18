import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { View } from "./styles/viewContainer";
import ExtraServices from "./views/ExtraServices/ExtraServices";
import ServicesState from "./context/services/servicesState";

const GlobalStyles = createGlobalStyle`
* { 
    box-sizing: border-box;
    margin:0;
    font-family:  'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu';
  }
*:focus {
    outline: none;
}
`;

function App() {
  return (
    <ServicesState>
      <Router>
        <GlobalStyles />
        <View>
          <Route exact path="/" component={ExtraServices} />
        </View>
      </Router>
    </ServicesState>
  );
}

export default App;
