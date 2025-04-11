
import {  useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";


const VideoBackGround = () => {
    const  videoTrailer=useSelector((store) => store.movie?.videotrailer)
   useVideoTrailer();
 ;
  return (
    <>
      <div className=" w-screen">
        <iframe
  className="w-screen aspect-video"
        
          src={"https://www.youtube.com/embed/ZNKX2vGRPMA?si=1zJO7c4mUL4XKec2" +  videoTrailer?.key +"?&autoplay=1&mute=1" }
          title="YouTube video player"
        
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
         
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackGround;
