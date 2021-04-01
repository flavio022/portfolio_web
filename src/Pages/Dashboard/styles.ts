import styled, { keyframes } from "styled-components";
import { shade } from "polished";
export const Container = styled.div``;
export const Header = styled.header`
  padding: 82px 0;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #585956;
  }
  h2 {
    color: #f2f2f2;
  }
  h3 {
    color: #bfab49;
    text-align: center;
    font-size: 20px;
  }
`;

export const ImgPerfil = styled.div`
  margin: 50px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;

export const SocialMedia = styled.div``;

export const AboutMe = styled.div`
  display: flex;
  padding: 62px 0;
  background: #8c8c8c;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    color: #f2f2f2;

    font-size: 30px;
  }
  p {
    text-align: inherit;
    padding: 20px;
    font-size: 20px;
  }
  div {
    width: 50%;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;

  button {
    padding: 10px;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
`;
export const MyWorks = styled.div`
  display: flex;
  background: #f2f2f2;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px;
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  align-items: center;
  justify-content: center;

  div {
    margin: 5px;
    padding: 5px;
    align-items: center;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
    }
    :hover {
    }
  }
  img {
    width: 650px;
    height: 400px;
    cursor: pointer;
    border: solid;
  }
  img:hover {
    opacity: 0.3;
  }
`;

export const Tecnlogies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  align-items: center;
  justify-content: center;
`;
