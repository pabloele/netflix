import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

export default function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "users", `${user?.email}`),
      (doc) => {
        setMovies(doc.data()?.savedMovies);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteMovie = async (ID) => {
    try {
      const result = movies.filter((item) => item.id !== ID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4" title="">
        My Shows
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="left-0 bg-white rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />

        <div
          id="slider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${item?.img}`}
                alt={item.title ? item.title : "img"}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p
                  className="absolute text-gray-300 top-4 right-4 "
                  onClick={() => deleteMovie(item.id)}>
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>

        <MdChevronRight
          className="right-0 bg-white rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
}
