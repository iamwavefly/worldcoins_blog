import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import placeholder from "../images/placeholder.png";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(10, 0, 0, 0.1);
  overflow: hidden;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100% !important;
  background-image: linear-gradient(
    to bottom,
    rgba(71, 42, 8, 0.1),
    rgba(110, 66, 15, 0.4)
  );
  z-index: 10;
`;
const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  z-index: 5;
`;
const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
// post title
const Title = styled.h2`
  position: absolute;
  left: 5%;
  bottom: 10%;
  font-size: 35px;
  font-weight: 600;
  line-height: 2.4rem !important;
  font-family: "Vollkorn", serif;
  letter-spacing: 0;
  -webkit-line-clamp: 2;
  width: 80%;
  z-index: 9999;
  & > a {
    color: #fff !important;
    text-decoration: none;
  }
`;
const CategoryTag = styled.div`
  position: absolute;
  left: 4%;
  top: 10%;
  padding: 4px 10px;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: space-evenly;
  border-radius: 40px;
  font-size: 13px;
  background-color: #a26b2c;
  box-shadow: 0 5px 10px rgba(10, 0, 0, 0.1);
  z-index: 9999;
`;
const ShareIcon = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  bottom: 10%;
  right: 5%;
  padding: 10px;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: space-evenly;
  border-radius: 50%;
  font-size: 13px;
  background-color: #a26b2c;
  box-shadow: 0 5px 10px rgba(10, 0, 0, 0.1);
  cursor: pointer;
  display: grid;
  place-items: center;
  z-index: 9999;
  & > i {
    font-size: 26px;
  }
`;

class MainTopAds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      console.log(this.props.posts);
    }, 5000);
  }
  render() {
    return (
      <AutoplaySlider
        animation="openAnimation"
        play={true}
        cancelOnInteraction={false}
        interval={10000}
      >
        {this.props.posts.map((post) => (
          <Thumbnail>
            <CategoryTag>from WorldCoins</CategoryTag>
            <Link to={post.slug}>
              <Overlay></Overlay>
              <ThumbnailImg src={post.thumbnail} />
            </Link>
            <ShareIcon>
              <i class="las la-envelope"></i>
            </ShareIcon>
            <Title>
              <Link to={post.slug}>
                {post.title.length > 80
                  ? post.title.substring(0, 80) + "..."
                  : post.title}
              </Link>
            </Title>
          </Thumbnail>
        ))}
      </AutoplaySlider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.filter((post) => post.category === "Advert"),
  };
};

export default connect(mapStateToProps)(MainTopAds);
