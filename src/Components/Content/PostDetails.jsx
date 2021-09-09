import React, { Component } from "react";
import styled from "styled-components";
import avatarPlaceholder from "../images/avatar.jpg";
import Moment from "react-moment";

const Container = styled.div`
  width: 100%;
  height: 28px;
  display: grid;
  grid-template-columns: 28px 50px 1fr;
  grid-gap: 5px;
  align-items: center;
`;
const Avatar = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  overflow: hidden;
`;
const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Author = styled.h4`
  color: rgba(80, 80, 80, 1);
  font-size: 13px;
  font-weight: 500;
`;
const DateCreated = styled.h4`
  color: rgba(80, 80, 80, 1);
  font-size: 13px;
  font-weight: 500;
  padding-left: 10px;
  border-left: 1px solid #eee;
`;

export default class PostDetails extends Component {
  render() {
    return (
      <Container>
        <Avatar>
          <AvatarImg src={avatarPlaceholder} />
        </Avatar>
        <Author>Admin</Author>
        <DateCreated>
          <Moment fromNow>{this.props.dateCreated}</Moment>
        </DateCreated>
      </Container>
    );
  }
}
