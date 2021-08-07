import React from 'react';
import Money from './views/Money';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import {Tag} from './Tag';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/tag/:tag" exact>
                        <Tag/>
                    </Route>
                    <Route path="/tags" exact>
                        <Tags/>
                    </Route>
                    <Route path="/money" exact>
                        <Money/>
                    </Route>
                    <Route path="/statistics" exact>
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*" exact>
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;
