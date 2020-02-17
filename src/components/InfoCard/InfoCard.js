import React from 'react';
import styled from 'styled-components';
import profilePic from '../../assets/profile-picture.jpg';
import { SocialIcon } from 'react-social-icons';

const StyledInfoCard = styled.div`
  h1{
  color: rgba(0, 0, 0, 0.65);
  }
  margin: 10px auto 10px auto;
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 700px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(115, 7, 16, 0.2);
  @media (min-width: 470px) {
    max-height: 400px;
  }
`;
const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 2px;
  @media (min-width: 470px) {
    mix-blend-mode: overlay;
  }
`;
const StyledAvatar = styled.aside`
background: url(${profilePic}) no-repeat top center/cover;

  filter: grayscale(70%);
  width: 100%;
  height: 50%;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
  @media (min-width: 470px) {
    width: 50%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  }
`;
const StyledInfo = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  height: 50%;

  @media (min-width: 470px) {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: 56.25%;
  }
  h2{
    color: rgba(80, 89, 113, 0.7);
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  margin-top:-20px;
   a {
    margin: 5px;
    background:none;
    margin-right:5px;
    opacity:0.8;
    transition: all 0.4s ease 0s;
    &:hover{
      transition: all 0.4s ease 0s;
        transform:scale(1.1);
        opacity:1;
    }
  }
`;

const StyledBlogLink = styled.a`
    margin-top:25px;
    font-size:24px;
    text-decoration:none;
    transition: all .4s ease;
    padding: 0 12px 4px 12px;
    cursor: pointer;
    color: rgba(80, 89, 113, 0.7);
  &:hover {
    color: #007acc;
    transition: all .4s ease;
  }
`
const StlyedCompany = styled.span`

font-size:14px;
font-weight:300;
`

const InfoCard = () => (
  <StyledInfoCard>
    <StyledBackground />
    <StyledAvatar />
    <StyledInfo>
      <h1>Alex</h1>
      <h1>Sell</h1>
      <h2>FullStack Web Developer<br /> <StlyedCompany>@Prisym ID</StlyedCompany></h2>
      <h2>Reading, England</h2>
      <SocialWrapper>

        <SocialIcon url="http://github.com/alextricityy" />
        <SocialIcon url="https://www.linkedin.com/in/alex-sell" />

      </SocialWrapper>
      <br></br>
      <StyledBlogLink href="#" target="_blank">Blog</StyledBlogLink>
    </StyledInfo>
  </StyledInfoCard>
);

export default InfoCard;
