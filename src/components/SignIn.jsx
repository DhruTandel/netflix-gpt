import React, { useState } from "react";
import Header from "./Header";

const SignIn = () => {
  const [signInForm, setSignInForm] = useState(true);

  const toggleSignIn = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="relative h-screen w-full">
      <Header />
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg')",
        }}
      ></div>

      <form className="absolute bg-black/80 w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg p-6 ">
        <h1 className="font-semibold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign up"}
        </h1>
      {!signInForm &&<input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 my-4 bg-gray-700 rounded-lg"
      />}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 my-4 bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 my-4 bg-gray-700 rounded-lg"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg cursor-pointer">
          {signInForm ? "Sign In" : "Sign up"}
        </button>
        <p onClick={toggleSignIn} className="py-4 cursor-pointer">
          {signInForm
            ? "new to netflix? Sign up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
