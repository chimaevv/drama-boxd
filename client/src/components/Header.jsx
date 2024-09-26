import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className = 'bg-pink-300' >
      <div className ="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to ="/">
      <h1 className ='font-bold' >DramaBoxd</h1>
      </Link>
      <ul className = 'flex gap-4'>
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
