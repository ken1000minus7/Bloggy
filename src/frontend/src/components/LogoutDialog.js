import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Dialog, DialogContent } from "@mui/material";
import logoutAnim from '../assets/logout.json'
import Lottie from "react-lottie-player";
import useWindowSize from "../hooks/useWindowSize";

export const LogoutDialog = ({ open, setOpen }) => {
    let navigate = useNavigate()

    const { width } = useWindowSize();

    const handleLogout = () => {
        localStorage.removeItem("jwtToken")
        localStorage.removeItem("username")
        window.dispatchEvent(new Event("storage"))
        setOpen(false)
        navigate("/")
    }

    const handleCancel = () => {
        setOpen(false)
    }
    return (
        <Dialog
            open={open}
            onClose={handleCancel}
        >
            <DialogContent className="rounded-[30px]">
                <div className="flex flex-row items-center sm:flex-col">
                    <div className="text-[30px] font-bold flex-auto sm:text-center sm:text-[25px]">
                        Are you sure you want to logout?
                    </div>
                    <Lottie
                        play
                        loop
                        animationData={logoutAnim}
                    />
                </div>
                <div className="flex flex-row justify-evenly w-[100%] mt-[20px]">
                    <Button
                        onClick={handleLogout}
                        style={{ fontSize: width < 640 ? "15px" : "20px" }}
                        variant="outlined"
                    >
                        Yes
                    </Button>
                    <Button
                        onClick={handleCancel}
                        style={{ fontSize: width < 640 ? "15px" : "20px" }}
                        variant="outlined"
                    >
                        No
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}