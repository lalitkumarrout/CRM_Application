import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  function handleInputChange(e) {
    const {name,value}=e.target;
    //console.log(name,value);
    setLoginDetails({
      ...loginDetails,
      [name]:value
    })
    
  }

   function onSubmit() {
    if(!loginDetails.email || !loginDetails.password) return;
    console.log(loginDetails)
    try {
      const response =  dispatch(login(loginDetails));
      console.log(response);
    } catch (error) {
      console.error("Failed to login:", error);
    }
  }
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body flex items-center flex-col ">
          <div className="w-full flex justify-center">
            <h2 className="card-title text-4xl text-white ">Login</h2>
          </div>

          <div className="w-full">
            <input
              onChange={handleInputChange}
              name="email"
              autoComplete="one-time-code"
              type="text"
              placeholder="email..."
              className="input text-white input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="w-full">
            <input
              onChange={handleInputChange}
              name='password'
              autoComplete="one-time-code"
              type="password"
              placeholder="Password"
              className="input text-white input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="card-actions w-full mt-4">
            <button
              onClick={onSubmit}
              className="btn btn-warning w-full font-bold text-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
