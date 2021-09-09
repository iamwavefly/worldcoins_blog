import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListCard from "./ListCard";
import MediumCard from "./MediumCard";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 29rem;
  min-height: 0;
  background: #fff;
  margin-top: 20px;
  margin-left: -15px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 20px;
  border: 1px solid #f1f1f1;
  padding: 15px;
`;
class RecentPosts extends Component {
  componentDidMount() {}
  render() {
    if (!this.props.posts.length > 0) {
      return <div>Loading...</div>;
    }
    return (
      <Container>
        <MediumCard
          title={this.props.posts[0].title}
          slug={this.props.posts[0].slug}
          content={this.props.posts[0].content}
          dateCreated={this.props.posts[0].date}
          thumbnail={this.props.posts[0].thumbnail}
        />
        <ListCard />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(RecentPosts);
