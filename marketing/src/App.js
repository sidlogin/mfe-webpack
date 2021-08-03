import React from 'react';
import { Switch, Router, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

export default () => {
     return (
          <div>
               <StylesProvider>
                    <BrowserRouter>
                         <Switch>
                              <Route exact path="/pricing" component={Pricing} />
                              <Route exact path="/" component={Landing} />
                         </Switch>
                    </BrowserRouter>
               </StylesProvider>
          </div>
     );
}