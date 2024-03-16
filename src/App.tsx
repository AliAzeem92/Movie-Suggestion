import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Movie from "./pages/movies/Movie";
import { useDispatch } from "react-redux";
import { searchMovies } from "./redux/slice/searchSlice";
import Navbar from "./components/navbar/Navbar";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { RootState } from "./redux/store";

function App() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const handleSearchChange = (query: string) => {
    dispatch(searchMovies(query));
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar onSearchChange={handleSearchChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="text-white mr-4">Logo</div>
//           <button
//             className="text-white focus:outline-none sm:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//         <div className={`sm:flex mt-4 sm:mt-0 ${isOpen ? "block" : "hidden"}`}>
//           <input
//             type="text"
//             placeholder="Search"
//             className="p-2 mr-4 rounded-md focus:outline-none"
//           />
//           <div className="sm:hidden">
//             <button className="text-white focus:outline-none">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
