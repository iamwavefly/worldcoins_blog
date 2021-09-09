import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostCard from "./PostCard";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 100px);
  grid-gap: 15px;
`;

class ListCard extends Component {
  render() {
    return (
      <Container>
        {this.props.posts.slice(1, 5).map((post) => (
          <PostCard
            title={post.title}
            content={post.content}
            thumbnail={post.thumbnail}
            slug={post.slug}
            dateCreated={post.date}
          />
        ))}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(ListCard);
