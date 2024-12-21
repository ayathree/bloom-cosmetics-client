

const Subscription = () => {
    return (
        <div>
            <p className="text-4xl font-semibold mt-32 mb-10 text-center">Stay Up to Date with All News <br /> and Exclusive Offers</p>
            <div className="join flex justify-center items-center mb-10">
  
    <div >
      <input className="input input-bordered join-item lg:w-96" name="email" placeholder="Enter your email" />
    </div>
  
  <div className="indicator">
    
    <button className="btn join-item lg:w-32 w-full bg-black text-white hover:bg-[#047857] ">Subscribe</button>
  </div>
</div>
<div className="flex flex-row justify-center items-center gap-3 mb-32">
<input type="checkbox"  className="checkbox checkbox-md" />
<p className="text-gray-700">I accept the <a href=""><span className="text-black underline">terms & conditions</span></a> and the <a href=""> <span className="text-black underline" >data protection</span></a></p>
</div>
        </div>
    );
};

export default Subscription;