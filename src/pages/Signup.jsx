import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"; // email and pass se id bna k uss data ko firebase mai save krana
import React, { useState } from "react"; // react and use state
import styled from "styled-components"; // styled for css 
import BackgroundImage from "../components/BackgroundImage"; //bg-img import 
import Header from "../components/Header"; // header  mai logo aur login signin button import
import { firebaseAuth } from "../utils/firebase-config"; // firebase k through data read and write
import { useNavigate } from "react-router-dom"; // ek page se dusre page pr navigate k liye

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false); // password read and write
  const navigate = useNavigate(); // for navigate
  // form ki values read and write krna
  const [formValues,setFormValues] = useState({
    email: "",
    password: "",
  });
  // jaise hi email pass dalate hi sign up hona aur agr glt id pass hai to error msg
  const handleSignIn = async ()=> {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    } catch (error) {
      console.log(error)
    }
  };
  // sign in k baad page navigate krna
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/");
  });
  // conatiner jisme pass lgega usme bg-img aur fir class bna k header login mai jaana aur fir vhi form k throgh data put krke sign in krna
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV Shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e)=>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input type="password" placeholder="Password" name="password" 
                value={formValues.password}
              onChange={(e)=>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
}
// yha css har chij ki jo iss page mai hai
const Container = styled.div`
  position: relative;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;

    .body {
      gap: 1rem;

      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }

      .form {
        display: grid;
        grid-template-columns: ${({ showPassword})=>showPassword ?"1fr 1fr":"2fr 1fr"};
        width: 60%;

        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }

        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;

          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
