import React, { useState } from "react";
import "./navbar.css";
import notification from '../../images/notification.png';
import rajesh from '../../images/rajesh.png';

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  }

  return (
    <nav class="navbar navbar-light bg-white">
      <button class="navbar-toggler" type="button" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <img className="notification" src={notification} alt="imgg" height="30" width="30" />
      <div className="profile">
        <img src={rajesh} height="30" width="150" alt="imgg" onClick={handleClick} />
        <i class="bi bi-caret-down-fill"></i>
      </div>
      {isShow &&
        <div className="profile-info">
          <div><i class="bi bi-person-circle"></i>My Account</div>
          <div>Setting</div>
          <div>Support</div>
          <div>Logout</div>
        </div>
      }
    </nav>
  )
};

export default Navbar;