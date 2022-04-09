import React from "react";
import { FcGoogle } from "react-icons/fc";
import useFirebase from "../hook/hook";
import "./Login.css";

const Login = () => {
  const handelInputBtn = (e) => {
    e.preventDefault();
  };
  const { handelSignInGoogle } = useFirebase();

  return (
    <div>
      <form className="form">
        <h2>Please Login</h2>
        <br />
        <input
          className="email"
          placeholder="Your email"
          type="email"
          name=""
          id="1"
        />
        <br />
        <input
          className="password"
          placeholder="Your password"
          type="password"
          name=""
          id="2"
        />
        <br />
        <button
          style={{
            cursor: "pointer",
            margin: "auto",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handelSignInGoogle}
        >
          <FcGoogle style={{ fontSize: "25px", marginRight: "5px" }}></FcGoogle>{" "}
          SignIn With Google
        </button>
        <br />
        <input
          onClick={handelInputBtn}
          className="btn"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
