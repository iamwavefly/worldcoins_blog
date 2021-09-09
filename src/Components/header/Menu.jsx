import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../images/avatar.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 8rem 1fr;
  & > button:nth-child(4) {
    position: relative;
    width: 80%;
    height: 50%;
    margin: auto auto;
    display: flex;
    justify-content: space-evenly;
    border-radius: 40px;
    padding: 0 5px;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    opacity: 1;
    font-weight: 500;
    background-color: #a26b2c;
    box-shadow: 0 5px 10px rgba(10, 0, 0, 0.1);
    & > a{
      color: inherit;
      text-decoration: none;
    }
  }
  & > button:last-child {
    width: 100%;
    height: 60%;
    margin: auto 0;
    border-radius: 50%;
    overflow: hidden;
    opacity: 1;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const Button = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 1;
  }
  & > i {
    font-size: 22px;
    color: #666;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <Button>
          <i class="las la-search"></i>
        </Button>
        <Button>
          <i class="las la-bell"></i>
        </Button>
        <Button>
          <i class="las la-wallet"></i>
        </Button>
        <Button><Link to="/post/new">Write & Earn</Link></Button>
        <Button>
          <Img src={Avatar} />
        </Button>
      </Container>
    );
  }
}
