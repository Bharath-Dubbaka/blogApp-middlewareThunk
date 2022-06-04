import React, { Component } from "react";
import { connect } from "react-redux";
import {
  // fetchPosts,
  fetchPostsAndUsers,
} from "../actions";
// import UserReducer from "../reducers/usersReducer";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderedPosts() {
    return this.props.posts.map((post) => {
      // console.log(post);
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div className="ui relaxed divided list">{this.renderedPosts()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.postsReducer };
};

export default connect(mapStateToProps, {
  // fetchPosts: fetchPosts,
  fetchPostsAndUsers: fetchPostsAndUsers,
})(PostList);
