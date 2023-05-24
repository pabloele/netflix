import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
      console.log(response.data);
    });
  }, [fetchURL]);

  return (
    <div>
      {/* {movies
        ? console.log(
            `https://image.tmdb.org/t/p/w500${movies[1]?.backdrop_path}`
          )
        : console.log("nada")} */}

      <h2 className="text-white font-bold md:text-xl p-4" title="">
        {title ? title : null}
      </h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {/* <img
            src={`https://image.tmdb.org/t/p/w500/${movies[0].backdrop_path}`}
            alt={"/"}
          /> */}

          {movies?.map((item, id) => (
            <div
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                alt={item.title ? item.title : "img"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
