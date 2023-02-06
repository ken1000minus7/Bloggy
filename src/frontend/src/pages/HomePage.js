import React, { useEffect, useState } from "react";
import axios from "axios";
import { BlogList } from "../components/BlogList";
import Lottie from "react-lottie-player";
import workingAnimation from "../assets/womenworking.json";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { Fade } from "react-awesome-reveal";

export const HomePage = () => {
  let navigate = useNavigate();
  const [latestBlogs, setLatestBlogs] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/blog`, {
        method: "GET",
      })
      .then((response) => setLatestBlogs(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="flex flex-row shadow-md lg:flex-col-reverse lg:pb-[20px]">
        <div className="basis-[50%] flex flex-col items-center justify-center">
          <Fade cascade triggerOnce>
            <div className="font-extrabold font-SourceSansPro text-[38px] ml-[30px] my-[20px] sm:text-[25px] md:text-center md:mx-[10px]">
              Bring your imagination to life with the world's smallest blogging
              community
            </div>
            <Button
              onClick={() => {
                if (localStorage.getItem("username")) {
                  navigate("/create");
                } else {
                  navigate("/login");
                }
              }}
              variant="outlined"
              style={{ fontWeight: "bold", fontSize: "18px", margin: "20px 0" }}
            >
              Create a blog
            </Button>
          </Fade>
        </div>
        <Lottie
          play
          loop
          animationData={workingAnimation}
          className="basis-[50%]"
        />
      </div>
      <div className="mx-[20px] font-SourceSansPro font-bold text-[30px] m-[15px] sm:text-[20px]">
        Latest blogs
      </div>
      <div>
        {latestBlogs && (
          <BlogList
            blogList={latestBlogs.slice(0, Math.min(3, latestBlogs.length))}
          />
        )}
      </div>
    </div>
  );
};
