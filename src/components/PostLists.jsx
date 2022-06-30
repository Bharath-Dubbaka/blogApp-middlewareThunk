import React, { Component } from "react";
import { connect } from "react-redux";
import {
  // fetchPosts,
  fetchPostsAndUser,
} from "../actions";
import UserHeader from "./UserHeader";

class PostLists extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUser();
  }

  renderedPosts = () => {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="ui relaxed divided list">{this.renderedPosts()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer,
  };
};

export default connect(mapStateToProps, {
  fetchPostsAndUser: fetchPostsAndUser,
})(PostLists);
