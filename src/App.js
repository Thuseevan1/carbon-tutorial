import React, { Component } from 'react';
import { Button } from '@carbon/react';
import './App.scss';
import TutorialHeader from './componets/TutorialHeader';
import { Content, Theme } from '@carbon/react';

//import Content from '@carbon/react/lib/components/UIShell/Content';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
