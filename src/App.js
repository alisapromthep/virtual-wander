import './App.css';
import HomePage from './pages/HomePage/HomePage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


class App extends Component {

  state = {
    city: null,
    transport: null,
    isFormSubmit: false,
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
      isFormSubmit: true,
    })

  }

  render() {

    if (this.state.isFormSubmit) {
      return (<VideoPlayer 
        city={this.state.city} 
        transport={this.state.transport} />)
    }

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
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
