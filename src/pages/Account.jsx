import React from "react";
import imgBack from "../../src/signupbackground.jpg";
import SavedMovies from "../components/SavedMovies";
import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";

export default function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover "
          src={imgBack}
          alt="background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Mis favoritos</h1>
          <div className="absolute fixed h-full left-4 translate-y-16">
            <Link to="/">
              <MdChevronLeft className="text-gray shadow-lg" size={60} />
            </Link>
          </div>
        </div>
      </div>

      <SavedMovies />
    </>
  );
}
