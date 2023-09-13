import React from 'react' // react
import styled from "styled-components"; // styled for css
import logo from "../assets/logo1.png"; // logo import
import { useNavigate } from 'react-router-dom'; // taki navigate kr ske

export default function Header(props) {
    const navigate = useNavigate(); // for navigate
    // conatainer jisme ek class mai logo aur ek button jisme login aur sign in 2 option ho
  return (
    <Container className="flex a-center j-between">
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
            {props.login ? "Log In" : "Sign In"}
        </button>
    </Container>
  );
}
// yha css for this page
const Container = styled.div`
    padding: 0 4rem;

    .logo{

        img{
            height: 5rem;
        }
    }
    
    button{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
`;
