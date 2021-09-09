import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import imgPlaceholder from "../images/placeholder.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  height: 10rem;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 12rem;
  grid-gap: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding: 15px 0;
`;
const ContentPanel = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr repeat(2, 1fr);
`;
const Details = styled.span`
  width: fit-content;
  font-size: 12px;
  color: #555;
  font-weight: 400;
  margin: auto 0;
  background: rgba(0, 0, 0, 0.03);
  padding: 2px 10px;
  border-radius: 10px;
  & > span {
    padding: 0 5px;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
`;
const Caption = styled.p`
  font-size: 15px;
  color: rgba(117, 117, 117, 1);
`;
// post title
const Title = styled.h2`
  color: rgba(41, 41, 41, 1);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.6rem;
  & > a {
    text-decoration: none;
    color: inherit;
    transition: color 0.4s ease;
    &:hover {
      color: #333;
    }
  }
`;
// thumbnail
const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default class PostCard extends Component {
  constructor() {
    super();
    this.readingTime = this.readingTime.bind(this);
  }
  readingTime(text) {
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm) + " mins read";
    return time;
  }
  render() {
    return (
      <Container>
        <ContentPanel>
          <Details>
            Admin{" "}
            <span>
              <Moment fromNow>{this.props.createdDate}</Moment>
            </span>
          </Details>
          <Title>
            <Link to={`/${this.props.slug}`}>{this.props.title}</Link>
          </Title>
          <Caption>
            {/* {this.props.caption.length > 60
              ? this.props.caption.substring(0, 60) + "..."
              : this.props.caption} */}
          </Caption>
          {/* <Details>{this.readingTime(this.props.caption)}</Details> */}
        </ContentPanel>
        <Thumbnail>
          <Link to={`/${this.props.slug}`}>
            <Img
              src={this.props.thumbnail}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = imgPlaceholder;
              }}
            />
          </Link>
        </Thumbnail>
      </Container>
    );
  }
}
