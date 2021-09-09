import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostDetails from "./PostDetails";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
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
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(71, 42, 8, 0.1),
    rgba(110, 66, 15, 0.4)
  );
  z-index: 10;
`;
// post title
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: 0;
  -webkit-line-clamp: 2;
  margin-top: 10px;

  & > a {
    color: rgba(41, 41, 41, 1);
    text-decoration: none;
  }
`;
const Content = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: rgb(100, 100, 100);
  margin-top: 5px;
`;
const CategoryTag = styled.div`
  position: absolute;
  left: 8%;
  top: 8%;
  padding: 4px 10px;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: space-evenly;
  border-radius: 40px;
  font-size: 13px;
  background-color: #a26b2c;
  box-shadow: 0 5px 10px rgba(10, 0, 0, 0.1);
  z-index: 99;
`;
const ShareIcon = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  bottom: 45%;
  right: 15%;
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

class MediumCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: Math.floor(Math.random() * this.props.posts.length),
    };
  }
  render() {
    if (!this.props.posts.length > 0) {
      return <div>Loading...</div>;
    }
    return (
      <Container>
        <Thumbnail>
          <CategoryTag>WorldCoins</CategoryTag>
          <Link to={this.props.slug}>
            <Overlay></Overlay>
            <ThumbnailImg src={this.props.thumbnail} />
          </Link>
        </Thumbnail>
        <ShareIcon>
          <i class="las la-envelope"></i>
        </ShareIcon>
        <div>
          <PostDetails dateCreated={this.props.date} />
          <Title>
            <Link to={this.props.slug}>
              {this.props.title.length > 80
                ? this.props.title.substring(0, 80)
                : this.props.title}
            </Link>
          </Title>
          <Content>
            {this.props.content.length > 120
              ? this.props.content.substring(0, 120) + "..."
              : this.props.content}
          </Content>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(MediumCard);
