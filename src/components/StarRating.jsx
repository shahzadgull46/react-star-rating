import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const getRatingMessage = () => {
    switch (rating) {
      case 0: {
        return "No Rating Yet";
      }
      case 1: {
        return "Poor 😞";
      }
      case 2: {
        return "Fair 😐";
      }
      case 3: {
        return "Good 🙂";
      }
      case 4: {
        return "Very Good 😃";
      }
      case 5: {
        return "Excellent 🤩";
      }
      default: 
      return "";
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900">
<div className="bg-slate-800 rounded-2xl shadow-2xl p-12 w-[90%] max-w-xl flex flex-col items-center gap-6">      <h1 className="text-4xl font-extrabold text-yellow-300 mb-8 tracking-wide">⭐ Star Rating</h1>

      <div className="flex">
        {[...Array(5)].map((item, index) => {
          return (
            <FaStar
              key={index}
              className={`text-6xl mx-1  cursor-pointer transition-all duration-200 hover:scale-110 ${index + 1 <= (hover || rating) ? "text-yellow-400 " : "text-gray-400"} `}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </div>
      <p className="text-white text-2xl mt-9  ">{rating}/5</p>
      <p className="text-white text-lg mt-2">{getRatingMessage()}</p>
      <button onClick={()=>setRating(0)} 
className="mt-8 w-full py-4 px-8 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-lg font-bold shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 active:scale-95" >Reset Rating</button>
    </div>
    </div>
  );
};
export default StarRating;
