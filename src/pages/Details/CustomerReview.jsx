import { MdModeEditOutline } from "react-icons/md";
import Rating from "react-rating";
import './design.css'
import { useState } from "react";


const CustomerReview = ({item}) => {
    const[showForm, setShowForm]=useState(false)

   
    return (
        <div>
            <div className="flex md:flex-row flex-col justify-around items-center gap-3 ">
            <div className="flex flex-row justify-start items-center gap-2">
            <p className="text-6xl font-bold">{item.CustomerReviewsAndRatings?.Ratings}</p>
            <Rating
                initialRating={item.CustomerReviewsAndRatings.Ratings}
                readonly
                fullSymbol={<span className="text-[#047857] text-2xl">★</span>}
                emptySymbol={<span className="text-black text-2xl">☆</span>}
              />
            </div>
            <div>
                <button onClick={() => setShowForm((prev) => !prev)} className="btn-outline border-2 border-gray-300 text-2xl hover:bg-black hover:text-white flex flex-row justify-center items-center gap-2 p-2"><MdModeEditOutline />Write A Review</button>
            </div>
            </div>

           {
            showForm && (
                <form className="m-16">
                <div className="flex md:flex-row flex-col justify-start items-center md:gap-32 gap-3 ">
                <div>
                <p className="md:text-xl text-lg font-bold">Name</p>
                <input className="border-b-2 outline-none" type="text" />
                </div>
                <div>
                <p className="md:text-xl text-lg font-bold">Email</p>
                <input className="border-b-2 outline-none" type="email" name="" id="" />
                </div>
                </div>
                <div className="flex md:flex-row flex-col justify-start items-center md:gap-32 gap-3 ">
                <div>
                <p className="md:mt-10 mt-5 md:text-xl text-lg font-bold">Your Rating</p>
                <form className="rating mt-2">
                <label>
    <input type="radio" name="stars" value="1" />
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="2" />
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="3" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>   
  </label>
  <label>
    <input type="radio" name="stars" value="4" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="5" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>

                </form>
                </div>
                <div>
                <p className="mt-5 md:text-xl text-lg font-bold ">Title of Review</p>
                <input className="mt-2 border-b-2 outline-none" type="text" name="" id="" />
                </div>
                </div>
                <p className="mt-5 md:text-xl text-lg font-bold">How was your overall experience?</p>
                <textarea className="mt-2 border-b-2 outline-none md:w-1/3 md:h-20" name="" id=""></textarea>
            <br />
                <input className="mt-10" type="file" name="" id="" />
            </form>
            )
           }
            
            
        </div>
    );
};

export default CustomerReview;