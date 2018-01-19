import React, { Component } from 'react';
import './App.css';
import {
   BrowserRouter as Router,
   Route,
   Link
} from "react-router-dom";
import Home from "./home.js";
import Blog from "./blog.js";
import Movie from "./movie.js";
import Food from "./food.js";
import About from "./about.js";


var posts= [];

posts.push({
   title: "Dinosaurs are awesome",
   author: "Stealthy Stegosaurus",
   body: "Check out this body property!",
   comments: ["First!", "Great post", "Hire this author now!"]
});

posts.push({
   title: "DInosaurs eat lots of food",
   author: "Stealthy Stegosaurus",
   body: "blah blah blah",
   comments: ["what!", "Great post", "good stuff"]
});

var authors = [
   "him",
   "her",
   "them",
   "us"
];

class App extends Component {
  render() {
    return (
      <Router>
         <div>
            <nav className="navbar bgcolor-1">
               <div className=" columns  ">
                  <div className="navbar-brand column ">
                     LOGO
                  </div>
                  <div className="navbar-menu has-text-right column ">
                     <Link to="/">Homepage</Link>
                     <Link to="/blog">Blog</Link>
                     <Link to="/movie">Movie</Link>
                     <Link to="/food">Food</Link>
                     <Link to="/about">About</Link>
                  </div>
               </div>
            </nav>
            <div className="columns column is-centered">
               <div className="spacer"></div>

               <Route exact path="/" component={Home} />
               <Route exact path="/blog" component={() => (<Blog
                     posts={posts}/>
               )} />
               <Route exact path="/movie" component={Movie} />
               <Route exact path="/food" component={Food} />
               <Route exact path="/about" component={About} />
            </div>

         </div>

      </Router>
    );
  }
}

export default App;
