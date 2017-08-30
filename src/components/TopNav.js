import React from "react";

function TopNav(props) {
  console.log("topnav what's up",props);
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={ () => {props.changeCategory("headlights")}}>Car lights</a></li>
        <li><a href="#" onClick={ () => {props.changeCategory("tires")}}>Car wheels</a></li>
        <li><a href="#" onClick={ () => {props.changeCategory("bumpers")}}>Car bumpers</a></li>
        <li><a href="#" onClick={ () => {props.changeCategory("audio")}}>Car Audio</a></li>
        <li><a href="#" onClick={ () => {props.changeCategory("bumpers")}}>Truck Bumpers</a></li>
        <li><a href="#" onClick={ () => {props.changeCategory("headlights")}}>Feedback</a></li>
        <div className="clear"> </div>
      </ul>
    </div>
  );
}

export default TopNav;
