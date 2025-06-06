import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { mainDP } from "../App";
import { useAtom } from "jotai";
import { List } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import axios from 'axios'

// const tabs = ["HOME", "ROOM" , "FEATURE"];
const tabs = ["HOME", "PROBLEMS", "ABOUT"];

export const Chips = ({ text, selectedTab, setSelectedTab }) => {
  const handleSelect = () => {
    setSelectedTab(text);
  };

  return (
    <Link
      // to={text == "HOME" ? "/" : `#${text.toLowerCase()}`}
      to={text == "HOME" ? "/" : text.toLowerCase()}
      onClick={handleSelect}
      className={`${
        selectedTab
          ? "text-violet-300"
          : "text-violet-300 hover:text-violet-200 cursor-pointer hover:bg-slate-500 hover:scale-105 p-3 "
      } text-sm transition-colors px-2.5 py-0.5 rounded-md gap-3 relative mx-2`}
    >
      <span className="relative z-10">{text}</span>
      {selectedTab && (
        <motion.span
          layoutId="pill-tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-slate-700 shadow-xl rounded-md"
        ></motion.span>
      )}
    </Link>
  );
};

Chips.propTypes = {
  text: PropTypes.string.isRequired,
  selectedTab: PropTypes.bool.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export const Navbar = () => {
  const [proDP] = useAtom(mainDP);
  const loggedInuser = localStorage.getItem("userDetail");
  const [showProfile, setShowProfile] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [hide, setHide] = useState("false");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let loc = location.href;
    loc == "auth" ? setHide(true) : setHide(false);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      setScroll(true);
    }

    if (scrollPosition < 10) {
      setScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleLogout = async () => {
    try {
        // Send a logout request to the server
        await axios.get('http://localhost:5000/auth/logout', { withCredentials: true });

        // Clear local and session storage
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to the login page or home page
        window.location.href = '/'; // Adjust as needed

        // Provide feedback to the user
        toast.success('Logout successful!', {
            style: {
                background: "#1e293b",
                color: "white"
            },
        });
    } catch (error) {
        // Handle any errors that occur during logout
    //     toast.error('Logout failed. Please try again.', {
    //         style: {
    //             background: "#ff4d4f",
    //             color: "white"
    //         },
    //     });
    //     console.error('Logout error:', error);
    // }
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to the login page or home page
    window.location.href = '/'; // Adjust as needed

    // Provide feedback to the user
    toast.success('Logout successful!', {
        style: {
            background: "#1e293b",
            color: "white"
        },
    });
  }
};

  return (
    <>
      {!hide ? (
        <>
          <nav
            id="navbar"
            className={`w-full hidden md:block fixed top-0 z-40 h-[3rem] pt-2`}
            style={{ backdropFilter: scroll ? "blur(8px)" : "blur(0)" }}
          >
            <div className="hidden md:flex px-6 mt-2 w-full justify-between items-start  max-w-7xl mx-auto">
              <div
                className=""
                onClick={() => {
                  setSelectedTab("HOME");
                }}
              >
                <Link to={"/"} className="text-violet-300 font-bold text-lg">
                  codeArena
                </Link>
              </div>

              <div className="hidden ml-[6.5rem] md:flex justify-evenly">
                {tabs.map((tab) => (
                  <Chips
                    text={tab}
                    selectedTab={selectedTab === tab}
                    setSelectedTab={setSelectedTab}
                    key={tab}
                  />
                ))}
              </div>

              {loggedInuser ? (
                <div className="hidden md:flex z-50 cursor-pointer justify-between gap-3 items-center">
                  {proDP ? (
                    <div
                      onClick={() => {
                        setShowProfile(!showProfile),
                          (document.body.style.overflow = "hidden");
                      }}
                      className="relative w-6 h-6 lg:w-8 lg:h-8 overflow-hidden bg-gray-100 ring-1 ring-[#c4b5fd] rounded-full dark:bg-gray-600 hover:scale-[1.1]"
                    >
                      <img
                        src={proDP}
                        className="w-8 h-8 lg:w-10 lg:h-10 object-cover"
                        alt="profile picture"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setShowProfile(!showProfile),
                          (document.body.style.overflow = "hidden");
                      }}
                      className="relative w-6 h-6 lg:w-8 lg:h-8 overflow-hidden bg-gray-100 ring-2 ring-[#c4b5fd] rounded-full dark:bg-gray-600 hover:scale-[1.1]"
                    >
                      <svg
                        className="absolute  w-8 h-8 lg:w-10 lg:h-10 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}

                  <div
                    onClick={handleLogout}
                    className="ml-2 px-3 py-1 rounded-md border border-[#685a96] bg-transparent text-[#b4a2fc] text-base w-fit cursor-pointer  transition-all ease-linear duration-75  hover:scale-[1.05] font-medium"
                  >
                    Logout
                  </div>
                </div>
              ) : (
                <div className="hidden md:flex gap-3 ">
                  <Link
                    to="/auth"
                    className="px-3 py-1 rounded-md border border-[#685a96] bg-transparent text-[#b4a2fc] text-base w-fit cursor-pointer  transition-all ease-linear duration-75  hover:scale-[1.05] font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth"
                    className="bg-[#b5a3fc] px-3 py-1 rounded-md text-black text-base w-fit cursor-pointer  transition-all ease-linear duration-75 hover:scale-[1.05]"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            <div className={`${showProfile ? "md:block" : "md:hidden"} hidden`}>
              <Profile setShowProfile={setShowProfile} />
            </div>
          </nav>

          <nav
            id="navbar"
            className={`w-[100vw] md:hidden fixed top-0 z-40 h-fit pt-2`}
            style={{ backdropFilter: "blur(8px)" }}
          >
            <div className="flex px-6 mt-2 w-full justify-between items-start  max-w-7xl mx-auto">
              <div
                className=""
                onClick={() => {
                  setSelectedTab("HOME");
                }}
              >
                <Link to={"/"} className="text-violet-300 font-bold text-lg">
                  codeArena
                </Link>
              </div>

              {loggedInuser ? (
                <div className="z-50 cursor-pointer flex justify-between gap-3 items-center">
                  {proDP ? (
                    <div
                      onClick={() => {
                        setShowProfile(!showProfile),
                          (document.body.style.overflow = "hidden");
                      }}
                      className="relative w-6 h-6 lg:w-8 lg:h-8 overflow-hidden bg-gray-100 ring-1 ring-[#c4b5fd] rounded-full dark:bg-gray-600 hover:scale-[1.1]"
                    >
                      <img
                        src={proDP}
                        className="w-10 h-10 lg:w-12 lg:h-12 object-cover"
                        alt="profile picture"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setShowProfile(!showProfile),
                          (document.body.style.overflow = "hidden");
                      }}
                      className="relative w-6 h-6 lg:w-8 lg:h-8 overflow-hidden bg-gray-100 ring-2 ring-[#c4b5fd] rounded-full dark:bg-gray-600 hover:scale-[1.1]"
                    >
                      <svg
                        className="absolute  w-8 h-8 lg:w-10 lg:h-10 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}

                  <List
                    size={25}
                    color="#988bc5"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  />
                </div>
              ) : (
                <div className="flex gap-3 justify-center items-center">
                  <Link
                    to="/auth"
                    className="bg-[#b5a3fc] px-3 py-1 rounded-md text-black text-base w-fit cursor-pointer  transition-all ease-linear duration-75 hover:scale-[1.05]"
                  >
                    Get Started
                  </Link>
                  <List
                    size={25}
                    color="#988bc5"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  />
                </div>
              )}
            </div>

            <div
              className={` ${menu ? "flex" : "hidden"} justify-center items-center`}
            >
              <div
                className={`bg-white/20 mt-2 backdrop-blur-lg py-5 border border-white/20 rounded-lg flex flex-col justify-center items-center w-[90vw]`} // Adjust styles as needed
              >
                <Link
                  onClick={()=>{setMenu(!menu)}}
                  to={"/"}
                  className="p-3 hover:text-violet-300 hover:scale-[1.01] text-lg text-white"
                >
                  HOME
                </Link>
                <Link
                  onClick={()=>{setMenu(!menu)}}
                  to={"/problems"}
                  className="p-3 hover:text-violet-300 hover:scale-[1.01] text-lg text-white"
                >
                  PROBLEMS
                </Link>
                <Link
                  onClick={()=>{setMenu(!menu)}}
                  to={"/about"}
                  className="p- hover:text-violet-300 hover:scale-[1.01] text-lg text-white"
                >
                  ABOUT
                </Link>

                {
                  loggedInuser ? 
                  
                  <div
                  onClick={handleLogout}
                  className="mt-5 bg-violet-700 px-3 py-2 rounded-md border border-[#685a96] bg-transparent text-[#b4a2fc] text-base w-fit cursor-pointer  transition-all ease-linear duration-75  hover:scale-[1.05] font-medium"
                  >
                    Logout
                  </div>
                  :

 <Link
                    to="/auth"
                    className="px-3 mt-3 py-1 rounded-md border bg-violet-600 text-white text-base w-fit cursor-pointer  transition-all ease-linear duration-75  hover:scale-[1.05] font-medium"
                  >
                    Login
                  </Link>
}
              </div>
            </div>

            <div className={`${showProfile ? "block" : "hidden"}`}>
              <Profile setShowProfile={setShowProfile} />
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
};

export default Navbar;
