import React from "react";
import imgBack from "../../src/signupbackground.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  return (
    <div>
      <div className="w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
              {error ? <p className="p-3 mt-4 bg-red-400">{error}</p> : null}
              <form
                onSubmit={handlesubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Iniciar Sesión
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Recordarme
                  </p>
                  <p>Nececitas ayuda?</p>
                </div>
                <p className="py-8 ">
                  <span className="text-gray-600 mr-4 ">
                    Nuevo/a en NETFLIX?
                  </span>
                  <Link to="/login" className="cursor-pointer">
                    Crear una cuenta
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
    </div>
  );
}
