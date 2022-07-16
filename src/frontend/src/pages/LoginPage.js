import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import typingAnimation from '../assets/typinganimation.json'
import Lottie from "react-lottie-player";
import {
    Button,
    Tab,
    Tabs,
    TextField
} from "@mui/material";
import axios from "axios";

export const LoginPage = ()=>{
    let navigate = useNavigate()
    let jwtToken = localStorage.getItem("jwtToken")
    if(jwtToken!=null){
        navigate("/")
    }

    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleWidth = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleWidth)
        return ()=>{
            window.removeEventListener("resize",handleWidth)
        }
    })

    const [value,setValue] = useState(0)

    const changeValue = (event,newValue)=>{
        setUsername("")
        setPassword("")
        setConfirmPassword("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setValue(newValue)
    }

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")

    const changeUsername = (event)=>{
        setUsername(event.target.value)
    }

    const changePassword = (event)=>{
        setPassword(event.target.value)
    }

    const changeConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value)
    }

    const changeFirstName = (event)=>{
        setFirstName(event.target.value)
    }

    const changeLastName = (event)=>{
        setLastName(event.target.value)
    }

    const changeEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handleLogin = ()=>{
        if(username.length===0 || password.length===0){
            alert("One or more fields are empty")
            return
        }
        axios({
            method : "POST",
            url : `${process.env.REACT_APP_API_BASE_URL}/authenticate`,
            headers : {
                "Content-Type" : "application/json"
            },
            data : {
                "username" : username,
                "password" : password
            }
        })
            .then(response =>{
                localStorage.setItem("username",username)
                localStorage.setItem("jwtToken",response.data.token)
                window.dispatchEvent(new Event("storage"))
                navigate("/")
            })
            .catch(error=>{
                alert(error.response.data)
            })
    }

    const handleRegister = ()=>{
        if(username.length===0 || password.length===0 || firstName.length===0 || lastName.length===0 || email.length===0){
            alert("One or more fields are empty")
            return
        }
        if(password!==confirmPassword){
            alert("Confirm password does not match")
            return
        }
        axios({
            method : "POST",
            url : `${process.env.REACT_APP_API_BASE_URL}/user`,
            headers : {
                "Content-Type" : "application/json"
            },
            data : {
                "username" : username,
                "password" : password,
                "firstName" : firstName,
                "lastName" : lastName,
                "email" : email
            }
        })
            .then(response =>{
                localStorage.setItem("username",username)
                localStorage.setItem("jwtToken",response.data.token)
                window.dispatchEvent(new Event("storage"))
                navigate("/")
            })
            .catch(error=>{
                alert(error.response.data)
            })
    }

    return (
        <div>
            <div className="font-bold text-[45px] m-[20px] text-center md:text-[35px]">
                Begin your blogging journey with <span className="font-serif font-extrabold text-[50px] md:text-[40px]">Bloggy</span>
            </div>
            <div className="flex flex-row md:flex-col">
                <Lottie
                    loop
                    animationData={typingAnimation}
                    play
                    className="basis-[50%]"
                />
                <div className="basis-[50%] mr-[30px] rounded-[10px] shadow-md md:mx-[10px]">
                    <Tabs value={value} onChange={changeValue}>
                        <Tab label="Login"/>
                        <Tab label="Register" />
                    </Tabs>
                    {
                        (value===0) ? (
                            <div className="flex flex-col w-[100%] h-[100%] justify-evenly items-center pt-[2px] md:pt-[10px]">
                                <TextField
                                    label="Username"
                                    value={username}
                                    variant="outlined"
                                    className="w-[90%]"
                                    margin="dense"
                                    onChange={changeUsername}
                                />
                                <TextField
                                    label="Password"
                                    value={password}
                                    type="password"
                                    variant="outlined"
                                    className="w-[90%]"
                                    margin="dense"
                                    onChange={changePassword}
                                />
                                <div className="flex flex-col mb-[40px] items-center">
                                    <div className="mb-[10px]">
                                        New user? <Button onClick={(event)=>{changeValue(event,1)}}>Register</Button>
                                    </div>
                                    <Button
                                        variant="outlined"
                                        className="m-[10px]"
                                        style={{fontSize : "20px"}}
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </Button>
                                </div>

                            </div>
                        ) : (
                            <div className="flex flex-col w-[100%] h-[100%] justify-evenly items-center md:pt-[10px]">
                                <div className="flex flex-row w-[90%] md:flex-col">
                                    <TextField
                                        label="First Name"
                                        value={firstName}
                                        variant="outlined"
                                        onChange={changeFirstName}
                                        className="flex-1"
                                        style={{marginRight : width>760 ? "10px" : "0px"}}
                                    />
                                    <TextField
                                        label="Last Name"
                                        value={lastName}
                                        variant="outlined"
                                        onChange={changeLastName}
                                        className="flex-1"
                                        style={{marginLeft : width>760 ? "10px" : "0px"}}
                                    />
                                </div>
                                <TextField
                                    label="Username"
                                    value={username}
                                    variant="outlined"
                                    className="w-[90%]"
                                    onChange={changeUsername}
                                />
                                <TextField
                                    label="Email"
                                    value={email}
                                    type="email"
                                    variant="outlined"
                                    className="w-[90%]"
                                    onChange={changeEmail}
                                />
                                <div className="flex flex-row w-[90%] md:flex-col">
                                    <TextField
                                        label="Password"
                                        value={password}
                                        type="password"
                                        variant="outlined"
                                        onChange={changePassword}
                                        className="flex-1"
                                        style={{marginRight : width>760 ? "10px" : "0px"}}
                                    />
                                    <TextField
                                        label="Confirm Password"
                                        value={confirmPassword}
                                        type="password"
                                        variant="outlined"
                                        onChange={changeConfirmPassword}
                                        className="flex-1"
                                        style={{marginLeft : width>760 ? "10px" : "0px"}}
                                    />
                                </div>
                                <div className="flex flex-col mb-[55px] items-center md:mb-[10px]">
                                    <div>
                                        Already have an account? <Button onClick={(event)=>{changeValue(event,0)}}>Login</Button>
                                    </div>
                                    <Button
                                        variant="outlined"
                                        style={{fontSize : "20px"}}
                                        onClick={handleRegister}
                                    >
                                        Register
                                    </Button>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}