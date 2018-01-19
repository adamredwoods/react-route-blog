import React, { Component } from 'react';
import './App.css';

class Home extends Component {

   // componentDidMount() {
   //    twttr.widgets.load();
   // }
   constructor(props) {
      super(props);
      this.state = {
         shakeSpeare: ""
      }

      this.timer=0;
   }




   componentDidMount() {
      var base = this;

      // if(this.timer) {
      //    clearInterval(this.timer);
      // }
      // this.timer = setInterval((refresh) => {
      //    let poemApi = "http://ShakeItSpeare.com/api/poem";
      //    fetch(poemApi)
      //    .then((response) => {
      //       return response.json();
      //    }).then((json) => {
      //       base.setState({shakeSpeare: json.poem});
      //    }).catch((err) => {
      //       console.log("JSON fetch error ",err);
      //    })
      // }, 3000);

      let poemApi = "http://ShakeItSpeare.com/api/poem";
         fetch(poemApi)
         .then((response) => {
            return response.json();
         }).then((json) => {
            base.setState({shakeSpeare: json.poem});
         }).catch((err) => {
            console.log("JSON fetch error ",err);
         })
   }

   componentWillUnmount() {
      //clearInterval(this.timer);
   }

  render() {

     let poetry = this.state.shakeSpeare;
     if(!this.state.shakeSpeare) {
        poetry = "loading....";
     }

    return (
      <div className="Home ">
         <div>
            <h2><i>{poetry}</i></h2>
         </div>
         <div> Twitter </div>
         <a className="twitter-timeline twitter-wjs" href="https://twitter.com/TwoPiSoftware?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
         <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    );
  }
}

export default Home;
