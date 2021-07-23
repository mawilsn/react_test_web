import React from 'react';

import "./ProfilePicture.css"
import pic from "./assets/profile.jpg";

function ProfilePicture(){
    return(
        <div>
            <img src={pic} alt="profile_pic" className="img-profile"/>
        </div>
        
    );
}

export default ProfilePicture;