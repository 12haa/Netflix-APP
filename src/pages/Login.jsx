import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/bgImage.jpg";
import { UserAuth } from "../context/AuthContext";
const Login = () => {
  const { user, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);

      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen  ">
        <img
          src={bgImage}
          className="hidden sm:block w-full h-full absolute object-cover"
        />

        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px]  mx-auto py-16">
              <h1 className="text-3xl font-bold ">SignIn</h1>
              {error ? <p className="p-3 bg-red-400 my-3"> {error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 rounded bg-gray-700 "
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 rounded bg-gray-700 "
                  type="password"
                  placeholder="Your Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bolc">
                  SignIn
                </button>
                <div className="flex justify-between items-center tex-sm text-gray-600 ">
                  <p className="font-semibold">
                    <input className="mr-2" type="checkbox"></input>Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600"> Hey , New To Neflix?</span>
                  <Link to="/signup" > SignUp </Link>
                </p>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
