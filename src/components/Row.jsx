import axios from "axios";
import React, { useEffect, useState } from "react";
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import Movie from "./Movie";

const Row = ({ title, fetchURL , rowId }) => {
  const [movies, setMovies] = useState([]);
   
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
 
    const slideLeft = ()=> {
            var slider = document.getElementById('slider ' + rowId)
            slider.scrollLeft =  slider.scrollLeft-500


    }
    const slideRight = ()=> {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft =  slider.scrollLeft+500
       

}





  return (
    <>
      <h2 className="text-white font-extrabold font-serif  md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group ">
      <MdChevronLeft size ={40} className= "bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideLeft}/>
        <div id={"slider" + rowId} className= " w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative left-0">
          {/* Slider Div */}
          {movies.map((item, id) => (
            <Movie key ={id}  item ={item} />
          ))}
        </div>
          <MdChevronRight size ={40} className= "bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer right-0 z-10 hidden group-hover:block" onClick={slideRight}/>
      </div>
    </>
  );
};

export default Row;
