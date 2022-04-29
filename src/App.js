import './App.css';
import HomePage from './pages/HomePage/HomePage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {

  render() {

    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/video" component={VideoPlayer}/> 
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
