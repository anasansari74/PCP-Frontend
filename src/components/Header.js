import { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";

const HeaderDiv = styled.header`
  display: grid;

  grid-template:
    "post-a-thought heading login" auto/
    1fr 2fr 1fr;
  align-items: center;

  padding: 2rem;

  h1 {
    grid-area: heading;
    color: black;
    font-size: 3em;
    font-family: "Averia Serif Libre", cursive;
    text-align: center;
  }

  div.login {
    grid-area: login;
    border: black solid 1px;
    border-radius: 10px;
    padding: 0.5rem 1rem;

    width: 10rem;
    justify-self: right;
    cursor: pointer;
  }

  div.post-a-thought {
    grid-area: post-a-thought;
    justify-self: left;
  }

  div.login:hover {
    background-color: black;
    color: white;
    font-weight: bold;
    box-shadow: 10px 5px 5px lightgrey;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 500px) {
    display: grid;
    grid-gap: 0.5rem;
    grid-template:
      "heading" auto
      "login" auto
      "post-a-thought" auto/
      1fr;

    h1: {
      grid-area: heading;
    }

    div.login: {
      grid-area: login;
    }

    div.post-a-thought: {
      grid-area: post-a-thought;
    }

    .login {
      margin: 0 auto;
    }
  }
`;

export const Header = () => {
  const loggedIn = false;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <HeaderDiv>
      {loggedIn ? (
        <div className="login post-a-thought">Post a thought</div>
      ) : (
        <div></div>
      )}
      <h1>Positive Thought Generator</h1>
      <div className="login" onClick={handleOpen}>
        Log in
      </div>
      <LoginModal open={open} handleClose={handleClose} />
    </HeaderDiv>
  );
};
