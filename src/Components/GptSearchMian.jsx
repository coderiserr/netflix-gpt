import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { LOGO } from '../utils/constant'

const GptSearchMian = () => {
  return (
   <>
   <div className="absolute -z-20">
           <img
             className="w-full h-auto"
             src={LOGO}
             alt="background"
           />
         </div>
   <GptSearchBar/>
   <GptMoviesSuggestion/>
   </>
  )
}

export default GptSearchMian