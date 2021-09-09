import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPosts } from "./reducers/posts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/header/Navbar";
import BlogContainer from "./Components/Content/BlogContainer";
import PostContent from "./Components/Content/PostContent";
import SideBarAds from "./Components/ads/SideBarAds";
import Footer from "./Components/Content/Footer";
import PostPage from "./Components/Pages/PostPage";

const Container = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  min-height: 80vh;
  margin: 0 auto;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 40px;
  z-index: 2;
`;
const LeftColumn = styled.div`
  width: 100%;
`;
const RightColumn = styled.div`
  width: 100%;
`;

class App extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/post/new" render={(props) => <PostPage {...props} />} />
          <Container>
            <LeftColumn>
              <Route exact path="/">
                <BlogContainer />
              </Route>
              <Route
                path="/:slug"
                render={(props) => <PostContent {...props} />}
              />
            </LeftColumn>

            <RightColumn>
              <SideBarAds />
            </RightColumn>
          </Container>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchprops = (dispatch) =>
  bindActionCreators(
    {
      getPosts: getPosts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchprops)(App);
