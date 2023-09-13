import React from 'react' // react
import background from "../assets/login.jpg"; // bg-img import
import styled from "styled-components"; // for css


export default function BackgroundImage() {
  // yha ek container mai bas bg-img hai
  return (
    <Container>
        <img src={background} alt="background" />
    </Container>
  );
}
// css for bg-img
const Container = styled.div`
    height: 100vh;
    width: 10vw;
    
    img{
        height: 100vh;
        width: 100vw;
    }
`;