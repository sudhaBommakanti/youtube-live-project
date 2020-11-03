import "./styles/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import VideoPage from "./components/VideoPage/VideoPage";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/video" component={VideoPage} />
      </Switch>
    </Router>
  );
}

export default App;
