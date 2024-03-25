import React, { useState } from "react";
import MainScreen from "./MainScreen";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, pass);
    if (email && pass) {
      setLogin(true);
    } else {
      console.log("please fill");
    }
  }

  return login ? (
    <MainScreen />
  ) : (
    <div className="bg-black h-screen flex items-center justify-center flex-col gap-8">
      <img className="h-1/6" src="../Page1/Group3.png" />
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col gap-8"
      >
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          value={pass}
          onChange={handlePassChange}
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-wide" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
