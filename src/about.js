import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="About">
         Linkedin Profile here.
      <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
      <script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/adampiette" data-format="inline" data-related="false"></script>
      </div>
    );
  }
}

export default About;
