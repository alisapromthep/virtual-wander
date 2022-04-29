import './App.css';
import HomePage from './pages/HomePage/HomePage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {

//   const submitHandler = (event)=>{
//     event.preventDefault();

//     console.log(event.target.city.value)
//     console.log(event.target.transport.value)

// 

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
