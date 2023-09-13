import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";  // yeh hone se ham ek particular mail id se next page pr navigate kr paare hai
import React, { useState } from "react";// normal react with useState import
import styled from "styled-components"; // styled import taki ham isme css likh ske isi page ki
import BackgroundImage from "../components/BackgroundImage"; // yha hamne bg image ko import kra hai bgimg .jsx se
import Header from "../components/Header"; // yha header mai jo use kra hai logo aur login/sign in button vo hai
import { firebaseAuth } from "../utils/firebase-config";   // firebase import 
import { useNavigate } from "react-router-dom"; // ye hai taki ham navigate kr ske ek page se dusre page pr

export default function Login() {
  
  const navigate = useNavigate(); // for navigate
  // for to acces form values and use those values
  const [formValues,setFormValues] = useState({
    email: "",
    password: "",
  });
  // agr email apss same hoge firebase to login hoga vrna error dega
  const handleLogIn = async ()=> {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth,email,password)
    } catch (error) {
      console.log(error)
    }
  };
  // taki ham firebase se navigate krke use kr ske email
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/");
  });
  // ek container jisme bg-img, fir ek class k ander header aur fir ek class jiske andar ek form container jsike andar 3 chije - email, pass and login hit 
  return (
    <Container>
      <BackgroundImage/>
      <div className="content">
        <Header/>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
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
            
              <input type="password" placeholder="Password" name="password" 
                value={formValues.password}
              onChange={(e)=>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              />
              <button onClick={handleLogIn}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
// jo container bnaya usme jo jo place kra uski css
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

    .form-container{
      gap: 2rem;
      height: 85vh;

      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;

        .container{
          gap: 2rem;

          input{
            padding: 0.5rem 1rem;
            width: 15rem;
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
        }
      }
    }
    }
`;
