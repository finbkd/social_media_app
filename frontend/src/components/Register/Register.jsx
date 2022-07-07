import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password dont match");
    } else {
      const user = {
        userName: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post("api/auth/register", user);
        navigate("/login");
      } catch (err) {}
    }
    // loginCall({ email: email.current.value, password: password.current.value }, dispatch);
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
            <input placeholder="UserName" required ref={username} className="loginInput" />
            <input placeholder="Email" required ref={email} className="loginInput" />
            <input placeholder="Password" required ref={password} className="loginInput" />
            <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log in to your account</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
