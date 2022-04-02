import React from "react";
import CustomOrder from "../CustomOrder";
import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";


const Profile = () => {
  
  return (
    <div>
        <h1>Profile</h1>
        <UserSignup/>
        <UserLogin/>
        <CustomOrder/>
        
    </div>
    
  );
}

export default Profile