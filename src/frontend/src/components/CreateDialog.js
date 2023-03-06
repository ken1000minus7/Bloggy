import { Button, Dialog, DialogContent } from '@mui/material';
import React, { useState } from 'react'
import Lottie from 'react-lottie-player';
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import logoutAnim from "../assets/create.json"
import { useWindowSize } from '@react-hook/window-size';
function CreateDialog({ open, setOpen, title, content }) {
    let navigate = useNavigate()

    const { width } = useWindowSize();

    const handleCancel = () => {
        setOpen(false)
    }



    const handleCreate = () => {
        if (title === "" || content === "") {
            toast.error("One or more fields are empty", {
                position: toast.POSITION.TOP_CENTER
            });
            return
        }
        axios({
            url: `${process.env.REACT_APP_API_BASE_URL}/user/${localStorage.getItem("username")}/blog`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
            },
            data: {
                "title": title,
                "content": content
            }
        })
            .then(response => {
                navigate(`/blog/${response.data}`)
            })
            .catch(error => {
                console.log(error)
                toast.error(error.response.data, {
                    position: toast.POSITION.TOP_CENTER
                });
            })

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
                        Are you sure you want to create?
                    </div>
                    <span className="w-[250px]">
                        <Lottie
                            play
                            loop
                            animationData={logoutAnim}
                        />
                    </span>
                </div>
                <div className="flex flex-row justify-evenly w-[100%] mt-[20px]">
                    <Button
                        onClick={handleCreate}
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

export default CreateDialog