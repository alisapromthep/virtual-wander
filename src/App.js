import './App.css';
import HomePage from './pages/HomePage/HomePage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {

  state = {
    city: null,
    transport: null,
  }


  submitHandler = (event)=>{
    event.preventDefault();

    console.log(event.target.city.value)
    console.log(event.target.transport.value)

    const selectCity = event.target.city.value;
    const selectTransport = event.target.transport.value;

    this.setState({
      city: selectCity,
      transport: selectTransport,
    })
  }

  render() {

    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact 
          render={()=>{
            return (
              <HomePage submitHandler={this.submitHandler}/>
            )
          }}/>
          <Route path="/video" render={()=>{
            return (
              <VideoPlayer city={this.state.city} 
              transport={this.state.transport} />
            )
          }}/> 
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
