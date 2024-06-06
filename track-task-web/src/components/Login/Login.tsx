import { Box, Button, CircularProgress } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";

import loginBackgroundStyle from "./LoginStyle";
import { toast } from "react-toastify";
import { blue, green } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../Store/SigninSlice";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const buttonSx = {
    marginTop: "30px",
    marginLeft: "35px",
    width: "350px",
    ...(success && {
      bgcolor: blue[500],
      "&:hover": {
        bgcolor: blue[800],
      },
    }),
  };

  useEffect(() => {
    // Clear the timer when the component unmounts
    const load = async () => {
      sessionStorage.clear();
      dispatcher(logout("")); /// if we re-render the login page then we pass "empty string" to logout
    };
    load(); //this is for when er direct from login to other pge again click on back up to login then we hve to first sigin then we can go on another page
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const handleButtonClick = () => {
    console.log(loading);
    if (!loading) {
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);

      if (userName == "" || password == "") {
        // toast.error("Password and username should not be empty");
        alert("Password and username should not be empty");
        setLoading(false);
      } else {
        if ("pooja" === userName && "1234" == password) {
          setLoading(true);
          sessionStorage.setItem("username", userName);
          sessionStorage.setItem("password", password);
          dispatcher(login("siginin")); // we are passing state here as signin
          navigate("/");
          //  ("succefully login");
        } else {
          setLoading(false);
          alert("Password and username not matched!!");
        }
      }
      setSuccess(false);
    }
  };
  const userNameHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const passwordHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  // const loginHandler = () => {
  //   if (userName == "" || password == "") {
  //     toast.error("Password and username should not be empty");
  //   } else {
  //     if ("pooja" === userName && "1234" == password) {
  //       toast.success("succefully login");
  //     } else {
  //       toast.error("Password and username not matched!!");
  //     }
  //   }
  // };
  return (
    <>
      {/* <div style={loginBackgroundStyle}> */}
      <div>
        <form className="ml-auto">
          <div className="flex flex-col  space-x-10 ">
            <label className="w-16 font-bold ">Username</label>

            <input
              className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="text"
              placeholder="username"
              id="uid"
              onKeyUp={userNameHandler}
              disabled={loading}
            />
          </div>

          <div className="flex  flex-col  space-x-10   space-y-3.5 ">
            <label className="w-16 font-bold  " style={{ marginTop: "20px" }}>
              Password
            </label>
            <input
              className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
              type="password"
              placeholder="password"
              id="pwd"
              disabled={loading}
              onKeyUp={passwordHandler}
            />
          </div>

          <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Login
          </Button>
          {loading && (
            <CircularProgress
              size={50}
              sx={{
                color: blue[800],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </form>
        <div>
          <Link style={{ color: "blue" }} to="/signup">
            {" "}
            Dont have account? Signup
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;
