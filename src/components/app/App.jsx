/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterListContainer from '../../containers/CharacterListContainer';
import IndividualCharacterContainer from '../../containers/IndividualCharacterContainer';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterListContainer} />
        <Route path="/characters/:name" component={IndividualCharacterContainer} />
      </Switch>
    </Router>
  );
}
