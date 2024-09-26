import React from "react";

export default function Header() {
  return (
    <div className = 'bg-pink-300' >
      <div className ="flex justify-between items-center max-w-6xl mx-auto p-3">
      <h1 className ='font-bold' >DramaBoxd</h1>
      <ul className = 'flex gap-7'>
        <li> Home</li>
        <li>Genre</li>
        <li>Drama Details</li>
        <li>Profile</li>
        <li>Ratings</li>
        <li>Reviews</li>
        <li>Search</li>
        <li>Sign in</li>
        <li>Sign up</li>
        <li>Submit review</li>
        <li> Watchlist</li>
      </ul>
      </div>
    </div>
  );
}
