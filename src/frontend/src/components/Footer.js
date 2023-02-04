import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-[-webkit-fill-available]">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-sm">Copyright © 2022 Bloggy</p>
          <div className="flex">
            <a className="text-sm mr-4" href="#">
              Privacy Policy
            </a>
            <a className="text-sm" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};
