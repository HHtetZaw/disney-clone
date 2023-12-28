import React, { useEffect, useRef, useState } from 'react'
import MovieApi from '../Services/MovieApi'

import { MdChevronLeft,MdChevronRight } from "react-icons/md";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth;



export default function Slider() {

    const elementRef = useRef();
    const [movieList,setMovieList] = useState([]);

    useEffect(() =>{
        getTrendingMovies();
    },[])

    const getTrendingMovies = ()=> {
        MovieApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
    
  return (
    <div>
        <MdChevronLeft className='hidden md:block bg-transparent text-white text-[25px] absolute mx-8 mt-[150px] cursor-pointer'
        onClick={()=>sliderLeft(elementRef.current)} />
        <MdChevronRight  className='hidden md:block bg-transparent right-0 text-white text-[25px] absolute mx-8 mt-[150px] cursor-pointer'
        onClick={()=>sliderRight(elementRef.current)}/>

        <div className='flex overflow-x-auto w-full px-16 py-4
        scroll-smooth scrollbar-none' ref={elementRef}>
            {movieList.map((item)=>(
                <img src={IMAGE_BASE_URL+item.backdrop_path} 
                className=' md:h-[310px] object-cover
                object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all
                duration-200 ease-in' />
            ))}
        </div>


    </div>

    
  )
}
