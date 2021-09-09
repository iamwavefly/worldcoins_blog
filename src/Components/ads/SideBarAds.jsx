import React, { Component } from "react";
import { connect } from "react-redux";
import FluidCard from "../Content/FluidCard";
import styled from "styled-components";
import SectionTitle from "../Content/SectionTitle";

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
`;

class SideBarAds extends Component {
  render() {
    return (
      <Container>
        <SectionTitle title="Sponsored Ads" />
        <br />
        {this.props.posts.slice(0, 3).map((post) => (
          <FluidCard
            title={post.title.substring(0, 26)}
            titleSize="16px"
            thumbnail={post.thumbnail}
            slug={post.slug}
            category={post.category}
            content={post.content.substring(0,35)}
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

export default connect(mapStateToProps)(SideBarAds);
