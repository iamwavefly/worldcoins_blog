import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostDetails from "./PostDetails";

const Card = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-right: 20px;
`;
// post title
const Title = styled.h2`
  color: rgba(41, 41, 41, 1);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.6rem;
  margin-top: 10px;
  & > a {
    text-decoration: none;
    color: inherit;
    transition: color 0.4s ease;
    &:hover {
      color: #333;
    }
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;
// thumbnail
const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
  border-radius: 5px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
const DateCreated = styled.h4`
  color: rgb(100, 100, 100);
  font-size: 13px;
  font-weight: 500;
`;

export default class PostCard extends Component {
  render() {
    return (
      <Card>
        <Thumbnail>
          <Link to={this.props.slug}>
            <Overlay></Overlay>
            <Img src={this.props.thumbnail} />
          </Link>
        </Thumbnail>
        <Content>
          <PostDetails />
          <Title>
            <Link to={this.props.slug}>
              {this.props.title.substring(0, 45)}
            </Link>
          </Title>
          <DateCreated>
            <Moment fromNow>{this.props.dateCreated}</Moment>
          </DateCreated>
        </Content>
      </Card>
    );
  }
}
