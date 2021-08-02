import React from "react";
import "./Header.css";
import facebook from "./facebook.svg";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={facebook} alt="" />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input type="text" className="" />
      </div>
      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <AccountCircleOutlinedIcon />
          <h4>Kundan Singh</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
