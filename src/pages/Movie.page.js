/*import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi";

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_yo2fjlHjvrz5V4",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://w7.pngwing.com/pngs/3/952/png-transparent-logo-bookmyshow-business-brand-india-business-text-people-logo-thumbnail.png",
    handler: () => {
      alert("Payment Done")
    },
    theame: {color: "#c4242d"}
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
};

const Movie = () => {
  return(
    <>
    <MovieHero />
    <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
    <div className="flex flex-col item-start gap-3">
    <h2 className="text-gray-800 font-bold text-2xl">About The Movie</h2>
    <p>Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL`s greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.</p>
    </div>
    <div className="my-8">
    <hr />
    </div>

    <div className="flex flex-col item-start gap-3">
    <h1 className="text-gray-800 font-bold text-2xl ">Applicable Offers</h1>
    <div className="flex item-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
    <div className="w-8 h-8">
    <BiCameraMovie className="w-full h-full" />
    </div>

    <div className="flex flex-col item-start">
    <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
    <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
    </div>
    </div>


    </div>


    <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
  Book Tickets
</button>

    </div>

    </>
  );
};


export default Movie;*/

//test area

import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi";

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_yo2fjlHjvrz5V4",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://w7.pngwing.com/pngs/3/952/png-transparent-logo-bookmyshow-business-brand-india-business-text-people-logo-thumbnail.png",
    handler: () => {
      alert("Payment Done")
    },
    theame: {color: "#c4242d"}
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
};

const Movie = () => {
  return(
    <>
    <MovieHero />
    <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
    <div className="flex flex-col item-start gap-3">
    <h2 className="text-gray-800 font-bold text-2xl">About The Movie</h2>
    <p>Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL`s greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.</p>
    </div>
    <div className="my-8">
    <hr />
    </div>

    <div className="flex flex-col item-start gap-3">
    <h1 className="text-gray-800 font-bold text-2xl ">Applicable Offers</h1>
    <div className="flex item-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
    <div className="w-8 h-8">
    <BiCameraMovie className="w-full h-full" />
    </div>

    <div className="flex flex-col item-start">
    <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
    <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
    </div>
    </div>


    </div>

    <div className="my-4">
    <div>
    <h3 className="text-gray-800 font-bold text-2xl">Cast</h3>
    </div>

    <div className="flex flex-row gap-8">
    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/tom-hardy-8994-24-03-2017-12-37-04.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Tom Hardly</h3>
    </div>
    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-williams-1472-14-10-2016-05-24-50.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Michelle Williams</h3>
    </div>

    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/woody-harrelson-2536-24-03-2017-12-37-11.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Woody Harrelson</h3>
    </div>

    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/reid-scott-1095987-04-10-2018-12-39-35.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Reid Scott</h3>
    </div>

    </div>
    </div>
    <hr />

    <div className="m-4">
    <div>
    <h3 className="text-gray-800 font-bold text-2xl">Crew</h3>
    </div>

    <div className="flex flex-row gap-8">
    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/andy-serkis-9888-13-12-2017-05-31-10.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Andy Serkis</h3>
    </div>
    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/avi-arad-iein000236-24-03-2017-12-31-41.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Avi Arad</h3>
    </div>

    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/woody-harrelson-2536-24-03-2017-12-37-11.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Woody Harrelson</h3>
    </div>

    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/matt-tolmach-iein097635-19-12-2017-13-08-01.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Matt Tolmach</h3>
    </div>

    </div>
    </div>


    </div>

    </>
  );
};


export default Movie;
