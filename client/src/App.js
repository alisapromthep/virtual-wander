import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:8080/videos'

class App extends Component {

  state = {
    isFormSubmit: false,
    videoArray: [],
  }


  submitHandler = (event)=>{
    event.preventDefault();

    const selectCity = event.target.city.value;
    const selectTransport = event.target.transport.value;

    axios
      .get(`${API_URL}`)
      .then((response)=>{
          const videoData = response.data 
          console.log(videoData)

          const videoArray = videoData.filter((video)=>{
              if (video.city === selectCity && video.mode === selectTransport) {
                  return true 
              } 
          })
          console.log(videoArray)

          this.setState({
            isFormSubmit: true,
            videoArray: videoArray,
          })

      })
      .catch((error)=>{console.log(`error getting data`)})

  }

  render() {

    if (this.state.isFormSubmit) {
      return (
        <div>
        <Header />
      <VideoPlayer 
        videoArray={this.state.videoArray} />
        <Footer />
        </div>
        )
    }

    return (
      <div>
        <Header />
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
        <Footer />
      </div>
    );
  }
}

export default App;
