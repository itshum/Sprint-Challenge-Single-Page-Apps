import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TabNav() {

  return (
      <div>
    <div className="ui attached tabular menu">
      <NavLink exact to="/" className="active item">
        <i aria-hidden="true" className="home icon"></i>
        Home Page
      </NavLink>
      <NavLink to="/character" className="active item">
        <i aria-hidden="true" className="users icon"></i>
        Characters
      </NavLink>
      <NavLink to="/location" className="active item">
        <i aria-hidden="true" className="map outline icon"></i>
        Locations
      </NavLink>
      <NavLink to="/episode" className="active item">
        <i aria-hidden="true" className="video icon"></i>
        Episodes
      </NavLink>
    </div>
    {/* <div class="ui bottom attached segment active tab"></div> */}
  </div>
  )
  };