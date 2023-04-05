import React , {useState} from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import  {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import {arrayUnion , doc , updateDoc} from 'firebase/firestore'
import { async } from "@firebase/util";

const Movie = ({ item }) => {
  
const [like, setLike] = useState(false);
const{user } = UserAuth()
const [saved, setSaved] = useState(false)
const movieID = doc( db , 'users' , `${user?.email }`)

const saveShow = async ()=> {
  if(user?.email) {
    setLike(!like)
    setSaved(true)
    await updateDoc(movieID , {
saveShow : arrayUnion( {
id :item.id
, title :item.title , 
img :item.backdrop_path
})

    })

  }else {
    alert("Please Login First To Save a Movie")
  }
}

return (
    <div
      key={item.title}
      className="w-[160px] sm:w-[240px] lg:w-[280px]  inline-block cursor-pointer relative p-2 text-white  "
    >
      <img
        src={`//image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
        className="w-full h-auto block"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-small font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300 " />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;