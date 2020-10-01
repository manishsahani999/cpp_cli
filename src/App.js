import React from 'react';
import NavbarContainer from 'front/components/Navbar';
import {
  Switch,
  Route,
} from "react-router-dom";
import Index from 'front/pages/Index';
import DocsPage from 'front/pages/Docs';
import Header from 'front/components/Header';
import FooterContainer from 'front/components/Footer';

function App() {
  return (
    <>
      <NavbarContainer />
      <Switch>
        <Route path={'/docs'} component={DocsPage} />
        <Route exact path={'/'} component={Index} />
      </Switch>
      <FooterContainer />
    </>
  );
}

export default App;
