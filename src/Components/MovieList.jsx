import React, { useEffect, useRef, useState } from 'react'
import MovieApi from '../Services/MovieApi';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';

export default function MovieList({genreId,index_}) {

    const [movieList,setMovieList] = useState([])
    const elementRef = useRef(null);
    useEffect(() => {
        getMovieByGenreId();
    },[])

    const getMovieByGenreId = () => {
        MovieApi.getMovieByGenre(genreId)
        .then(resp =>{
            setMovieList(resp.data.results)
        })
    }

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
        element.scrollRight += 500;
    }

  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] gap-3 bg-transparent text-white p-2 z-10 cursor-pointer hidden md:block absolute
        ${index_%3==0? 'mt-[80px]' : 'mt-[150px]'}`} />


        <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none
        scroll-smooth pt-4 px-3 pb-4'>
            {movieList.map((item,index)=> (
                 <>
                 {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
                  </>
            ))}
        </div>
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] bg-transparent text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}
