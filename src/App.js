import React from "react";

import BL from "./BucketList";
import styled from "styled-components";

// 클래스형 컴포넌트 생김새
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "수영배우기",
        "우쿨렐레배우기",
        "우유니사막가기",
        "전시회열기",
        "살빼기",
      ],
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
    console.log(this.text.current);
  }

  addBucketList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;

    this.setState({ list: [...list, new_item] });
    console.log("되나요");
  };

  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log(this.state);
    return (
      <div>
        <MyStyled>
          <Container fntColor={"#0d6efd"}>
            <h2>
              <span style={{ fontSize: "20px", verticalAlign: "4px" }}>🌟</span>{" "}
              버킷 리스트{" "}
              <span style={{ fontSize: "20px", verticalAlign: "4px" }}>🌟</span>
            </h2>
            <FormControl
              type="text"
              ref={this.text}
              placeholder="버킷리스트 추가하기"
            />
            <Btn onClick={this.addBucketList}>🖊</Btn>
            <BL list={this.state.list} />
          </Container>
        </MyStyled>
      </div>
    );
  }
}

const MyStyled = styled.div`
  text-align: center;
  min-height: 150px;
  padding: 1rem;
  color: #fff;
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
`;

const Container = styled.div`
  max-width: 25vw;
  min-height: 40vh;
  background-color: #fff;
  padding: 2rem 1rem;
  margin: 20px auto;
  border-radius: 8px;
  color: ${(props) => (props.fntColor ? "#0d6efd" : "#fff")};
  box-shadow: 0 0 1rem 0.2rem rgba(13, 110, 253, 0.25);
`;

const Line = styled.div`
  border: 0.1px solid #0d6efd;
  margin: 20px;
`;

const FormControl = styled.input`
  font-family: inherit;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -2px;
  word-spacing: -2px;
  text-align: center;
  color: #0d6efd;
  display: inline-block;
  padding: 16px 14px 14px 14px;
  margin: 20px auto;
  min-width: 15rem;
  background-color: transparent;
  background-clip: padding-box;
  border: transparent;
  border-bottom: 5px solid #0d6efd;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  &:focus,
  &:active {
    box-shadow: 0 0 1rem 0.2rem rgba(13, 110, 253, 0.25);
    outline: 0;
  }
  &::-webkit-input-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  &::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  &:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
  }
`;

const Btn = styled.button`
  display: inline-block;
  margin: 10px;
  padding: 10px;
  font-family: inherit;
  font-size: inherit;
  font-weight: 1000;
  color: #0d6efd;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 99rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #0d6efd;
    border-radius: 99rem;
  }
  &:focus {
    outline: 0;
  }
`;

//어라 근데 빽틱안에서 ;을 하지 않아도 작동한다..?
export default App;
