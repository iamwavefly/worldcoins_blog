import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostDetails from "./PostDetails";

const Container = styled.div`
  height: 140px;
  width: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  grid-gap: 15px;
  margin-top: 10px;
`;
// post title
const Title = styled.h2`
  color: rgba(41, 41, 41, 1);
  font-weight: 600;
  letter-spacing: 0;
  margin-top: 10px;
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
const Content = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: rgb(100, 100, 100);
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
const CategoryTag = styled.div`
  background: rgba(162, 107, 44, 0.1);
  width: fit-content;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 10px;
  color: #a26b2c;
  margin-top: 8px;
  font-weight: 400;
`;
export default class FluidCard extends Component {
  render() {
    return (
      <Container>
        <Thumbnail>
          <a href={this.props.slug}>
            <Overlay></Overlay>
            <Img src={this.props.thumbnail} />
          </a>
        </Thumbnail>
        <div>
          {this.props.dateCreated && <PostDetails dateCreated={this.props.dateCreated} />}
          <Title style={{fontSize: this.props.titleSize || "18px"}}>
            <a href={this.props.slug}>
              {this.props.title.length > 50 ? this.props.title.substring(0, 40) + "..." : this.props.title}
            </a>
          </Title>
          <Content>
            {this.props.content?.length > 120
              ? this.props.content.substring(0, 120) + "..."
              : this.props.content}
          </Content>
          <CategoryTag>
            <p>{this.props.category || "worldcoins"}</p>
          </CategoryTag>
        </div>
      </Container>
    );
  }
}
