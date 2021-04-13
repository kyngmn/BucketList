// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

const BucketList = (props) => {
  // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
  const my_lists = props.list;

  console.log(props);
  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
  return (
    <div>
      <ListItems>
        {my_lists.map((list, index) => {
          console.log(list);
          return (
            <span key={index}>
              <PropBox>
                <HashTag># </HashTag> {list}
              </PropBox>
            </span>
          );
        })}
      </ListItems>
    </div>
  );
};

const HashTag = styled.span`
  font-weight: 900;
  font-size: 13px;
  vertical-align: 2px;
  color: #0d6efd;
`;
// 한페이지에서 랜덤 만들어짐 ${getRandom(-10,10)}
// const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const PropBox = styled.div`
  background-color: #fff;
  color: #474747;
  display: inline-block;
  padding: 0.1rem 0.8rem 0.03rem 0.6rem;
  margin: 0.5rem;
  border-radius: 99rem;
  box-shadow: 0 0 0.5rem 0.2rem rgba(13, 110, 253, 0.25);
  word-spacing: 5px;
  font-size: 17px;
  &:hover {
    color: #fff;
    background-color: #0d6efd;
    box-shadow: 0 0.5rem 0.9rem 0.2rem rgba(13, 110, 253, 0.75);
    transform: rotate(-10deg);
    font-weight: 500;
    word-spacing: 2px;
    font-size: 19px;
    margin: 0.7rem;
    & + div {
      visibility: visible;
      opacity: 1;
    }
  }
  transition: font-size 0.4s ease-in-out, margin 0.4s ease-in-out,
    transform 0.4s ease-in-out, color 0.2s ease-in-out,
    background-color 0.2s ease-in-out, box-shadow 0.5s ease-in-out;
`;
const ListItems = styled.div`
  padding: 5px 10px;
  margin: 5px;
  line-height: 40px;
`;
// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;
