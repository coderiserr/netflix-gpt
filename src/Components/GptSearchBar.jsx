import React, { lazy } from 'react'
import lang from '../utils/langConatant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langkey=useSelector((store)=>store.config.language)
   
   
    
  return (
  <div className='pt-[35%] md:pt-[10%] flex justify-center'>
    <form  className="w-full md:w-1/2 bg-black grid grid-cols-12" >
        <input    className=" p-4 m-4 col-span-9" type="text" placeholder={lang[langkey].gptSearchPlaceholder} />
        <button   className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[langkey].search}</button>
    </form>
  </div>
  )
}

export default GptSearchBar