import React from "react";

const MovieHero = () => {
  return(
    <>
    <div className="md:hidden" >
    <img
    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
    alt="poster"
     />
    </div>

    <div className="hidden md:block lg:hidden">
    <img
    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
    alt="poster"
     />
     </div>

    <div className="relative hidden lg:block" style={{height: "33rem"}}>

    <div className="absolute h-full w-full z-10"
    style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
     />

     <div className="absolute z-30 w-64 h-96 left-64 top-10">
     <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
     alt="Poster"
     className="h-full w-full rounded-xl"
     />
     </div>


    <img
    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
    alt="poster"
    className="w-full h-full"
     />
     </div>

    </>
  )
};



export default MovieHero;
