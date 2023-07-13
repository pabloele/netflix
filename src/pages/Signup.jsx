import React, { useState } from "react";
import imgBack from "../../src/signupbackground.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handlesubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Crear una cuenta
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Recordarme
                  </p>
                  <p>Necesitas ayuda?</p>
                </div>
                <p className="py-8 ">
                  <span className="text-gray-600 mr-4 ">
                    Ya estás suscripto a NETFLIX?
                  </span>
                  <Link to="/login" className="cursor-pointer">
                    Entrar
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full bg-black/60"></div>
        <img
          className="hidden sm:block w-full h-full object-cover"
          src={imgBack}
          alt="signup background"
        />
      </div>
    </>
  );
}
