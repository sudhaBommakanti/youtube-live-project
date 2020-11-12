
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import VideoPage from "./components/VideoPage/VideoPage";
import information from "./information.json";

import "./css/style.css";

function App() {
  
  return (
    <Router>
      <Switch>
      <Route
            path="/"
            exact
            render={() => <HomePage />}
            information={information}
          />
          <Route
            path="/video/:id"
            render={({ match }) => (
              <VideoPage match={match} information={information} />
            )}
            information={information}
          />
      </Switch>
    </Router>
  );
}

export default App;
