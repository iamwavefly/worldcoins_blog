import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10rem;
  width: 100%;
  border-radius: 5px;
  display: grid;
  place-items: center;
  background: #eee;
  color: #888;
  margin-top: 20px;
  font-size: 28px;
  border: 1px solid #eee;
  box-shadow: 0 5px 10px rgba(10, 0, 0, 0.1);
`;

export default class LandScaleAds extends Component {
  render() {
    return <Container>ADS LANDSCALE</Container>;
  }
}
