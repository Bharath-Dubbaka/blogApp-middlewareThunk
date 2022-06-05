import { connect } from "react-redux";
import { fetchUser } from "../actions";
import React, { Component } from "react";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }
    // console.log(this.props.user);
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //   console.log(ownProps);
  return {
    user: state.userReducer.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchUser: fetchUser })(UserHeader);
