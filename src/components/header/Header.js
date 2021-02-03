import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <Link to="/gmail" className="header-links"><h4>Gmail</h4></Link>
        <Link to="/images" className="header-links"><h4>images</h4></Link>
      <Apps className="header-appsIcon"/>
      <Avatar className="header-avatarIcon"/>
    </div>
  );
};

export default Header;
