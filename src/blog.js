import React, { Component } from 'react';
import './App.css';

class Blog extends Component {
   render() {

    const allPosts = this.props.posts.map(p => {
      return (
          <div>
              <h1 className="title">{p.title}</h1>
              <Author names={p.author} />
              <p>{p.content}</p>
              <div>
                 <Comment comments={p.comments} />
              </div>
          </div>
      );
    });

   return (
     <div className="Blog">

      {allPosts}
      {/* This is a comment!!!! */}

     </div>
   );
 }
}

class Author extends Component {
   render() {
      //can only return ONE element, need to wrap in a single element (div)
      return (
         <div>Author component: {this.props.names}</div>
      );
   }
}

class Comment extends Component {
   render() {
      const allComments = this.props.comments.map( c => {
         return <p>&lsquo; {c} &rsquo;</p>
      });
      //can only return ONE element, need to wrap in a single element (div)
      return (
         <div>Comments: {allComments}</div>
      );
   }
}


export default Blog;
