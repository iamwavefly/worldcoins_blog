import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PostDetails from "./PostDetails";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Content = styled.div`
  margin-top: 20px;
  & > p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(80, 80, 80, 1);
    line-height: 1.8rem;
    padding-right: 40px;
  }
`;
// post title
const Title = styled.h2`
  font-family: "Vollkorn", serif;
  color: rgba(41, 41, 41, 1);
  font-size: 48px;
  font-weight: 400 !important;
  letter-spacing: 0;
  margin-top: 20px;
  line-height: 3rem !important;
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
// thumbnail
const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  background: #eee;
  overflow: hidden;
  margin-top: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

class PostContent extends Component {
  constructor() {
    super();
    this.state = {
      API_URL: "http://localhost:4001/post",
      post: null,
    };
  }
  async componentDidMount() {
    const { slug } = this.props.match.params;
    const post = await axios.get(`${this.state.API_URL}/${slug}`);
    console.log(this.props.match);
    this.setState({ post: post.data });
  }
  render() {
    if (!this.state.post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Title>{this.state.post.message.title}</Title>
        <PostDetails dateCreated={this.state.post.message.date} />
        <Thumbnail>
          <Overlay></Overlay>
          <Img src={this.state.post.message.thumbnail} />
        </Thumbnail>
        <Content
          dangerouslySetInnerHTML={{
            __html: this.state.post.message.sanitizedHtml,
          }}
        ></Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(PostContent);
