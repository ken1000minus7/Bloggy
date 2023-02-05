import React from "react";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className="m-12 ml-28 mt-20 pb-8 flex justify-center items-center shadow-2xl">
        <div className="flex flex-col justify-center items-center">
          <div className="text-9xl proportional-nums">404</div>
          <div className="text-5xl mb-3 ml-8">There's NOTHING here...</div>
          <div className="text-sm mb-3">
            ...maybe the page you're looking for is not found or never existed.
          </div>
          <button
            onClick={navigateHome}
            class="inline-flex items-center mt-8 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 hover:scale-[1.05] hover:duration-500 text-white text-sm font-medium rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
            Back To Home
          </button>
        </div>
        <div className="">
          <img src="../../dancing_dragon.gif" alt="" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-14 ">
        <div className="border-2 rounded-md p-4 pl-10 pr-10 shadow-lg">
          <div className="italic text-lg p">
            People Die When They Are Killed ⚔️
          </div>
          <div >
            <div className="italic text-lg ml-48">-Shirou</div>
          </div>
        </div>
      </div>
    </div>
  );
};
