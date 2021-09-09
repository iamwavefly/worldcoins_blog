import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LandScaleAds from "../ads/LandScaleAds";
import MainTopAds from "../ads/MainTopAds";
import RecentPostList from "./RecentPostList";
import RecentPosts from "./RecentPosts";
import TrendingPosts from "./TrendingPosts";
import SectionTitle from "./SectionTitle";

import Loader from "../Loader";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

class BlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.posts);
    setTimeout(() => {
      console.log(this.props.posts);
    }, 5000);
  }
  render() {
    if (!this.props.posts.length > 0) {
      // return <div>Loading</div>;
      return <Loader />;
    }
    return (
      <Container>
        <MainTopAds />
        <div className="mt-4"></div>
        {/* title section */}
        <SectionTitle title="Editor's Pick" />
        {/* title section ends */}
        <RecentPosts />
        <LandScaleAds />
        {/* title section */}
        <br />
        <br />
        <SectionTitle title="Trending" />
        {/* title section ends */}
        <TrendingPosts />
        {/* title section */}
        <br />
        <br />
        <SectionTitle title="Recent Updates" />
        {/* title section ends */}
        <RecentPostList />
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(BlogContainer);
