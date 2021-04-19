import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicLayout from "./PublicLayout/PublicLayout";
import Content from "./Content/Content";
import Films from "./NavbarComponents/Films";
import FilmsDetay from "./NavbarComponents/FilmsDetay";
import People from "./NavbarComponents/People";
import PeopleDetay from "./NavbarComponents/PeopleDetay";

const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={() => <PublicLayout>{children}</PublicLayout>} />
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PublicRoute path="/film-project" exact>
            <Content />
          </PublicRoute>
          <PublicRoute path="/film-project/people" exact>
            <People />
          </PublicRoute>
          <PublicRoute path="/film-project/people/:id" exact>
            <PeopleDetay />
          </PublicRoute>
          <PublicRoute path="/film-project/films" exact>
            <Films />
          </PublicRoute>
          <PublicRoute path="/film-project/films/:id" exact>
            <FilmsDetay />
          </PublicRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
