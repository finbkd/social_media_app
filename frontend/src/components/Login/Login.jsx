import { useRef } from "react";

import "./Login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import { CircularProgress } from "@mui/material";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialScape</h3>
          <span className="loginDesc">Connect with friends and the world around you on SocialScape</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type={"email"} required className="loginInput" ref={email} />
            <input placeholder="Password" type={"password"} minLength="6" required className="loginInput" ref={password} />
            <button disabled={isFetching} className="loginButton">
              {isFetching ? <CircularProgress color="primary" size="15px" /> : "Log in"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">{isFetching ? <CircularProgress color="primary" size="15px" /> : "Create a New Account"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
