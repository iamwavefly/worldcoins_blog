import React, { Component } from "react";
import styled from "styled-components";
import underlineImg from "../images/underline.png";

const Container = styled.div``;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0;
  -webkit-line-clamp: 2;
  color: rgba(41, 41, 41, 1);
`;
const Img = styled.img`
  height: 8px;
  margin-top: 10px;
`;

export default class SectionTitle extends Component {
  render() {
    return (
      <Container className="sectionTitle">
        <Title>{this.props.title}</Title>
        <Img src={underlineImg} />
      </Container>
    );
  }
}
