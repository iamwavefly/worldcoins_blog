import React, { Component } from "react";
import Axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: grid;
  place-items: center;
  padding: 5rem 0;
`;
const Form = styled.div`
  width: 40rem;
  height: auto;
  min-height: 20rem;
  padding: 20px;
  border-radius: 10px;
`;
const Title = styled.input`
  width: auto;
  max-width: 100%;
  height: auto;
  min-height: 0rem;
  border: none;
  border-left: 1px solid #f1f1f1;
  font-size: 48px;
  color: rgba(41, 41, 41, 1);
  font-family: "Vollkorn", serif;
  outline: none;
  padding: 10px 20px;
`;
const Thumbnail = styled.input`
  width: auto;
  max-width: 100%;
  height: auto;
  min-height: 0rem;
  border: none;
  margin-top: 10px;
  border-left: 1px solid #f1f1f1;
  font-size: 18px;
  color: #888;
  font-family: "Vollkorn", serif;
  outline: none;
  padding: 10px 20px;
`;
const Content = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 10rem;
  margin-top: 10px;
  border: none;
  border-left: 1px solid #f1f1f1;
  font-size: 18px;
  color: rgba(41, 41, 41, 1);
  font-family: "Vollkorn", serif;
  outline: none;
  padding: 10px 20px;
`;
const Category = styled.select`
  width: 100%;
  height: auto;
  margin-top: 10px;
  border: none;
  border-left: 1px solid #f1f1f1;
  font-size: 18px;
  color: rgba(41, 41, 41, 1);
  font-family: "Vollkorn", serif;
  outline: none;
  padding: 10px 20px;
  background: none;
`;
const Tags = styled.input`
  width: auto;
  max-width: 100%;
  height: auto;
  border: none;
  border-left: 1px solid #f1f1f1;
  font-size: 18px;
  margin-top: 10px;
  color: rgba(41, 41, 41, 1);
  font-family: "Vollkorn", serif;
  outline: none;
  padding: 10px 20px;
`;
const PassCode = styled.input`
  width: 100%;
  height: auto;
  border: none;
  border-left: 1px solid #f1f1f1;
  font-size: 18px;
  margin-top: 10px;
  color: rgba(41, 41, 41, 1);
  font-family: "Vollkorn", serif;
  outline: none;
  padding: 10px 20px;
`;
const SubmitBtn = styled.button`
  width: 100%;
  border: none;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  outline: none;
  padding: 10px 20px;
  background-color: #a26b2c;
  box-shadow: 0 5px 10px rgba(10, 0, 0, 0.1);
`;
class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      category: "",
      tags: [],
      thumbnail: null,
      approvalCode: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ thumbnail: e.target.files[0] });
  }
  async handleSubmit(e) {
    const createFormData = (data) => {
      return Object.keys(data).reduce((formData, key) => {
        formData.append(key, data[key]);
        return formData;
      }, new FormData());
    };
    const data = createFormData(this.state);

    const newPost = await Axios.post("http://localhost:4001/post/new", data);
    if (newPost.status === 201) {
      window.location = "/";
    }
  }
  render() {
    return (
      <Container>
        <Form>
          <Title
            name="title"
            onChange={(e) => this.setState({ title: e.target.value })}
            placeholder="Title..."
          />
          <Content
            name="content"
            onChange={(e) => this.setState({ content: e.target.value })}
            placeholder="Write article here..."
          />
          <Category
            name="category"
            onChange={(e) => this.setState({ category: e.target.value })}
          >
            <option selected disabled>
              Select category
            </option>
            <option value="Business">Business</option>
            <option value="Advert">Advert</option>
            <option value="Update">Update</option>
            <option value="Strateg">Strategy</option>
          </Category>
          <Tags
            name="tags"
            onChange={(e) => this.setState({ tags: e.target.value })}
            placeholder="Add tags seperate with comma"
          />
          <Thumbnail
            name="thumbnail"
            onChange={this.handleChange}
            accept="image/*"
            type="file"
          />
          <PassCode
            name="approvalCode"
            onChange={(e) => this.setState({ approvalCode: e.target.value })}
            type="password"
            placeholder="Approval code"
          />
          <SubmitBtn type="submit" onClick={this.handleSubmit}>
            Publish
          </SubmitBtn>
        </Form>
      </Container>
    );
  }
}

export default PostPage;
