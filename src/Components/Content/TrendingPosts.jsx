import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MediumCard from "./MediumCard";

const Container = styled.div`
  width: 100%;
  height: 28rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-top: 20px;
  margin-left: -15px;
  border-radius: 20px;
  border: 1px solid #f1f1f1;
  padding: 15px;
`;

class TrendingPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: Math.floor(Math.random() * this.props.posts.length),
    };
  }
  render() {
    // if (!this.props.posts.length > 0) {
    //   return <div>Loading...</div>;
    // }
    return (
      <Container>
        <MediumCard
          title={this.props.posts[this.state.randomNum].title}
          slug={this.props.posts[this.state.randomNum].slug}
          content={this.props.posts[this.state.randomNum].content}
          dateCreated={this.props.posts[this.state.randomNum].date}
          thumbnail={this.props.posts[this.state.randomNum].thumbnail}
        />
        <MediumCard
          title={this.props.posts[0].title}
          slug={this.props.posts[0].slug}
          content={this.props.posts[0].content}
          createdDate={this.props.posts[0].date}
          thumbnail={this.props.posts[0].thumbnail}
        />
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(TrendingPosts);
