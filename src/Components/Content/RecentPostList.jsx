import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import FluidCard from "./FluidCard";

// import ContentLoader, { Facebook } from "react-content-loader";

// const MyLoader = () => <ContentLoader />;
// const MyFacebookLoader = () => <Facebook />;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 20rem;
  background: #fff;
  margin-top: 20px;
  margin-left: -15px;
  display: grid;
  grid-gap: 15px;
  border-radius: 20px;
  border: 1px solid #f1f1f1;
  padding: 0 10px 10px 10px;
`;
const PostContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 10px;
`;

class RecentPostList extends Component {
  render() {
    if (!this.props.posts.length > 0) {
      return <div>Loading...</div>;
    }
    return (
      <Container>
        <div></div>
        <PostContainer>
          {this.props.posts.map((post) => (
            <FluidCard
              title={post.title}
              thumbnail={post.thumbnail}
              slug={post.slug}
              content={post.content}
              category={post.category}
              dateCreated={post.date}
            />
          ))}
        </PostContainer>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(RecentPostList);
