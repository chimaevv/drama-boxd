import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your page components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Ratings from "./pages/Ratings";
import DramaDetails from "./pages/DramaDetails";
import Search from "./pages/Search";
import Genre from "./pages/Genre";
import WatchList from "./pages/WatchList"; 
import Reviews from "./pages/Reviews";
import SubmitReview from "./pages/SubmitReview";

import Header from "./components/header"; 
export default function App() {
  return (
    <>
      <Header />  {/* This will show the header on all pages */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/drama-details" element={<DramaDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genre/:genreType" element={<Genre />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/submit-review/:dramaId" element={<SubmitReview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


