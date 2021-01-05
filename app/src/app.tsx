// Core
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Third packages
import FormPageFields from "./FormPageFields";
import FormPageGrid from "./FormPageGrid";
import FormPageSubmit from "./FormPageSubmit";
import FormPageValidation from "./FormPageValidation";
import Index from "./indexPage";

// Custom packages

export const App = () => {
  return (
    <Router>
      <div>
        <nav id="navigation">
          <div className="container">
            <ul>
              <li>
                <Link to="/">Index</Link>
              </li>
              <li>
                <Link to={siteRoute.grid}>Form Grid</Link>
              </li>
              <li>
                <Link to={siteRoute.validation}>Input validation</Link>
              </li>
              <li>
                <Link to={siteRoute.fields}>Input types</Link>
              </li>
              <li>
                <Link to={siteRoute.submit}>Form submit</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path={siteRoute.grid}>
            <FormPageGrid />
          </Route>
          <Route path={siteRoute.validation}>
            <FormPageValidation />
          </Route>
          <Route path={siteRoute.fields}>
            <FormPageFields />
          </Route>
          <Route path={siteRoute.submit}>
            <FormPageSubmit />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const siteRoute = {
  grid: "/form-page-grid",
  validation: "/form-page-validation",
  fields: "/form-page-fields",
  submit: "/form-submit",
};

export default App;
