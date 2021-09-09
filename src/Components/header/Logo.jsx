import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../images/logo.png";

const ImgContainer = styled.div`
  width: 100%;
  height: 90%;
  marging: auto 0;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <ImgContainer>
          <Img src={LogoImg} />
        </ImgContainer>
      </Link>
    );
  }
}
