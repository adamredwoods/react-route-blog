import React, { Component } from 'react';
import './App.css';

class Home extends Component {

   // componentDidMount() {
   //    twttr.widgets.load();
   // }

  render() {
    return (
      <div className="Home ">
         <a className="twitter-timeline twitter-wjs" href="https://twitter.com/TwoPiSoftware?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
         <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    );
  }
}

export default Home;
