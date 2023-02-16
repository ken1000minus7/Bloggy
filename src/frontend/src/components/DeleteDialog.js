import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Dialog, DialogContent } from "@mui/material";
import deleteAnim from '../assets/delete.json'
import Lottie from "react-lottie-player";
import axios from "axios";
import useWindowSize from "../hooks/useWindowSize";

export const DeleteDialog = ({ open, setOpen, id }) => {
    let navigate = useNavigate()

    const {width} = useWindowSize();

    const handleDelete = () => {
        axios({
            url: `${process.env.REACT_APP_API_BASE_URL}/blog/${id}`,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
            },
            data: {
                "id": id
            }
        })
            .then(response => {
                navigate(`/home`)
            })
            .catch(error => {
                console.log(error)
                alert(error.response.data)
            })
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
                        Are you sure you want to delete this blog?
                    </div>
                    <Lottie
                        play
                        loop
                        animationData={deleteAnim}
                    />
                </div>
                <div className="flex flex-row justify-evenly w-[100%] mt-[20px]">
                    <Button
                        onClick={handleDelete}
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